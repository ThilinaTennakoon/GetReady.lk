<?php

namespace Database\Seeders;


use App\Enums\RoleEnum;
use App\Enums\MainStatusEnum;
use App\Models\UserRolePermission;
use App\Repositories\All\Permissions\PermissionsInterface;
use App\Repositories\All\Roles\RoleInterface;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function __construct(
        protected RoleInterface $roleRepository,
        protected PermissionsInterface $permissionsRepository
    ) {}
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        foreach (RoleEnum::cases() as $role) {
            if (!$this->roleRepository->findByColumn(['name' => $role->name])) {
               $roleId= $this->roleRepository->create([
                    'name' => $role->name,
                    'status' => MainStatusEnum::Active->value
                ]);
            }
            if ($role->name == ucfirst(RoleEnum::SuperAdmin->value)) {
                $permissions = $this->permissionsRepository->all();
                foreach ($permissions as $permission) {
                    UserRolePermission::create([
                        'user_role_id' => $roleId->id,
                        'permission_id' => $permission->id
                    ]);
                }
            }
        }
    }
}
