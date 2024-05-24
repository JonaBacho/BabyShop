<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProduitCategorieController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Authentification
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::get('home/produits', [ProduitController::class, 'produitsHome']);
// pour les trois catégories de la Home Page
Route::get('home/categories', [ProduitCategorieController::class, 'categoriesHome']);

Route::get('categorie/produits', [ProduitController::class, 'categorieProduit']);

// renvoi toutes les catégories
Route::get('produit/categories', [ProduitCategorieController::class, 'categories']);
//Route::get('produit/all/categorie', [ProduitCategorieController::class, 'allCategorie']);


Route::get('produit/details', [ProduitController::class, 'produitDetails']);

