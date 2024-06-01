<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClientCarte;
use App\Models\Produit;

class IterPanier extends Model
{
    use HasFactory;
    protected $table = 'iter_paniers';
    protected $primaryKey = 'idPanier';
    protected $fillable = [
        'idPanier',
        'idClient',
        'codePro',
        'quantity',
    ];

    // un iterpanier correspond à un seul client
    public function clientcarte()
    {
        return $this->belongsTo(ClientCarte::class, 'idClient', 'matr');
    }

    // et à un seul produit
    public function produit()
    {
        return $this->belongsTo(Produit::class, 'codePro', 'codePro');
    }
}
