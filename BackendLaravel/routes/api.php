<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientCarteController;
use App\Http\Controllers\Api\GestionnaireController;
use App\Http\Controllers\Api\ProduitCategorieController;
use App\Http\Controllers\Api\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EnsureClient;
use App\Http\Middleware\EnsureGestionnaire;

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
// tous les produits d'une meme categorie
Route::get('categorie/produits', [ProduitController::class, 'categorieProduit']);

// renvoi toutes les catégories
Route::get('all/categories', [ProduitCategorieController::class, 'categories']);
//Route::get('produit/all/categorie', [ProduitCategorieController::class, 'allCategorie']);


Route::get('produit/details', [ProduitController::class, 'produitDetails']);

// Routes protégées par le middleware Sanctum et les rôles spécifiques
Route::middleware('auth:sanctum')->group(function () {
    
    Route::middleware(EnsureClient::class)->group(function () {
        Route::put('/client/{id}', [ClientCarteController::class, 'update']);
    });

    Route::middleware(EnsureGestionnaire::class)->group(function () {
        Route::put('/gestionnaire/{id}', [GestionnaireController::class, 'update']);
    });
});