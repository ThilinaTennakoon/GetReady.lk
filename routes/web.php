<?php

use App\Http\Controllers\Admin\CollectionsController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/gallery', [HomeController::class, 'gallery'])->name('gallery');


Route::middleware('auth')->group(function () {

    Route::prefix('admin')->middleware('role:Admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('permission:admin.dashboard');

        Route::prefix('users')->name('users.')->controller(UsersController::class)->group(function () {
            Route::get('/', "index")->name('index')->middleware('permission:users.index');
            Route::get('/create', "create")->name('create')->middleware('permission:users.create');
            Route::post('/', "store")->name('store')->middleware('permission:users.create');
            Route::get('/{id}/edit', "edit")->name('edit')->middleware('permission:users.edit');
            Route::put('/{id}', "update")->name('update')->middleware('permission:users.edit');
            Route::get('/{id}', "show")->name('show')->middleware('permission:users.show');
            Route::delete('/{id}', "destroy")->name('destroy')->middleware('permission:users.delete');
        });

         Route::prefix('collections')->name('collections.')->controller(CollectionsController::class)->group(function () {
            Route::get('/', "index")->name('index')->middleware('permission:collections.index');
            Route::get('/create', "create")->name('create')->middleware('permission:collections.create');
            Route::post('/', "store")->name('store')->middleware('permission:collections.create');
            Route::get('/{id}/edit', "edit")->name('edit')->middleware('permission:collections.edit');
            Route::put('/{id}', "update")->name('update')->middleware('permission:collections.edit');
            Route::get('/{id}', "show")->name('show')->middleware('permission:collections.show');
            Route::delete('/{id}', "destroy")->name('destroy')->middleware('permission:collections.delete');
        });


    });
});

require __DIR__ . '/auth.php';
