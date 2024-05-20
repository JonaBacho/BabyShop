<?php

use App\Http\Controllers\Api\ProduitCategorieController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('home/produits', [ProduitController::class, 'produitsHome']);
Route::get('categorie/produits', [ProduitController::class, 'categorieProduit']);

// renvoi toutes les catégories pour la page d'acceuil
Route::get('produit/categories', [ProduitCategorieController::class, 'categories']);
//Route::get('produit/all/categorie', [ProduitCategorieController::class, 'allCategorie']);


Route::get('produit/details', [ProduitController::class, 'produitDetails']);

