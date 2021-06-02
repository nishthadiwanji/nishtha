<?php

namespace App\Http\Requests\Role;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
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
                'name' => 'required|max:50|unique:roles,name'
            ];
        } else {
            return [
                'name' => 'required|max:50|unique:roles,name,'.decrypt_id_info($this->id)
            ];
        }
    }
}
