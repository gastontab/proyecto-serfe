<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use Illuminate\Http\Request;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $evaluation = new Evaluation();
        $evaluation->emailTeacher = $request->emailTeacher;
        $evaluation->emailStudent = $request->emailStudent;
        $evaluation->score = (float)$request->score;
        $evaluation->save();
        return response()->json([
            'message' => '¡guardado exitoso!',
            'user' => $evaluation
        ], 201);
    }

    public function getScore($email){
        $evaluation = Evaluation::where('emailStudent', $email)->get();
        return $evaluation;
    }



}
