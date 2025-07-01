<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::post('register',[UserController::class,'register']);

Route::post('login',[UserController::class,'login']);

Route::post('logout',[UserController::class,'logout'])->midellware('auth:sanctum');

Route::get('/user',[UserController::class,'me'])->midellware('auth:sanctum');

Route::get('/anectodes',[AnectodeController::class,'index']);

Route::post('/anectodes',[AnectodeController::class,'store'])->midellware('auth:sanctum');

Route::post('/anectodes/{id}/vote',[AnectodeController::class,'store']);

Route::get('/user',[UserController::class,'index']);

Route::delete('/anectodes/{id}',[UserController::class,'destroy']);