<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        return inertia('Index/Index');
    }

    public function show($id)
    {
        return inertia('Index/Show', ['id' => $id]);
    }
}
