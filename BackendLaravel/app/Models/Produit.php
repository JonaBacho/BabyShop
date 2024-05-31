<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\IterPanier;
use App\Models\Categorie;
use App\Models\Photo;
use App\Models\LigneCommande;
use App\Models\LigneFacture;
use App\Models\GestionStock;

class Produit extends Model
{
    use HasFactory;
    protected $table = 'produit';
    protected $primaryKey = 'codePro';
    protected $fillable = [
        'codePro',
        'idCategorie',
        'nomPro',
        'imageUrl',
        'prix',
        'qte',
        'description',
        'codeArrivage',
        'actif',
        'dateInsertion',
        'prixAchat',
        'pourcentage',
        'promo',
        'size1',
        'size2',
        'typeSize',
    ];

    // un produit apparait dans plusieurs plusieurs iterpanier pour former son panier
    public function iterpanier(){
        return $this->hasMany(IterPanier::class, 'codePro', 'codePro');
    }

    // un produit appartient à une seule catégorie
    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'idCategorie', 'idCat');
    }

    // un poduit possede plusieurs photo
    public function photo()
    {
        return $this->hasMany(Photo::class, 'codePro', 'codePro');
    }

    // un produit apparait dans plusieurs ligne commande
    public function lignecommande()
    {
        return $this->hasMany(LigneCommande::class, 'codePro', 'codePro');
    }

    // un produit apparait dans plusieurs ligne facture
    public function lignefacture()
    {
        return $this->hasMany(LigneFacture::class, 'codePro', 'codePro');
    }

    // un produit apparait dans plusieurs action de stock
    public function gestionstock()
    {
        return $this->hasMany(GestionStock::class, 'codePro', 'codePro');
    }


}
