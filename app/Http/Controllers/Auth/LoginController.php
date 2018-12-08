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
            $response['api_token'] = Auth::user()->api_token;
            if ($remember)
                $response['remember_token'] = Auth::user()->getRememberToken();
        }
        else
        {
            $response['error'] = 'invalid data';
        }

        return $response;
    }

    public function checkEmail(Request $request)
    {
        $userCount = User::where('email', $request->input('email'))->count();
        $response = null;
        $status_number = 500;

        if($userCount === 0)
        {
            $response['status'] = "ok";
            $status_number = 201;
        }
        else
        {
            $response['error'] = 'this email belong to other user';
            $status_number = 500;
        }

        return response()->json($response, $status_number);
    }

    public function checkLogin(Request $request)
    {
        $userCount = User::where('name', $request->input('name'))->count();
        $response = [];

        if($userCount === 0)
        {
            $response['status'] = "ok";
            $status_number = 201;
        }
        else
        {
            $response['error'] = 'this login belong to other user';
            $status_number = 500;
        }

        return response()->json($response, $status_number);
    }

    public function testUserAuth(Request $request)
    {
        return response()->json($this->checkUserAuth($request->input('token')));
    }

    public function checkUserAuth($token)
    {
        if(!$token)
            return false;

        $api_user = User::where('api_token', $token)->first();
        $remember_user = User::where('remember_token', $token)->first();

        if($api_user || $remember_user)
            return true;

        return false;
    }

    public function loginViaRememberToken(Request $request)
    {
        $response = User::where('remember_token', $request->input('remember_token'))->first();

        if($response)
        {
            $response['status'] = "ok";
            $response['remember_token'] = $request->input('remember_token');
        }
        else
        {
            $response['error'] = 'invalid data';
        }

        return $response;
    }

    public function logout(Request $request)
    {
        return $updateResponse = User::where('api_token', $request->input('api_token'))->update([
            'api_token' => str_random(60),
            'remember_token' => null,
        ]);
    }
}
