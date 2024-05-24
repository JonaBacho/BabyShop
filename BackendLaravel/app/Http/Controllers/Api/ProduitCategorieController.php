<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProduitCategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Models\ClientCarte;
use App\Models\Gestionnaire;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ProduitCategorieController extends Controller
{
    // toutes les catégories
    public function categories(){

        return ProduitCategorieResource::collection(Categorie::paginate(10));
    }

    // trois catégories aléatoire pour la Home Page
    public function categoriesHome(){
        $categoryList = ProduitCategorieResource::collection(Categorie::inRandomOrder()->take(3)->get());

        return response()->json($categoryList,200);
    }
}
