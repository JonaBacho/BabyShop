<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gestionnaire;
use App\Models\ClientCarte;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        try{
            $validateUser = Validator::make($request->all(),
            [
                'nom' => 'required|string|max:255',
                'email' => [
                    'required',
                    'string',
                    'email',
                    'max:255',
                    function ($attribute, $value, $fail) use ($request) {
                        if ($request->role === 'client' && ClientCarte::where('user', $value)->exists()) {
                            $fail('The email has already been taken.');
                        } elseif ($request->role === 'gestionnaire' && Gestionnaire::where('login', $value)->exists()) {
                            $fail('The email has already been taken.');
                        }
                    },
                ],
                'password' => 'required|string|min:8',
                'role' => 'required|string|in:client,gestionnaire',
                'typeGest' => 'required_if:role,gestionnaire|string|in:magasinier,caissier',
                'mobile' => 'required_if:role,gestionnaire|string|max:255'
            ]);
            
            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateUser->errors(),
                ], 401);
            }

            /*$request->validate([
                'nom' => 'required|string|max:255',
                'email' => [
                    'required',
                    'string',
                    'email',
                    'max:255',
                    function ($attribute, $value, $fail) use ($request) {
                        if ($request->role === 'client' && ClientCarte::where('user', $value)->exists()) {
                            $fail('The email has already been taken.');
                        } elseif ($request->role === 'gestionnaire' && Gestionnaire::where('login', $value)->exists()) {
                            $fail('The email has already been taken.');
                        }
                    },
                ],
                'password' => 'required|string|min:8',
                'role' => 'required|string|in:client,gestionnaire',
                'typeGest' => 'required_if:role,gestionnaire|string|in:magasinier,caissier',
                'mobile' => 'required_if:role,gestionnaire|string|max:255'
            ]);*/

            if ($request->role === 'client') {
                $client = ClientCarte::create([
                    'nom' => $request->nom,
                    'user' => $request->email,
                    'creation' => now(),
                    'pwd' => Hash::make($request->password),
                    'chatID' => mt_rand(0, 2),
                ]);
                return response()->json([
                    'status' => true,
                    'message' => 'Client created successfully',
                    'token' => $client->createToken('auth_token')->plainTextToken,
                    'matr' => $client->matr,
                ], 200);
            } elseif ($request->role === 'gestionnaire') {
                $gestionnaire = Gestionnaire::create([
                    'nomGest' => $request->nom,
                    'login' => $request->email,
                    'pwd' => Hash::make($request->password),
                    'typeGest' => $request->typeGest,
                    'actif' => 1,
                    'mobile' => $request->mobile,
                ]);
                return response()->json([
                    'status' => true,
                    'message' => 'Gestionnaire created successfully',
                    'token' => $gestionnaire->createToken('auth_token')->plainTextToken,
                    'idGest' => $gestionnaire->idGest,
                ], 200);
            }

            return response()->json([
                'status' => false,
                'message' => 'Invalide role',
            ], 400);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
        
    }

    // connexion d'un utilisateur
    public function login(Request $request)
    {

        try{
            $validateLogin = Validator::make($request->all(),
            [
                'nom' => 'required|string',
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);
            
            if($validateLogin->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateLogin->errors(),
                ], 401);
            }

            $client = ClientCarte::where('user', $request->email)->first();
            $gestionnaire = Gestionnaire::where('login', $request->email)->first();

            if ($client && Hash::check($request->password, $client->pwd)) {
                $token = $client->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'message' => 'Login successful',
                    'token' => $token,
                    'role' => 'client',
                    'matr' => $client->matr,
                    'redirect_url' => '/client/dashboard',
                ], 200);
            } elseif ($gestionnaire && Hash::check($request->password, $gestionnaire->pwd)) {
                $token = $gestionnaire->createToken('auth_token')->plainTextToken;
                return response()->json([
                    'message' => 'Login successful',
                    'token' => $token,
                    'role' => 'gestionnaire',
                    'idGest' => $gestionnaire->idGest,
                    'redirect_url' => $gestionnaire->typeGest === 'magasinier' ? '/magasinier/dashboard' : '/caissier/dashboard',
                ], 200);
            }

            return response()->json([
                'status' => false,
                'message' => 'Invalide credential',
            ], 400);

        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }

    }

    //information pour la page profile
    public function profile(Request $request){
        $userData = auth()->user();
        return response()->json([
            'status' => true,
            'message' => 'Profile Information',
            'data' => $userData,
            'id' => auth()->user()->id,
        ], 200);
    }

    // déconnexion
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' => 'User Logout',
        ], 200);
    }

}
