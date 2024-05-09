<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProducitCategorieResource;
use App\Models\Categorie;
use Illuminate\Http\Request;

class ProduitCategorieController extends Controller
{
    public function categories(){

        $categoryList=ProduitCategorieResource::collection(Categorie::all());

        return response()->json($categoryList,200);
    }
}
