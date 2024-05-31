<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Commande;
use App\Models\Produit;

class LigneCommande extends Model
{
    use HasFactory;
    protected $table = 'lignecommande';
    protected $primaryKey = 'idLigneCom';
    public $timestamps = false;
    protected $fillable = [
        'idLigneCom',
        'idCommande',
        'codePro',
        'quantite',
        'taille',
        'couleur',
        'disponible',
    ];

    // une ligne commande correspond à une unique commmande
    public function commande(){
        return $this->belongsTo(Commande::class, 'idCommande', 'idCommande');
    }

    // une ligne commande correspond à un unique produit
    public function produit(){
        return $this->belongsTo(Produit::class, 'codePro', 'codePro');
    }
}
