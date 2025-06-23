<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
| Protected API Routes
|--------------------------------------------------------------------------
|
| These routes require authentication via Sanctum tokens.
| Perfect for mobile apps or external API consumers.
|
*/

Route::middleware('auth:sanctum')->group(function () {
    // User profile routes
    Route::get('/profile', function (Request $request) {
        return response()->json([
            'user' => $request->user(),
            'tokens_count' => $request->user()->tokens()->count(),
        ]);
    });
    
    // Example protected route
    Route::get('/dashboard-data', function (Request $request) {
        return response()->json([
            'message' => 'Welcome to your dashboard!',
            'user' => $request->user()->only(['id', 'name', 'email']),
            'timestamp' => now(),
        ]);
    });
});

/*
|--------------------------------------------------------------------------
| Public API Routes
|--------------------------------------------------------------------------
|
| These routes are publicly accessible and don't require authentication.
|
*/

Route::get('/health', function () {
    return response()->json([
        'status' => 'healthy',
        'timestamp' => now(),
        'version' => '1.0.0',
    ]);
});

Route::get('/app-info', function () {
    return response()->json([
        'name' => config('app.name'),
        'version' => '1.0.0',
        'laravel_version' => app()->version(),
        'environment' => app()->environment(),
    ]);
}); 