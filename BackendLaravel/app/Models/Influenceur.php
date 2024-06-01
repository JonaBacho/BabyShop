<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use App\Models\PaieInfluenceur;

class Influenceur extends Model
{
    use HasFactory, HasApiTokens;
    protected $table = 'influenceur';
    protected $primaryKey = 'idInf';
    public $timestamps = false;
    protected $fillable = [
        'idInf',
        'nom',
        'mobile',
        'codePromo',
        'actif',
        'montant',
        'pwd',
    ];

    protected $hidden = [
        'pwd',
    ];

    // a un influenceur correspond plusieurs paieinfluenceur
    public function paieinfluenceur()
    {
        return $this->hasMany(PaieInfluenceur::class, 'idInf', 'idInf');
    }
}
