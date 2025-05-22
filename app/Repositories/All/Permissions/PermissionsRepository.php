<?php

namespace App\Repositories\All\Permissions;

use App\Models\LeaveType;
use App\Models\Permission;
use App\Repositories\Base\BaseRepository;

class PermissionsRepository extends BaseRepository implements PermissionsInterface
{
    /**
     * @var Permission
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Permission  $model
     */
    public function __construct(Permission $model)
    {
        $this->model = $model;
    }


}
