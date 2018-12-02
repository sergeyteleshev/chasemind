<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return Book::all();
    }

    public function show(Book $book)
    {
        return $book;
    }

    public function store(Request $request)
    {
        $book = Book::create($request->all());

        return response()->json($book, 201);
    }

    public function update(Request $request, Book $book)
    {
        $book->update($request->all());

        return response()->json($book, 200);
    }

    public function delete(Book $book)
    {
        $response = $book->delete();

        return response()->json($response, 204);
    }

    public function getBookMaterial(Request $request)
    {
        //todo чёто не робит
        $id = $request->input('id');
        $type = $request->input('type');
        $book = Book::find($id);

        if($type == 'read')
        {
            $file_path_from_public = $book['linkOnText'];
        }
        else if($type == 'listen')
        {
            $file_path_from_public = $book['linkOnAudio'];
        }
        else if($type == 'watch')
        {
            $file_path_from_public = $book['linkOnVideo'];
        }
        else
        {
            return response()->json(["error" => "not found"], 404);
        }

        return response()->download($file_path_from_public, 201);
    }
}
