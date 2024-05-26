<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;
    protected $table = 'commande';
    protected $primaryKey = 'idCommande';
    public $timestamps = false;
    protected $fillable = [
        'idCommande',
        'dateCom',
        'montant',
        'nomClient',
        'mobile',
        'adresse',
        'commentaire',
        'livrer',
        'avance',
        'remise',
        'type',
        'idVille',
    ];

    // une commande s'effectue dans une seule ville
    public function ville(){
        return $this-> belongsTo(Ville::class, 'idVille', 'idVille');
    }

    // une commande possede plusieurs ligne commande
    public function lignecommande(){
        return $this-> hasMany(LigneCommande::class, 'idLigneCom', 'idCommande');
    }

}
