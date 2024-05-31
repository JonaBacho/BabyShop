<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expedition extends Model
{
    use HasFactory;
    protected $table = 'expedition';
    protected $primaryKey = 'idExp';
    public $timestamps = false;
    protected $fillable = [
        'idExp',
        'idVille',
        'transporteur',
        'prix',
        'mobile1',
        'mobile2',
    ];
}
