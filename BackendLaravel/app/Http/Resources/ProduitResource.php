<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProduitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // calcul d'ancien prix
        if ($this->prix > $this->prixAchat){
            $prix = $this->prixAchat;
            $ancienPrix = $this->prix;
        }else
        {
            $prix = $this->prix;
            $ancienPrix = $this->prixAchat;
        }
        

        // calcul aléatoire d'un nombre d'étoile
        $star = mt_rand(2, 4) + (mt_rand(0, 9)/10);

        return [
            'codePro' => $this->codePro,
            'nomPro' => $this->nomPro,
            'idCategorie' => $this->idCategorie,
            'imageUrl' => $this->imageUrl,
            'prix' => $prix,
            'ancienPrix' => $ancienPrix,
            'qte' => $this->qte,
            'description' => $this->description,
            'codeArrivage' => $this->codeArrivage,
            'actif' => $this->actif,
            'dateInsertion' => $this->dateInsertion,
            'prixAchat' => $this->prixAchat,
            'pourcentage' => $this->pourcentage,
            'promo' => $this->promo,
            'etoile' => $star, 
            'size1' => $this->size1,
            'size2' => $this->size2,
            'typeSize' => $this->typeSize,
            'categorieInfo'=> new ProduitCategorieResource($this->categorie),
        ];
    }
}
