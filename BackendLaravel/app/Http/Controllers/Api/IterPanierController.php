<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Produit;
use App\Models\IterPanier;
use App\Models\ClientCarte;


class IterPanierController extends Controller
{
    public function index(Request $request)
    {
        try{
            $client = Auth::user();
            $cartItems = $client->iterpanier()->with('produit')->get();
            return response()->json([
                'status' => true,
                'message' => 'cart of client',
                'data' => $cartItems,
            ], 200);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
    {
        try{
            $client = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'idClient' => 'required|exists:clientcarte,matr|in:'.$client->matr,
                    'codePro' => 'required|exists:produit,codePro',
                    'quantity' => 'required|int|min:1',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $product = Produit::find($request->codePro);
    
            $cartItem = $product->iterpanier()->where('idClient', $request->idClient)->first();
            if ($cartItem) {
                $cartItem->quantity += $request->quantity;
                $cartItem->save();
            } else {
                $cartItem = new IterPanier([
                    'idClient'  => $request->idClient,
                    'codePro' => $request->codePro,
                    'quantity' => $request->quantity,
                ]);
                $client->iterpanier()->save($cartItem);
            }
            return response()->json([
                'status' => true,
                'message' => 'product added to cart',
                'user' => $client->nom,
                'data' => $cartItem,
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, $idPanier)
    {
        try{
            $validateUser = Validator::make($request->all(),
                [
                    'quantity' => 'required|int|min:1',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }
    
            $client = Auth::user();
            $cartItem = $client->iterpanier()->findOrFail($idPanier);
            $cartItem->quantity = $request->quantity;
            $cartItem->save();
    
            return response()->json([
                'status' => true,
                'message' => 'product updated in cart',
            ], 200);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    public function destroy(Request $request, $idPanier)
    {
        try{
            $client = Auth::user();
            $cartItem = $client->iterpanier()->findOrFail($idPanier);
            $cartItem->delete();

            return response()->json([
                'status' => true,
                'message' => 'cart item deleted',
            ], 200);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
        
    }

}
