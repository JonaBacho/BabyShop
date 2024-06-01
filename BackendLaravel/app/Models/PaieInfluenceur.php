<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Influenceur;


class PaieInfluenceur extends Model
{
    use HasFactory;
    protected $table = 'paieinfluenceur';
    protected $primaryKey = 'idPaiement';
    public $timestamps = false;
    protected $fillable = [
        'idPaiement',
        'datePaie',
        'montant',
        'idInf',
        'validite',
        'commentaire',
    ];

    // un paieinfluenceur correspond à un influenceur
    public function influenceur()
    {
        return $this-> belongsTo(Influenceur::class, 'idInf', 'idInf');
    }
}
