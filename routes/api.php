<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('books', 'BookController@index');
Route::get('book/{book}', 'BookController@show');
Route::post('books', 'BookController@store');
Route::put('books/{book}', 'BookController@update');
Route::delete('books/{book}', 'BookController@delete');

Route::post('register', 'Auth\RegisterController@create');
//Route::get('register', 'Auth\RegisterController@create');

