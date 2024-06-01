<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Tontine;
use App\Models\GestionStock;
use App\Models\Facture;

class Gestionnaire extends Model
{
    use HasApiTokens, HasFactory;
    protected $table = 'gestionnaire';
    protected $primaryKey = 'idGest';
    public $timestamps = false;

    protected $fillable = [
        'idGest', 'nomGest', 'typeGest', 'login', 'pwd', 'mobile', 'actif'
    ];

    protected $hidden = [
        'pwd',
    ];

    // un gestionnaire est dans plusieurs tontines
    public function tontine(){
        return $this-> hasMany(Tontine::class, 'idGest', 'idGest');
    }

    // un gestionnaire effectue plusieurs actions sur les stocks
    public function gestionstock(){
        return $this-> hasMany(GestionStock::class, 'idGest', 'idGest');
    }

    // un gestionnaire s'occupe de plusieurs facture
    public function facture(){
        return $this-> hasMany(Facture::class, 'idCaissiere', 'idGest');
    }
}
