<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($tipo)
    {
        $users = User::where('tipoUser', $tipo)->get();
        return $users;
    }

    public function getUsers(){
        $users = User::all();
        return $users;
    }
    public function getUser($id){
        $ident = (int)$id;
        $users = User::where('id', $ident)->get();
        return $users;
    }

    public function checkemail($email)
    {
        $users = User::where('email', $email)->get();
        return $users;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->tipoUser = $request->tipoUser;

        $user->save();
        return response()->json([
            'message' => '¡guardado exitoso!',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->get();
        $pass = User::where('password', $request->password)->get();
        $valor = ($user[0] == $pass[0]);
       if(count($user) == 0){
        return response()->json(['message' => 'error, no existe']);
       }
       else{
           if($valor){
            return response()->json([
                'message' => '¡accedio correctamente!',
                'user' => $user
            ], 201);
           }
           else{
            return response()->json([
                'message' => 'error22']);
           }
       }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->tipoUser = $request->tipoUser;

        $user->save();

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = User::destroy($request->id);
        return $user;
    }
}
