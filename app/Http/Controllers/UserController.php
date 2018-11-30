<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\Http\Controllers\Auth\RegisterController;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = User::create($request->all())));

        $this->guard()->login($user);

        return $this->registered($request, $user) ? response()->json($user, 200) : response()->json(null, 404);
    }

    public function test(Request $request)
    {
//        return response()->json($request->all(), 201);
    }
}
