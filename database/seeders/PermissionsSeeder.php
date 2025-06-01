<?php

namespace Database\Seeders;

use App\Repositories\All\PermissionCategories\PermissionCategoriesInterface;
use App\Repositories\All\Permissions\PermissionsInterface;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
     public function __construct(
        protected PermissionsInterface $permissionsRepo,
        protected PermissionCategoriesInterface $permissionCategoriesRepo
        ) {}
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = [
            ['name' => 'Dashboard','slug' => 'admin.dashboard','permission_category' => 'Dashboard'],

            // Users
            ['name' => 'All Users', 'slug' => 'users.index', 'permission_category' => 'Users'],
            // ['name' => 'User Create', 'slug' => 'users.create', 'permission_category' => 'Users'],
            // ['name' => 'User Edit', 'slug' => 'users.edit', 'permission_category' => 'Users'],
            // ['name' => 'User Show', 'slug' => 'users.show', 'permission_category' => 'Users'],
            // ['name' => 'User Delete', 'slug' => 'users.delete', 'permission_category' => 'Users'],

            // Roles
            // ['name' => 'All Roles', 'slug' => 'roles.index', 'permission_category' => 'Roles'],
            // ['name' => 'Role Create', 'slug' => 'roles.create', 'permission_category' => 'Roles'],
            // ['name' => 'Role Edit', 'slug' => 'roles.edit', 'permission_category' => 'Roles'],
            // ['name' => 'Role Delete', 'slug' => 'roles.delete', 'permission_category' => 'Roles'],

        ];
        foreach ($array as $item) {
            $category = $this->permissionCategoriesRepo->findByColumn(['name' => $item['permission_category']]);
            if(!$category){
                 $category = $this->permissionCategoriesRepo->create(['name' => $item['permission_category']]);
            }
            unset($item['permission_category']);
            $item['permission_category_id'] = $category->id;
            if ($repo=$this->permissionsRepo->findByColumn(['slug' => $item['slug']])) {
                $this->permissionsRepo->update($repo->id, ['name' => $item['name']]);
            }else{
                $this->permissionsRepo->create($item);
            }
        }
    }

}
