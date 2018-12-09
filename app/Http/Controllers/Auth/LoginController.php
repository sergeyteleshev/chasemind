<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
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
            {
                $response['remember_token'] = Auth::user()->getRememberToken();
            }
        }
        else
        {
            $response['error'] = 'invalid data';
        }

        $_COOKIE['api_token'] = $response['api_token'];
        $_COOKIE['remember_token'] = $response['remember_token'];

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

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function checkUserAuth(Request $request)
    {
        $api_token = $request->cookie('api_token');

        if (!$api_token)
            response()->json(['error' => 'pass the api token'], 404);

        $api_user = User::where('api_token', $api_token)->first();

        if($api_user)
        {
            return $api_user;
        }
        else
        {
            return response()->json(['error' => 'user not found'], 404);
        }
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

    public function loginViaApiToken(Request $request)
    {
        $response = User::where('api_token', $request->input('api_token'))->first();

        if($response)
        {
            $response['status'] = "ok";
            $response['api_token'] = $request->input('api_token');
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
