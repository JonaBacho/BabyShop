<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

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
}
