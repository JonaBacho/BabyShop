<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tontine extends Model
{
    use HasFactory;
    protected $table = 'tontine';
    protected $primaryKey = 'idTontine';
    public $timestamps = false;
    protected $fillable = [
        'idTontine',
        'dateCotisation',
        'montant',
        'idGest',
        'validite',
        'idCarte',
        'action',
    ];

    // une tontine est defini pour un seul client 
    public function clientcarte(){
        return $this-> belongsTo(ClientCarte::class, 'idCarte', 'matr');
    }

    // une tontine est defini pour un seul gestionnaire
    public function gestionnaire(){
        return $this-> belongsTo(Gestionnaire::class, 'idGest', 'idGest');
    }
}
