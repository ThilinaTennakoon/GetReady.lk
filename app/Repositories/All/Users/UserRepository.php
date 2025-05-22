<?php

namespace App\Repositories\All\Users;

use App\Models\User;
use App\Repositories\Base\BaseRepository;
use Carbon\Carbon;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Model  $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }



}
