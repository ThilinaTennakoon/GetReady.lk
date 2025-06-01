<?php

namespace App\Repositories\All\Collection;

use App\Models\Collection;
use App\Repositories\Base\BaseRepository;

class CollectionRepository extends BaseRepository implements CollectionInterface
{
    /**
     * @var Collection
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Collection  $model
     */
    public function __construct(Collection $model)
    {
        $this->model = $model;
    }


}
