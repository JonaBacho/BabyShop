<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;
use App\Models\Gestionnaire;

class GestionStock extends Model
{
    use HasFactory;
    protected $table = 'gestionstock';
    protected $primaryKey = 'idStock';
    public $timestamps = false;
    protected $fillable = [
        'idStock',
        'qte',
        'dateStock',
        'operation',
        'idGest',
        'codePro',
    ];

    // une gestion de stock est initié par un gestionnaire
    public function gestionnaire()
    {
        return $this->belongsTo(Gestionnaire::class, 'idGest', 'idGest');
    }

    // une gestion de stock concerne un produit
    public function produit(){
        return $this->belongsTo(Produit::class, 'codePro', 'codePro');
    } 
}
