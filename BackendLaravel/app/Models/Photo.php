<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;

class Photo extends Model
{
    use HasFactory;
    protected $table = 'photo';
    protected $primaryKey = 'idPhoto';
    protected $fillable=[
        'idPhoto',
        'lienPhoto',
        'codePro'
    ];

    public function produit()
    {
        return $this->belongsTo(Produit::class, 'codePro', 'codePro');
    }
}
