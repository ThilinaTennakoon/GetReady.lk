<?php

namespace App\Providers;

use App\Repositories\All\Collection\CollectionInterface;
use App\Repositories\All\Collection\CollectionRepository;
use App\Repositories\All\PermissionCategories\PermissionCategoriesInterface;
use App\Repositories\All\PermissionCategories\PermissionCategoriesRepository;
use App\Repositories\All\Permissions\PermissionsInterface;
use App\Repositories\All\Permissions\PermissionsRepository;
use App\Repositories\All\Roles\RoleInterface;
use App\Repositories\All\Roles\RoleRepository;
use App\Repositories\All\Users\UserRepository;
use App\Repositories\All\Users\UserRepositoryInterface;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(RoleInterface::class, RoleRepository::class);
        $this->app->bind(PermissionsInterface::class, PermissionsRepository::class);
        $this->app->bind(PermissionCategoriesInterface::class, PermissionCategoriesRepository::class);
        $this->app->bind(CollectionInterface::class, CollectionRepository::class);

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
