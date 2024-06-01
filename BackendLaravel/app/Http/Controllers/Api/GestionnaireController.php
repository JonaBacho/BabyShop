<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Gestionnaire;

class GestionnaireController extends Controller
{
    public function update(Request $request)
    {
        try{
            $idGest = $request->input('idGest');
            $validateUser = Validator::make($request->all(),
            [
                'idGest' => 'required|exists:gestionnaire,idGest',
                'nomGest' => 'nullable|string|max:255',
                'login' => 'nullable|string|email|unique:gestionnaire,login,'. $idGest . ',idGest',
                'typeGest' => 'nullable|string|in:magasinier,caissier',
                'mobile' => 'nullable|string|max:255'
            ]);
            
            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateUser->errors(),
                ], 401);
            }

            $gestionnaire = Gestionnaire::findOrFail($idGest);

            $validatedData = array(
                'nomGest' => $request->nomGest,
                'login' => $request->login,
                'typeGest' => $request->typeGest,
                'mobile' => $request->mobile,
            );

            $dataToUpdate = array_filter($validatedData, function ($value) {
                return !is_null($value);
            });

            if (!empty($dataToUpdate)) {
                $gestionnaire->update($dataToUpdate);
            }

            return response()->json([
                'status' => true,
                'message' => 'Gestionnaire updated successfully',
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
