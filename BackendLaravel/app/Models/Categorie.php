<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;

class Categorie extends Model
{
    use HasFactory;
    protected $table = 'categorie';
    protected $primaryKey = 'idCat';
    public $timestamps=false;
    protected $fillable=[
        'idCat',
        'nomCat',
        'imageUrl'
    ];

    /*public function getCategoryIconAttribute()
    {
        if($this->image){
            return $this->image;
        }else{
            return "storage/category_icons/empty2.png";
        }

    }*/

    public function produit()
    {
        return $this->hasMany(Produit::class, 'idCategorie', 'idCat');
    }
}
