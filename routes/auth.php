<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ApiAuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
|
| Here is where you can register authentication routes for your application.
| These routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group.
|
*/

// Web Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('login', [AuthController::class, 'login']);
    
    Route::get('register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('register', [AuthController::class, 'register']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('user', [AuthController::class, 'user'])->name('user');
});

// CSRF endpoint for frontend
Route::get('sanctum/csrf-cookie', [AuthController::class, 'csrf'])->name('sanctum.csrf');

/*
|--------------------------------------------------------------------------
| API Authentication Routes
|--------------------------------------------------------------------------
|
| These routes are for API authentication using Sanctum tokens.
| They are typically used by mobile apps or external API consumers.
|
*/

Route::prefix('api/auth')->group(function () {
    Route::post('login', [ApiAuthController::class, 'login']);
    Route::post('register', [ApiAuthController::class, 'register']);
    
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', [ApiAuthController::class, 'logout']);
        Route::post('logout-all', [ApiAuthController::class, 'logoutAll']);
        Route::get('me', [ApiAuthController::class, 'me']);
        Route::get('tokens', [ApiAuthController::class, 'tokens']);
        Route::delete('tokens/{tokenId}', [ApiAuthController::class, 'revokeToken']);
    });
});
