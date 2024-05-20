<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProducitCategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;

class ProduitCategorieController extends Controller
{
    // toutes les catégories
    public function categories(){

        $categoryList=ProduitCategorieResource::collection(Categorie::all());

        return response()->json($categoryList,200);
    }

    // catégories d'un produit
    
}
