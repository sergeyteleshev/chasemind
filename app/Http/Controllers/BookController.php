<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

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
        $book = Book::findOrFail($id);
        $filename = "";

        if($type == 'read' && $book)
        {
            $file_path_from_public = $book->linkOnText;
        }
        else if($type == 'listen' && $book)
        {
            $file_path_from_public = $book->linkOnAudio;
        }
        else if($type == 'watch' && $book)
        {
            $file_path_from_public = $book->linkOnVideo;
        }
        else
        {
            if(!$book)
                return response()->json(["error" => "book not found"], 404);
            else if($type)
                return response()->json(["error" => "unknown file type"], 500);
            else
                return response()->json(["error" => "unknown error"], 500);
        }

        for($i = strlen($file_path_from_public) - 1; $i > 0; $i--)
        {
            if($file_path_from_public[$i] == "/")
                break;

            $filename = $file_path_from_public[$i] . $filename;
        }

        return response()->download(public_path($file_path_from_public), $filename, $request->header());
//        return response()->json($filename, 201);
    }
}
