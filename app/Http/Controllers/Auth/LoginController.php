<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('name', 'password');
        $remember = $request->input('remember');
        $response = [];

        if (Auth::attempt($credentials, $remember)) {
            $response = Auth::user();
            $response['status'] = "ok";

            if($remember)
                $response['rem_token'] = Auth::user()->getRememberToken();
        }
        else
        {
            $response['error'] = 'invalid data';
        }

        return $response;
    }

    public function loginViaRememberToken(Request $request)
    {
        $response = User::where('remember_token', $request->input('remember_token'))->first();
        if($response)
        {
            $response['status'] = "ok";
            $response['rem_token'] = $request->input('remember_token');
        }
        else
        {
            $response['error'] = 'invalid data';
        }

        return $response;
    }

    public function logout(Request $request)
    {
        if(Auth::check())
        {
            Auth::logout();
            return ["response" => "user is logged out"];
        }

        return ["response" => "user is NOT logged out"];
    }
}
