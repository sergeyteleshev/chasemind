<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class DownloadController extends Controller
{
    public function getFile($file_path_from_public, $filename)
    {
        $file = public_path().$file_path_from_public;

        $headers = array(
            'Content-Type: application/pdf',
        );

        return Response::download($file, $filename, $headers);
    }
}
