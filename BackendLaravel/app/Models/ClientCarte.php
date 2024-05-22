<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientCarte extends Model
{
    use HasFactory;
    protected $table = 'clientcarte';
    protected $primaryKey = 'matr';
    //public $timestamps = false;
    protected $fillable = [
        'matr',
        'nom',
        'sexe',
        'dateNaiss',
        'idVille',
        'mobile',
        'whatsapp',
        'creation',
        'point',
        'montantTontine'
    ];

    protected $hidden = [
        'pwd',
    ];


}
