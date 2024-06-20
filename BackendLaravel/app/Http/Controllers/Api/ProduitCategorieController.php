<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProduitCategorieResource;
use App\Models\Categorie;
use App\Models\Produit;
use App\Models\Photo;
use Illuminate\Http\Request;
use App\Models\ClientCarte;
use App\Models\Gestionnaire;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class ProduitCategorieController extends Controller
{

    // creer une nouvelle catégorie
    public function create(Request $request){
        try{
            $gestionnaire = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'nomCat' => 'required|string|unique:categorie,nomCat',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $categorie = Categorie::create([
                'nomCat' => $request->nomCat,
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Categorie created successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    // creer une nouvelle categorie avec des produits associés
    public function createWithProducts(Request $request){
        try{
            $gestionnaire = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'nomCat' => 'required|string|unique:categorie,nomCat',
                    'produits' => 'required|array',
                    'produits.*.nomPro' => 'required|string|max:255',
                    'produits.*.prix' => 'required|decimal:0,2',
                    'produits.*.qte' => 'required|numeric',
                    'produits.*.description' => 'required|string',
                    'produits.*.codeArrivage' => 'required|string',
                    'produits.*.prixAchat' => 'required|decimal:0,2',
                    'produits.*.actif' => 'required|int',
                    'produits.*.pourcentage' => 'required|decimal;0,2',
                    'produits.*.promo' => 'required|int',
                    'produits.*.size1' => 'required|int',
                    'produits.*.size2' => 'required|int',
                    'produits.*.typeSize' => 'required|int',
                    'produits.*.imageUrl' => 'nullable|string',
                    'produits.*.photos' => 'nullable|array',
                    'produits.*.photos.*.lienPhoto' => 'required_with:produits.*.photos|string|max:255'
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $category = Categorie::create(['nomCat' => $request->nomCat]);

            foreach ($request->produits as $productData) {
                $product = $category->produit()->create([
                    'nomPro' => $productData['nomPro'],
                    'prix' => $productData['prix'],
                    'qte' => $productData['qte'],
                    'description' => $productData['description'],
                    'codeArrivage' => $productData['codeArrivage'],
                    'actif' => $productData['actif'],
                    'prixAchat' => $productData['prixAchat'],
                    'pourcentage' => $productData['pourcentage'],
                    'promo' => $productData['promo'],
                    'size1' => $productData['size1'],
                    'size2' => $productData['size2'],
                    'typeSize' => $productData['typeSize'],
                    'imageUrl' => $productData['imageUrl']
                ]);
    
                if (isset($productData['photos'])) {
                    foreach ($productData['photos'] as $photoData) {
                        $product->photos()->create([
                            'lienPhoto' => $photoData['lienPhoto']
                        ]);
                    }
                }
            }
           
            return response()->json([
                'status' => true,
                'message' => 'Categorie and products created successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }


    // mettre à jour une catégorie
    public function update(Request $request, $idCat){
        try{
            $gestionnaire = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'nomCat' => 'required|string|unique:categorie,nomCat',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $category = Categorie::findOrFail($idCat);
            $category->nomCat = $request->nomCat;
            $category->save();
           
            return response()->json([
                'status' => true,
                'message' => 'Categorie update successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    // supprimer une catégorie
    public function delete(Request $request, $idCat){
        try{
            $gestionnaire = Auth::user();
            $category = Categorie::findOrFail($idCat);
            $category->delete();
           
            return response()->json([
                'status' => true,
                'message' => 'Categorie deleted successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }


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

