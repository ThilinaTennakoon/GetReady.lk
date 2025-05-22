<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Home\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::middleware('auth')->group(function () {

    Route::prefix('admin')->middleware('role:Admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('permission:admin.dashboard');
    });

});

require __DIR__ . '/auth.php';
