<?php
namespace App\Repositories;

use App\Repositories\EloquentDBRepository;
use Sentinel;
use DB;

class RoleRepository {
    
    public function getRole() {
        return DB::table('roles')->where('slug','<>','admin')->pluck('name','slug');
    }

    public function listAllRole() {
        return Sentinel::getRoleRepository()->createModel()
                ->where('slug','<>','admin')
                ->latest();
    }
    
    public function addRole($attributes) {
        return Sentinel::getRoleRepository()->createModel()->create([
            'name' => $attributes['name'],
            'slug' => str_replace(' ','_',strtolower($attributes['name'])),
        ]);
    }
    
    public function updateRole($role, $role_name) {
        $role->name = $role_name;
        return $role->save();
    }
    
    public function removeRole($role) {
        DB::table('role_users')->where('role_id',$role->id)->delete();
        return $role->delete();
    }  
}
