<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        //$credentials = $request->only('email', 'password');
        //$credentials = $request->only('email', 'password');
        //$token = JWTAuth::attempt([$credentials]);
        $token = JWTAuth::attempt(['email' => 'gtaborda1@yahoo.com', 'password' => '$2y$10$7i3eftq7gwOFtNhJRn5MDO1ZEwsSwu9zjkKVfLbpcFWq.cQorBNsW']);

        if (! $token) {
            return response()->json(['error' => 'Unauthorized', "token" => $token], 401);
        }

        return $this->respondWithToken($token);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => 60 * 60
        ]);
    }

    /*public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string',
            'tipoUser' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create(array_merge(
            $validator->validate(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => '¡Usuario registrado exitosamente!',
            'user' => $user
        ], 201);
    }*/
    public function register(Request $request)
    {
        //$user = new User(request()->all());
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        //$user->password = bcrypt($user->password);
        $user->password = $user->password;
        $user->tipoUser = $request->tipoUser;
        $user->save();
        return response()->json([
            'message' => '¡Usuario registrado exitosamente!',
            'user' => $user
        ], 201);
    }
}
