<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProduitResource;
use App\Models\Produit;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function ProduitsHome()
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(8));
    }

    public function categorieProduit(Request $request)
    {
        $category_id = $request->category_id;
        $category_product = Produit::where('idCategorie', $category_id)->where('actif', 1)->get();
        return ProduitResource::collection($category_product);
    }

    public function produitDetails(Request $request)
    {
        $productDetails = Produit::with('categorie')->with('photo')->find($request->id);

//        return $productDetails = Product::with('productCategory')->with('productImage')->find($request->id);
        return response()->json($productDetails);
    }
}