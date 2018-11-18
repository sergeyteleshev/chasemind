<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('welcome');
});

Route::get('/sub', function () {
    return view('welcome');
});

Route::get('/lib', function () {
    return view('welcome');
});

Route::get('/reg', function () {
    return view('welcome');
});

Route::get('/books', function () {
    return view('welcome');
});

Route::get('/dontwork', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('welcome');
});


