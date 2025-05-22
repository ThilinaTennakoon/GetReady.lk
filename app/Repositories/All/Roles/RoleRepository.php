<?php

namespace App\Repositories\All\Roles;

use App\Models\UserRole;
use App\Repositories\Base\BaseRepository;

class RoleRepository extends BaseRepository implements RoleInterface
{
    /**
     * @var UserRole
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  UserRole  $model
     */
    public function __construct(UserRole $model)
    {
        $this->model = $model;
    }


}
