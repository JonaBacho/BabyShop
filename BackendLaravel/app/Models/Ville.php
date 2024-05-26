<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    use HasFactory;
    protected $table = 'ville';
    protected $primaryKey = 'idVille';
    public $timestamps = false;
    protected $fillable = [
        'idVille',
        'libelle',
    ];

    // un ville abrite plusieurs clients
    public function clientcarte(){
        return $this->hasMany(ClientCarte::class, 'matr', 'idVille');
    }

    // une ville voit passer plusieurs commande
    public function commande(){
        return $this->hasMany(Commande::class, 'idCommande', 'idVille');
    }
}
