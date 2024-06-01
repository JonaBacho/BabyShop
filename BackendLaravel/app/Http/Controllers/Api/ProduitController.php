<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProduitResource;
use App\Http\Resources\ProduitDetailsResource;
use Illuminate\Support\Facades\Validator;
use App\Models\Produit;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    // tous les produits pour la page d'acceuil
    public function produitsHome(Request $request)
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(8));
    }

    // tous les produits pour la page Produits
    public function produits(Request $request)
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(20));
    }

    // Produits d'une catégorie dont l'id est passé dans l'url
    public function categorieProduit(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'idCategorie' => 'required|exists:categorie,idCat',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $category_product = Produit::where('idCategorie', $request->idCategorie)->where('actif', 1)->paginate(10);
        return ProduitResource::collection($category_product);
    }

    // les produits relatifs à un produits dont on connais l'id
    public function produitsRelatifs(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'idCategorie' => 'required|exists:categorie,idCat',
            'codePro' => 'required|exists:produit,codePro',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $same_product = Produit::where('idCategorie', $request->idCategorie)->where('codePro', '!=', $request->codePro)->where('actif', 1)->paginate(5);
        return ProduitResource::collection($same_product);
    }


    // details d'un produit dont on connait le codePro
    public function produitDetails(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'codePro' => 'required|exists:produit,codePro',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $productDetails = Produit::where('codePro', $request->codePro)->with('categorie', 'photo')->first();

        //return $productDetails = Product::with('productCategory')->with('productImage')->find($request->id);
        if ($productDetails) {
            return new ProduitDetailsResource($productDetails);
        } else {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
    }
}
