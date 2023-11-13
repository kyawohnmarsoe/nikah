<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FindeeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Http\Controllers\UserController;

Route::get('/home', function () {
    return view('home');
});

Route::get('/', function () {
    return Redirect::to('/home');
});

Route::get('/findees/create', [FindeeController::class, 'create'])->name('findees.create');
Route::post('/findees', [FindeeController::class, 'store'])->name('findees.store');
Route::post('/upload-image', [FindeeController::class,'upload'])->name('upload-image');

Route::middleware('auth')->group(function () {
    Route::get('/findees/all', [FindeeController::class, 'index'])->name('findees');
    Route::post('/findees/search', [FindeeController::class, 'search'])->name('findees.search');
});

Route::get('/a', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
   });

require __DIR__.'/auth.php';
