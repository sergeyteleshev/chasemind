<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

use Google\Cloud\TextToSpeech\V1\AudioConfig;
use Google\Cloud\TextToSpeech\V1\AudioEncoding;
use Google\Cloud\TextToSpeech\V1\SsmlVoiceGender;
use Google\Cloud\TextToSpeech\V1\SynthesisInput;
use Google\Cloud\TextToSpeech\V1\TextToSpeechClient;
use Google\Cloud\TextToSpeech\V1\VoiceSelectionParams;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    const YANDEX_KEY = "57443385-b5ae-4d9a-9be6-98fc921e18e9";
    const TEXT_TO_SPEECH_MAX_LENGTH = 5000;

    public function index()
    {
        return Book::all();
    }

    public function uploadPdf(Request $request)
    {
        $pdf = $request->file('pdf');

        if($pdf)
        {
            $filepath = Storage::disk('local')->putFile('public/read', $pdf);
            $parser = new \Smalot\PdfParser\Parser();
            $pdf = $parser->parseFile($pdf);
            $text = $pdf->getText();

            return response()->json([
                "status" => "ok",
                "text" => $text,
                "filename" => basename($filepath, '.pdf'),
            ], 201);
        }

        return response()->json(["error" => "pdf not found"], 404);
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
        $id = $request->input('id');
        $type = $request->input('type');
        $book = Book::findOrFail($id);
        $filename = ""; //тут не убирать. оно и так работает
        $file_path_from_public = 'files/';

        if($type == 'read' && $book)
        {
            $file_path_from_public .= $book->linkOnText;
        }
        else if($type == 'listen' && $book)
        {
            $file_path_from_public += $book->linkOnAudio;
        }
        else if($type == 'watch' && $book)
        {
            $file_path_from_public .= $book->linkOnVideo;
        }
        else if($type == 'readDemo' && $book)
        {
            $file_path_from_public .= $book->linkOnDemoText;
        }
        else if($type == 'listenDemo' && $book)
        {
            $file_path_from_public .= $book->linkOnDemoAudio;
        }
        else if($type == 'watchDemo' && $book)
        {
            $file_path_from_public .= $book->linkOnDemoVideo;
        }
        else
        {
            if(!$book)
                return response()->json(["error" => "book not found"], 404);
            else if(!$type)
                return response()->json(["error" => "unknown file type"], 500);
            else
                return response()->json(["error" => "unknown error"], 500);
        }

        if(is_string($file_path_from_public))
            return response()->download(public_path($file_path_from_public), $filename, $request->header());
        else
            return response()->json(["error" => "file not found"], 404);
    }

    public function getFileName(Request $request)
    {
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
        else if($type == 'readDemo' && $book)
        {
            $file_path_from_public = $book->linkOnDemoText;
        }
        else if($type == 'listenDemo' && $book)
        {
            $file_path_from_public = $book->linkOnDemoAudio;
        }
        else if($type == 'watchDemo' && $book)
        {
            $file_path_from_public = $book->linkOnDemoVideo;
        }
        else
        {
            if(!$book)
                return response()->json(["error" => "book not found"], 404);
            else if(!$type)
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

        return response()->json($filename, 201);
    }

    private function translit($s) {
        $s = (string) $s; // преобразуем в строковое значение
        $s = strip_tags($s); // убираем HTML-теги
        $s = str_replace(array("\n", "\r"), " ", $s); // убираем перевод каретки
        $s = preg_replace("/\s+/", ' ', $s); // удаляем повторяющие пробелы
        $s = trim($s); // убираем пробелы в начале и конце строки
        $s = function_exists('mb_strtolower') ? mb_strtolower($s) : strtolower($s); // переводим строку в нижний регистр (иногда надо задать локаль)
        $s = strtr($s, array('а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d','е'=>'e','ё'=>'e','ж'=>'j','з'=>'z','и'=>'i','й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t','у'=>'u','ф'=>'f','х'=>'h','ц'=>'c','ч'=>'ch','ш'=>'sh','щ'=>'shch','ы'=>'y','э'=>'e','ю'=>'yu','я'=>'ya','ъ'=>'','ь'=>''));
        $s = preg_replace("/[^0-9a-z-_ ]/i", "", $s); // очищаем строку от недопустимых символов
        $s = str_replace(" ", "-", $s); // заменяем пробелы знаком минус
        return $s; // возвращаем результат
    }

    public function getAudio(Request $request)
    {
        $i_of_broke = 0;
        //instantiates a client
        $client = new TextToSpeechClient();

        // sets text to be synthesised
        $synthesis_input = (new SynthesisInput())
            ->setText($request->input('text'));

        $synthesis_input_parts = [];
        $amount_of_part = ceil(strlen($request->input('text')) / self::TEXT_TO_SPEECH_MAX_LENGTH);
        $current_str_pos = 0;
        $current_text = "";

        if($amount_of_part > 1) {
            while($amount_of_part > 0)
            {
                //todo нихуя не робит
                if($current_str_pos < self::TEXT_TO_SPEECH_MAX_LENGTH)
                {
                    $current_text = substr($request->input('text'), $current_str_pos, strlen($request->input('text') - $current_str_pos));
                }
                else
                {
                    $current_text = substr($request->input('text'), $current_str_pos, self::TEXT_TO_SPEECH_MAX_LENGTH);
                }

                $temp_end_of_sentence = "";
                $i_of_broke += strlen($current_text);
                for($i = strlen($current_text); $i > 0; $i--)
                {
                    if($current_text[$i] != "." || $current_text[$i] != "?" || $current_text[$i] != "!")
                    {
                        $temp_end_of_sentence = $current_text[$i] . $temp_end_of_sentence;
                    }
                    else
                    {
                        $i_of_broke = $i;
                        break;
                    }
                }

                $synthesis_input_parts[$i] = $current_text;
                $current_str_pos = $i_of_broke;
                $amount_of_part--;
            }

            return response()->json($synthesis_input_parts, 200);
        }
        else
        {
            //build the voice request, select the language code ("en-US") and the ssml
            //voice gender
            $voice = (new VoiceSelectionParams())
                ->setLanguageCode('en-US')
                ->setSsmlGender(SsmlVoiceGender::MALE);

            // select the type of audio file you want returned
            $audioConfig = (new AudioConfig())
                ->setAudioEncoding(AudioEncoding::MP3);

            // perform text-to-speech request on the text input with selected voice
            // parameters and audio file type
            $response = $client->synthesizeSpeech($synthesis_input, $voice, $audioConfig);
            $audioContent = $response->getAudioContent();

            return response()->json(file_put_contents($request->input('filename') . ".mp3", $audioContent));
        }
    }

    public static function convert_from_latin1_to_utf8_recursively($dat)
    {
        if (is_string($dat)) {
            return utf8_encode($dat);
        } elseif (is_array($dat)) {
            $ret = [];
            foreach ($dat as $i => $d) $ret[ $i ] = self::convert_from_latin1_to_utf8_recursively($d);

            return $ret;
        } elseif (is_object($dat)) {
            foreach ($dat as $i => $d) $dat->$i = self::convert_from_latin1_to_utf8_recursively($d);

            return $dat;
        } else {
            return $dat;
        }
    }
}
