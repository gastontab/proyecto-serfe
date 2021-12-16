<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EvaluationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//rutas para model user
Route::get('/user/{id}', [UserController::class,'getUser']); //muestra el usuario segun id
Route::get('/users', [UserController::class,'getUsers']); //muestra todos los registros
Route::get('/users/{tipo}', [UserController::class,'index']); //muestra todos los registros segun tipo usuario
Route::get('/checkemail/{mail}', [UserController::class,'checkemail']); //checkea si el mail a registrar ya existe en la BD
Route::post('/users', [UserController::class,'store']); // crea un registro
Route::post('/login', [UserController::class,'login']); //loguea un usuario
Route::put('/users/{id}', [UserController::class,'update']); // actualiza un registro
Route::delete('/users/{id}', [UserController::class,'destroy']); //elimina un registro

//rutas para model evaluation
Route::post('/evaluation', [EvaluationController::class,'store']); //crea un registro
Route::get('/evaluation/{email}', [EvaluationController::class,'getScore']); //obtiene todas las notas de un usuario

/*Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('register', [AuthController::class, 'register']);
});*/