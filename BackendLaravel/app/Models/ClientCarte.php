<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class ClientCarte extends Model
{
    use HasApiTokens, HasFactory;
    protected $table = 'clientcarte';
    protected $primaryKey = 'matr';
    public $timestamps = false;
    protected $fillable = [
        'matr',
        'nom',
        'pwd',
        'sexe',
        'dateNaiss',
        'idVille',
        'mobile',
        'whatsapp',
        'creation',
        'point',
        'montantTontine',
        'user',
        'typeChat',
        'chatID',
    ];

    protected $hidden = [
        'pwd',
    ];

    // un client possede plusieurs ligne carte
    public function lignecarte()
    {
        return $this->hasMany(LigneCarte::class, 'id', 'idCarte');
    }

    //un client a plusieurs tontine
    public function tontine()
    {
        return $this->hasMany(Tontine::class, 'idTontine', 'idCarte');
    }

    // un client appartient à une seule ville
    public function ville()
    {
        return $this-> belongsTo(Ville::class, 'idVille', 'idVille');
    }

}
