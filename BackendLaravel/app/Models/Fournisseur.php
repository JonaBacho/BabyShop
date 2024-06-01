<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\AchatFournisseur;

class Fournisseur extends Model
{
    use HasFactory;
    protected $table = 'fournisseur';
    protected $primaryKey = 'idFour';
    public $timestamps = false;
    protected $fillable = [
        'idFour',
        'nom',
        'adresse',
        'ville',
        'pays',
        'mobile1',
        'mobile2',
        'dateCreation',
        'type',
    ];

    // un fournisseur a plusieurs achats fournisseur
    public function achatfournisseur()
    {
        return $this->hasMany(AchatFournisseur::class, 'idFour', 'idFour');
    }
}
