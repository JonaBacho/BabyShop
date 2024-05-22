<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProduitResource;
use App\Models\Produit;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    // tous les produits pour la page d'acceuil
    public function ProduitsHome(Request $request)
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(8));
    }

    // Produits d'une catégorie dont l'id est passé dans l'url
    public function categorieProduit(Request $request)
    {
        $category_product = Produit::where('idCategorie', $request->idCategorie)->where('actif', 1)->paginate(10);
        return ProduitResource::collection($category_product);
    }


    // details d'un produit dont on connait le codePro
    public function produitDetails(Request $request)
    {
        $productDetails = Produit::where('codePro', $request->codePro)->with('categorie')->with('photo');

//        return $productDetails = Product::with('productCategory')->with('productImage')->find($request->id);
        return response()->json($productDetails, 200);
    }
}
