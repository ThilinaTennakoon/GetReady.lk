<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Enums\UserTypeEnum;
use App\Repositories\All\Users\UserRepositoryInterface;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
       public function __construct(
        protected UserRepositoryInterface $userRepository
        ) {}
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


        $array = [
            [
                'email' => config('app.admin_email'),
                'first_name' => config('app.admin_first_name'),
                'last_name' => config('app.admin_last_name'),
                'type' => UserTypeEnum::Admin->value,
                'role_id' => "1",
                'password' => Hash::make(config('app.admin_password')),
            ]
        ];
        foreach ($array as $item) {
            if (!$this->userRepository->findByColumn(['email' => $item['email']])) {
                $this->userRepository->create($item);
            }
        }
    }
}
