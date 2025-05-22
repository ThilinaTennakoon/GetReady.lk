<?php

namespace App\Repositories\Base;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface EloquentRepositoryInterface
{
    /**
     * Get all models.
     *
     * @param  array  $columns
     * @param  array  $relations
     * @return Collection
     */
    public function all(array $columns = ['*'], array $relations = []): Collection;

    /**
     * Get all trashed models.
     *
     * @return Collection
     */
    public function allTrashed(): Collection;

    /**
     * Find model by id.
     *
     * @param  int  $modelId
     * @param  array  $columns
     * @param  array  $relations
     * @param  array  $appends
     * @return Model
     */
    public function findById(
        int $modelId,
        array $columns = ['*'],
        array $relations = [],
        array $appends = []
    ): ?Model;
  /**
   * findByColumn
   *
   * @return Model
   */
 public function findByColumn(
        array $paramsAnddData,
        array $columns = ['*'],
        array $relations = []
    ): ?Model;
    /**
     * Find trashed model by id.
     *
     * @param  int  $modelId
     * @return Model
     */
    public function findTrashedById(int $modelId): ?Model;

    /**
     * Find only trashed model by id.
     *
     * @param  int  $modelId
     * @return Model
     */
    public function findOnlyTrashedById(int $modelId): ?Model;


      /**
     * Create a model.
     *
     * @param  array  $payload
     * @return Model
     */
    public function firstOrCreate(array $payload,$relations=[]): ?Model;
     /**
     * Find model by columns.
     *
     * @param  array  $modelId
     * @param  array  $columns
     * @param  array  $relations
     * @param  array  $appends
     * @return Collection
     */
    public function getByColumn(
        array $paramsAnddData,
        array $columns = ['*'],
        array $relations = [],
        string $orderBY = 'id',
        string $orderMethod = 'asc',
    ): ?Collection;
   /**
     * paginate
     *
     * @param  mixed $number
     * @param  mixed $columns
     * @param  mixed $relations
     * @return LengthAwarePaginator
     */
    public function paginate(
        int $number,
        array $columns = ['*'],
        array $relations = [],
        string $orderBY = 'id',
        string $orderMethod = 'asc',): LengthAwarePaginator;
   /**
     * createWithMeta
     *
     * @param  mixed $payload
     * @return Model
     */
    public function createWithMeta(array $payload): ?Model;
    /**
     * Create a model.
     *
     * @param  array  $payload
     * @return Model
     */
    public function create(array $payload): ?Model;
    /**
     * updateOrCreate
     *
     * @param  mixed $search
     * @param  mixed $payload
     * @return Model
     */
    public function updateOrCreate(array $search,array $payload): ?Model;
   /**
     * Make a model.
     *
     * @param  array  $payload
     * @return Model
     */
    public function make(array $payload): ?Model;
    /**
     * Update existing model.
     *
     * @param  int  $modelId
     * @param  array  $payload
     * @return bool
     */
    public function update(int $modelId, array $payload): bool;
     /**
     * Method updateWithMeta
     *
     * @param int $modelId [explicite description]
     * @param array $payload [explicite description]
     *
     * @return bool
     */
    public function updateWithMeta(int $modelId, array $payload): bool;
    /**
     * @param int $modelId
     * @param array $payload
     *
     * @return bool
     */
    public function updateWithTrashed(int $modelId, array $payload): bool;
    /**
     * Delete model by id.
     *
     * @param  int  $modelId
     * @return bool
     */
    public function deleteById(int $modelId): bool;
    /**
     * Method deleteByColumn
     *
     * @param array $params [explicite description]
     *
     * @return bool
     */
    public function deleteByColumn(array $params): bool;
    /**
     * Restore model by id.
     *
     * @param  int  $modelId
     * @return bool
     */
    public function restoreById(int $modelId): bool;

    /**
     * Permanently delete model by id.
     *
     * @param  int  $modelId
     * @return bool
     */
    public function permanentlyDeleteById(int $modelId): bool;

    /**
     * Method filter
     *
     * @param array $request [Http Request]
     * @param array $with [Relations]
     *
     * @return LengthAwarePaginator
     */
    public function filter($filters, $with = []): LengthAwarePaginator;
}
