<?php

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('books', 'BookController@index');
Route::get('book/{book}', 'BookController@show');
Route::post('books', 'BookController@store');
Route::put('books/{book}', 'BookController@update');
Route::delete('books/{book}', 'BookController@delete');
Route::post('getBook', 'BookController@getBookMaterial');
Route::post('getFileName', 'BookController@getFileName');
Route::post('getAudio', 'BookController@getAudio');
Route::post('uploadPdf', 'BookController@uploadPdf');
Route::post('getAudioYandex', 'BookController@getAudioYandex');
Route::post('addBook', 'BookController@addBook');
Route::get('getMindMapData/{book}', 'BookController@getMindMapData');

Route::post('register', 'Auth\RegisterController@create');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');
Route::post('checkEmail', 'Auth\LoginController@checkEmail');
Route::post('checkLogin', 'Auth\LoginController@checkLogin');
Route::post('rememberLogin', 'Auth\LoginController@loginViaRememberToken');
Route::post('apiTokenLogin', 'Auth\LoginController@loginViaApiToken');

Route::get('subjects', 'SubjectController@index');

Route::get('emails', 'CallsController@index');
Route::put('emails', 'CallsController@create');

Route::post('payForSub', 'UserController@payForSub');
Route::post('payForSubSuccess', 'UserController@payForSubSuccess');
Route::post('sub/fail',  'UserController@payForSubFail');


Route::post('checkUserAuth', 'Auth\LoginController@checkUserAuth');

