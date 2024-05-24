<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gestionnaire;
use App\Models\ClientCarte;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
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

        if ($request->role === 'client') {
            $client = ClientCarte::create([
                'nom' => $request->nom,
                'user' => $request->email,
                'creation' => now(),
                'pwd' => Hash::make($request->password),
                'chatID' => mt_rand(0, 2),
            ]);
            return response()->json(['message' => 'Client created successfully'], 201);
        } elseif ($request->role === 'gestionnaire') {
            $gestionnaire = Gestionnaire::create([
                'nomGest' => $request->nom,
                'login' => $request->email,
                'pwd' => Hash::make($request->password),
                'typeGest' => $request->typeGest,
                'actif' => 1,
                'mobile' => $request->mobile,
            ]);
            return response()->json(['message' => 'Gestionnaire created successfully'], 201);
        }

        return response()->json(['message' => 'Invalid role'], 400);
    }

    // connexion d'un utilisateur
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $client = ClientCarte::where('user', $request->email)->first();
        $gestionnaire = Gestionnaire::where('login', $request->email)->first();

        if ($client && Hash::check($request->password, $client->pwd)) {
            $token = $client->createToken('auth_token')->plainTextToken;
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
                'role' => 'client',
                'redirect_url' => '/client/dashboard',
            ], 200);
        } elseif ($gestionnaire && Hash::check($request->password, $gestionnaire->pwd)) {
            $token = $gestionnaire->createToken('auth_token')->plainTextToken;
            return response()->json([
                'message' => 'Login successful',
                'token' => $token,
                'role' => 'gestionnaire',
                'redirect_url' => $gestionnaire->typeGest === 'magasinier' ? '/magasinier/dashboard' : '/caissier/dashboard',
            ], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    // déconnexion
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

}
