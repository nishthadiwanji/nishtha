<?php
namespace App\Repositories\Product;

use App\Repositories\EloquentDBRepository;
use App\Models\Product\Product;
use Sentinel;
use DB;

class ProductRepository extends EloquentDBRepository {
    public function __construct(Product $product){
        $this->model = $product;
    }
    public function createProduct($attributes){
        return $this->model->create([
            'product_name' => $attributes['product_name'],
            'description' => $attributes['description']
        ]);
    }
    public function listAllProduct() {
        return $this -> model->orderBy('product_name','ASC');
    }
    public function updateProduct(Product $product, $attributes){
        return $product->update([
            'product_name' => $attributes['product_name'],
            'description' => $attributes['description']
        ]);
    }
}
