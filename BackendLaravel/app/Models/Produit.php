<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $table = 'produit';
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

    // un produit appartient à une seule catégorie
    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'idCategorie', 'idCat');
    }

    // un poduit possede plusieurs photo
    public function photo()
    {
        return $this->hasMany(Photo::class, 'idPhoto', 'codePro');
    }


}
