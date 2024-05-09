<?php

use App\Http\Controllers\Api\ProduitCategorieController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('home/produits/get', [ProduitController::class, 'produitsHome']);
Route::get('home/categorie/product', [ProduitController::class, 'categorieProduct']);

Route::get('produit/categorie', [ProduitCategorieController::class, 'categories']);
//Route::get('produit/all/categorie', [ProduitCategorieController::class, 'allCategorie']);

Route::get('produit/details', [ProduitController::class, 'produitDetails']);

