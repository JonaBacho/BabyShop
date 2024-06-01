<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messagerie extends Model
{
    use HasFactory;
    protected $table = 'messagerie';
    protected $primaryKey = 'idmsg';
    public $timestamps = false;
    protected $fillable = [
        'idmsg',
        'mobile',
        'wsms',
        'dateEnvoie',
        'type',
        'service',
    ];
}
