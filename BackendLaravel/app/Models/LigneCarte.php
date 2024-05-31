<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ClientCarte;
use App\Models\Facture;

class LigneCarte extends Model
{
    use HasFactory;
    protected $table = 'lignecarte';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'idFac',
        'idCarte',
        'point',
        'dateOpera',
        'montantFac',
    ];

    // une ligne est defini pour un unique client
    public function clientcarte(){
        return $this-> belongsTo(ClientCarte::class, 'idCarte', 'matr');
    }

    // une ligne carte est defini pour une seule facture
    public function facture(){
        return $this-> belongsTo(Facture::class, 'idFac', 'idFac');
    }

}
