<?php

namespace App\Repositories\All\PermissionCategories;

use App\Models\PermissionCategory;
use App\Repositories\Base\BaseRepository;

class PermissionCategoriesRepository extends BaseRepository implements PermissionCategoriesInterface
{
    /**
     * @var PermissionCategory
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  PermissionCategory  $model
     */
    public function __construct(PermissionCategory $model)
    {
        $this->model = $model;
    }


}
