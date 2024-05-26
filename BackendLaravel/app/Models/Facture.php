<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;
    protected $table = 'facture';
    protected $primaryKey = 'idFac';
    public $timestamps = false;
    protected $fillable = [
        'idFac',
        'dateFac',
        'remise',
        'montant',
        'tel',
        'typeFac',
        'idCaissiere',
        'capital',
        'tva',
        'codePromo',
    ];

    // une facture correspond à plusieurs lignecarte
    public function lignecarte(){
        return $this-> hasMany(LigneCarte::class, 'id', 'idFac');
    }

    // une facture est faite par un seul gestionnaire
    public function gestionnaire(){
        return $this-> belongsTo(Gestionnaire::class, 'idCaissiere', 'idGest');
    }

    // a une facture correspond plusieurs plusieurs ligne facture
    public function lignefacture(){
        return $this-> belongsTo(LigneFacture::class, 'idLFac', 'idFac');
    }

}
