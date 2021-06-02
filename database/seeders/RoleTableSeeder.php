<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_collection = collect([
			"admin"=>"Admin",
            "user"=>"User"
		]);
        
        $role_collection->each(function ($value,$key){
            $role = Sentinel::getRoleRepository()->createModel()->create([
                'name' => $value,
                'slug' => $key,
            ]);
        });
    }
}
