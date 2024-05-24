<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientCarteController extends Controller
{
    public function update(Request $request, $id)
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
            'password' => 'nullable|string|min:8',
            'sexe' => 'nullable|string|max:255',
            'dateBaiss' => 'nullable|string|max:255',
            'idVille' => 'nullable|int',
            'mobile' => 'nullable|strng|max:255',
            'point' => 'nullable|int',
            'montantTontine' => 'nullable|float',
            'idVille' => 'nullable|int',
            'idVille' => 'nullable|int',

            // Ajoutez d'autres validations selon les besoins
        ]);

        $client = ClientCarte::findOrFail($id);

        $client->update([
            'nom' => $request->nom,
            'email' => $request->email,
            // Mettez à jour d'autres champs si nécessaire
        ]);

        return response()->json(['message' => 'Client updated successfully'], 200);
    }
}
