<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\Encrypted;

class Product extends Model
{
    use Encrypted, SoftDeletes;
    
    protected $fillable = [
        'product_name',
        'description'
    ];
}
