<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Force HTTPS in production or when FORCE_HTTPS is set
        if ($this->app->environment('production') || config('app.force_https')) {
            URL::forceScheme('https');
        }

        // Set asset URL for proper HTTPS asset generation
        if (config('app.asset_url')) {
            URL::forceRootUrl(config('app.asset_url'));
        }
    }
}
