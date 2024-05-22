<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:client',
            'password' => 'required|string|min:8',
            'role' => 'required|string|in:client,gestionnaire'
        ]);

        if ($request->role === 'client') {
            $client = Client::create([
                'nom' => $request->nom,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            return response()->json(['message' => 'Client created successfully'], 201);
        } elseif ($request->role === 'gestionnaire') {
            $gestionnaire = Gestionnaire::create([
                'nomGest' => $request->nom,
                'login' => $request->email,
                'pwd' => Hash::make($request->password),
                'typeGest' => 'default',
                'actif' => 1,
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

        $client = Client::where('email', $request->email)->first();
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
                'redirect_url' => '/gestionnaire/dashboard',
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
