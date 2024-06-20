<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ProduitResource;
use App\Http\Resources\ProduitDetailsResource;
use Illuminate\Support\Facades\Validator;
use App\Models\Produit;
use App\Models\Photo;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    // creer un produit par un gestionnaire
    public function create(Request $request)
    {
        try{
            $gestionnaire = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'nomPro' => 'required|string|max:255',
                    'idCategorie' => 'required|int|exists:categorie,idCat',
                    'description' => 'required|string',
                    'prix' => 'required|decimal:0,2',
                    'qte' => 'required|numeric',
                    'codeArrivage' => 'required|string',
                    'prixAchat' => 'required|decimal:0,2',
                    'actif' => 'required|int',
                    'pourcentage' => 'required|decimal;0,2',
                    'promo' => 'required|int',
                    'size1' => 'required|int',
                    'size2' => 'required|int',
                    'typeSize' => 'required|int',
                    'imageUrl' => 'nullable|string',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $produit = Produit::create([
                'nomCat' => $request->nomCat,
                'idCategorie' => $request->idCategorie,
                'description' => $request->description,
                'prix' => $request->prix,
                'qte' => $request->qte,
                'codeArrivage' => $request->codeArrivage,
                'prixAchat' => $request->prixAchat,
                'actif' => $request->actif,
                'pourcentage' => $request->pourcentage,
                'promo' => $request->promo,
                'size1' => $request->size1,
                'size2' => $request->size2,
                'typeSize' => $request->typeSize,
                'imageUrl' => $request->imageUrl ?? null,
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Product created successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    // mettre à jour un produit
    public function update(Request $request, $codePro)
    {
        try{
            $gestionnaire = Auth::user();
            $validateUser = Validator::make($request->all(),
                [
                    'nomPro' => 'required|string|max:255',
                    'idCategorie' => 'required|int|exists:categorie,idCat',
                    'description' => 'required|string',
                    'prix' => 'required|decimal:0,2',
                    'qte' => 'required|numeric',
                    'codeArrivage' => 'required|string',
                    'prixAchat' => 'required|decimal:0,2',
                    'actif' => 'required|int',
                    'pourcentage' => 'required|decimal;0,2',
                    'promo' => 'required|int',
                    'size1' => 'required|int',
                    'size2' => 'required|int',
                    'typeSize' => 'required|int',
                    'imageUrl' => 'nullable|string',
                ]);
                
                if($validateUser->fails()){
                    return response()->json([
                        'status' => false,
                        'message' => 'Validation Error',
                        'errors' => $validateUser->errors(),
                    ], 401);
                }

            $produit = Produit::findOrFail($codePro);
            $produit->nomPro = $request->nomPro;
            $produit->idCategorie = $request->idCategorie;
            $produit->description = $request->description;
            $produit->prix = $request->prix;
            $produit->qte = $request->qte;
            $produit->codeArrivage = $request->codeArrivage;
            $produit->prixAchat = $request->prixAchat;
            $produit->pourcentage = $request->pourcentage;
            $produit->promo = $request->promo;
            $produit->size1 = $request->size1;
            $produit->size2 = $request->size2;
            $produit->typeSize = $request->typeSize;
            $produit->imageUrl = $request->imageUrl ?? null;
            $produit->save();
            return response()->json([
                'status' => true,
                'message' => 'Product updated successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }

    // supprimer un produit
    public function delete(Request $request, $codePro)
    {
        try{
            $gestionnaire = Auth::user();
            $produit = Produit::findOrFail($codePro);
            $produit->deleted();
            return response()->json([
                'status' => true,
                'message' => 'Product deleted successfully',
            ], 201);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }


    // tous les produits pour la page d'acceuil
    public function produitsHome(Request $request)
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(8));
    }

    // tous les produits pour la page Produits
    public function produits(Request $request)
    {
        return ProduitResource::collection(Produit::where('actif', 1)->paginate(20));
    }

    // Produits d'une catégorie dont l'id est passé dans le corps de la requete
    public function categorieProduit(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'idCategorie' => 'required|exists:categorie,idCat',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $category_product = Produit::where('idCategorie', $request->idCategorie)->where('actif', 1)->paginate(10);
        return ProduitResource::collection($category_product);
    }

    // les produits relatifs à un produits dont on connais l'id
    public function produitsRelatifs(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'idCategorie' => 'required|exists:categorie,idCat',
            'codePro' => 'required|exists:produit,codePro',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $same_product = Produit::where('idCategorie', $request->idCategorie)->where('codePro', '!=', $request->codePro)->where('actif', 1)->paginate(5);
        return ProduitResource::collection($same_product);
    }


    // details d'un produit dont on connait le codePro
    public function produitDetails(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'codePro' => 'required|exists:produit,codePro',
        ]);
        
        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Validation Error',
                'errors' => $validateUser->errors(),
            ], 401);
        }
        $productDetails = Produit::where('codePro', $request->codePro)->with('categorie', 'photo')->first();

        //return $productDetails = Product::with('productCategory')->with('productImage')->find($request->id);
        if ($productDetails) {
            return new ProduitDetailsResource($productDetails);
        } else {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
    }
}
