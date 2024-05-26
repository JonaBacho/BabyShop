<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\ClientCarte;

class ClientCarteController extends Controller
{
    public function update(Request $request)
    {
        try{
            $matr = $request->input('matr');
            $validateUser = Validator::make($request->all(),
            [
                'matr' => 'required|exists:clientcarte,matr',
                'nom' => 'nullable|string|max:255',
                'user' => 'nullable|string|email|unique:clientcarte,user,'.$matr.',matr',
                'sexe' => 'nullable|string|in:Homme,Femme',
                'dateNaiss' => 'nullable|string|max:255',
                'idVille' => 'nullable|int',
                'mobile' => 'nullable|string|max:255',
                'montantTontine' => 'nullable|decimal:0,2',
                'chatID' => 'nullable|int|in:0,1,2',
            ]);
            
            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateUser->errors(),
                ], 401);
            }

            $client = ClientCarte::findOrFail($matr);

            $validatedData = array(
                'nom' => $request->nom,
                'user' => $request->user,
                'sexe' => $request->sexe,
                'dateNaiss' => $request->dateNaiss,
                'idVille' => $request->idVille,
                'mobile' => $request->mobile,
                'montantTontine' => $request->montantTontine,
                'chatID' => $request->chatID,
            );

            $dataToUpdate = array_filter($validatedData, function ($value) {
                return !is_null($value);
            });

            if (!empty($dataToUpdate)) {
                $client->update($dataToUpdate);
            }

            return response()->json([
                'status' => true,
                'message' => 'Client updated successfully',
                'dataUpdtaded' => $dataToUpdate,
            ], 200);

        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
