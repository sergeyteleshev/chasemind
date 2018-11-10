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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/main', function () {
    return view('main');
});

Route::get('/books', function () {
    return view('books');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/dontwork', function () {
    return view('dontwork');
});

Route::get('/lib', function () {
    return view('lib');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/registration', function () {
    return view('registration');
});

Route::get('/sub', function () {
    return view('sub');
});
