<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    use RegistersUsers, RedirectsUsers;

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255|',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);
    }

    protected function guard()
    {
        return Auth::guard();
    }

    public function register(Request $request)
    {
//        $user = User::create($request->all());

//        return response()->json($user, 201);

        return true;

//        $this->validator($request->all())->validate();
//
//        event(new Registered($user = User::create($request->all())));
//
//        $this->guard()->login($user);
//
//        return $this->registered($request, $user) ? response()->json($user, 200) : response()->json(null, 404);
    }
}
