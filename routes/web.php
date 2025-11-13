<?php

use App\Http\Controllers\ListingController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn() => redirect()->route('listing.index'));

Route::resource('listing', ListingController::class);
