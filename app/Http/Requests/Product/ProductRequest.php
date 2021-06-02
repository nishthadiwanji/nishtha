<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->method() == 'POST' && !isset($this->id)) {
            return [
                'product_name' => 'required|max:191|unique:products,product_name',
                'description' => 'required'
            ];
        } else {
            return [
                'product_name' => 'required|max:191|unique:products,product_name,'.decrypt_id_info($this->id),
                'description' => 'required'
            ];
        }
    }
}
