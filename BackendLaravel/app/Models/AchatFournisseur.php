<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Fournisseur;

class AchatFournisseur extends Model
{
    use HasFactory;
    protected $table = 'achatfournisseur';
    protected $primaryKey = 'idAchat';
    public $timestamps = false;
    protected $fillable = [
        'idAchat',
        'lienFac',
        'dateInsertion',
        'montantFac',
        'montantCargo',
        'totalKg',
        'montantGlobal',
        'idFour',
        'idCaro',
    ];

    // un achat fournisseur est fait par un fournisseur
    public function fournisseur()
    {
        return $this-> belongsTo(Fournisseur::class, 'idFour', 'idFour');
    }
}
