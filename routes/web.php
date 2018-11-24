<?php

Use App\User;

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

//todo отдаёт json. запросы на API server. вьюхи не надо рендерить.
//todo поставить вебпак


Route::view('/{path?}', 'welcome')
    ->where('path', '.*')
    ->name('react');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
