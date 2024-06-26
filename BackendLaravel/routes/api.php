<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ClientCarteController;
use App\Http\Controllers\Api\GestionnaireController;
use App\Http\Controllers\Api\ProduitCategorieController;
use App\Http\Controllers\Api\ProduitController;
use App\Http\Controllers\Api\IterPanierController;
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


Route::get('home/produits', [ProduitController::class, 'produitsHome']);
// pour les trois catégories de la Home Page
Route::get('home/categories', [ProduitCategorieController::class, 'categoriesHome']);
// tous les produits d'une meme categorie
Route::get('categorie/produits', [ProduitController::class, 'categorieProduit']);

// renvoi les produits relatifs à un produit pour la page détails
Route::get('/produitsRelatif', [ProduitController::class, 'produitRelatif']);

// renvoi toutes les catégories
Route::get('all/categories', [ProduitCategorieController::class, 'categories']);

// renvoi tous les produits de la BD
Route::get('all/produits', [ProduitController::class, 'produits']);

//Route::get('produit/all/categorie', [ProduitCategorieController::class, 'allCategorie']);


Route::get('produit/details', [ProduitController::class, 'produitDetails']);

// Routes protégées par le middleware Sanctum et les rôles spécifiques
Route::middleware('auth:sanctum')->group(function () {

    // acces aux informations du client pour la page profil
    Route::get('/profile', [AuthController::class, 'profile']);

    Route::post('/logout', [AuthController::class, 'logout']);
    
    Route::middleware(EnsureClient::class)->group(function () {
        // modification des informations du profile du client
        Route::put('/client', [ClientCarteController::class, 'update']);
        // panier du client
        Route::get('/panier/list', [IterPanierController::class, 'index']);
        Route::post('/panier', [IterPanierController::class, 'store']);
        Route::put('/panier/{idPanier}', [IterPanierController::class, 'update']);
        Route::delete('/panier/{idPanier}', [IterPanierController::class, 'destroy']);
    });

    Route::middleware(EnsureGestionnaire::class)->group(function () {
        Route::put('/gestionnaire', [GestionnaireController::class, 'update']);
        // methode d'ajout de categorie par un gestionnaire
        Route::post('/gestionnaire/categorie/', [ProduitCategorieController::class, 'create']);
        Route::post('/gestionnaire/categorieProuits/', [ProduitCategorieController::class, 'createWithProducts']);
        Route::put('/gestionnaire/categorie/{idCat}', [ProduitCategorieController::class, 'upadate']);
        Route::delete('/gestionnaire/categorie/{idCat}', [ProduitCategorieController::class, 'delete']);
        // ajout d'un produit par un gestionnaire
        Route::post('/gestionnaire/produit/', [ProduitController::class, 'create']);
        Route::put('/gestionnaire/produit/{codePro}', [ProduitController::class, 'update']);
        Route::delete('/gestionnaire/produit/{codePro}', [ProduitController::class, 'delete']);
    });
    
});

// routes d'erreur
Route::fallback(function () {
    return response()->json(['message' => 'Route not found.'], 404);
});

// test pour api sécuriser
/*Route::group([
    "middleware" => ["auth:sanctum"]
], function(){
    Route::get('/profiles', [AuthController::class, 'profile']);
});*/