<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\LigneCarte;
use App\Models\Produit;

class LigneFacture extends Model
{
    use HasFactory;
    protected $table = 'lignefacture';
    protected $primaryKey = 'idLFac';
    public $timestamps = false;
    protected $fillable = [
        'idLFac',
        'codePro',
        'idFac',
        'prix',
        'qte',
    ];

    // une ligne facture correspond à une seule Facture
    public function facture(){
        return $this->belongsTo(Facture::class, 'idFac', 'idFac');
    }

    // une ligne facture correspond à un seul produit
    public function produit(){
        return $this->belongsTo(Produit::class, 'codePro', 'codePro');
    }
}
