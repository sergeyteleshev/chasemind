<?php

namespace App\Http\Controllers;

use App\Book;
use Google\ApiCore\ApiException;
use Google\ApiCore\ValidationException;
use Illuminate\Http\Request;

use Google\Cloud\TextToSpeech\V1\AudioConfig;
use Google\Cloud\TextToSpeech\V1\AudioEncoding;
use Google\Cloud\TextToSpeech\V1\SsmlVoiceGender;
use Google\Cloud\TextToSpeech\V1\SynthesisInput;
use Google\Cloud\TextToSpeech\V1\TextToSpeechClient;
use Google\Cloud\TextToSpeech\V1\VoiceSelectionParams;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Expr\Cast\Object_;

class BookController extends Controller
{
    const YANDEX_KEY = "57443385-b5ae-4d9a-9be6-98fc921e18e9";
    const TEXT_TO_SPEECH_MAX_LENGTH = 5000;
    const FORMAT_PCM = "lpcm";
    const FORMAT_OPUS = "oggopus";

    public function index()
    {
        return Book::all();
    }

    public function uploadPdf($pdf)
    {
        if($pdf)
        {
            Storage::disk('local')->putFile('public/read', $pdf);
            $parser = new \Smalot\PdfParser\Parser();
            $pdf = $parser->parseFile($pdf);
            $text = $pdf->getText();

            return response()->json([
                "status" => "ok",
                "text" => $text,
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

    public function addBook(Request $request)
    {
        $title = $request->input('title');
        $description = $request->input('description');
        $author = $request->input('author');
        $slogan = $request->input('slogan');
        $slogan_eng = $request->input('slogan_eng');
        $subject = $request->input('subject');
        $pages_book = $request->input('pages_book');
        $pages_abstract = $request->input('pages_abstract');
        $publisher = $request->input('publisher');
        $image = $request->file('image');
        $pdf = $request->file('pdf');
        $book = array(
            'name' => $title,
            'desc' => $description,
            'author' => $author,
            'slogan' => $slogan,
            'sloganENG' => $slogan_eng,
            'subject' => $subject,
            'imgURL' => $image,
            'pagesBook' => $pages_book,
            'pagesAbstract' => $pages_abstract,
            'publisher' => $publisher,
        );

        $pdf_text = $this->uploadPdf($pdf);

        if($pdf_text['status'] && $pdf_text['text'])
        {
            $db_book = Book::create($book);
            //todo сюда сделать разбиение текста на части
            //todo и этот же текст потом надо разбить на смысловые части для майнд мапы
        }
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

    public function splitText($text)
    {
        $parts = str_split($text, self::TEXT_TO_SPEECH_MAX_LENGTH);

        return $parts;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws ApiException
     * @throws ValidationException
     */
    public function getAudio(Request $request)
    {
        $file_path = 'public/listen/' . $request->input('filename');

        try
        {
            $client = new TextToSpeechClient();
        }
        catch (ValidationException $e)
        {
            throw $e;
        }

        // sets text to be synthesised
        $synthesis_input = (new SynthesisInput())
            ->setText($request->input('text'));

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
        try
        {
            $response = $client->synthesizeSpeech($synthesis_input, $voice, $audioConfig, []);
        }
        catch (ApiException $e)
        {
            throw $e;
        }

        $audioContent = $response->getAudioContent();
        Storage::disk('local')->put($file_path, $audioContent);

        return response()->json($audioContent);

    }

    public function getAudioYandex(Request $request)
    {
        $token = (new UserController)->getIAMtoken(); # IAM-токен

        $folderId = "b1g8js4v9qfgcc35vhr7"; # Идентификатор каталога
        $url = "https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize";
        $text = urlencode("Фарту масти ауе");

        $post = "folderId=${folderId}&text=" . $text . "&lang=ru-RU&sampleRateHertz=48000&format=" . self::FORMAT_PCM;
        $headers = ['Authorization: Bearer ' . $token];
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        if ($post !== false) {
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            print "Error: " . curl_error($ch);
        }
        if (curl_getinfo($ch, CURLINFO_HTTP_CODE) != 200) {
            $decodedResponse = json_decode($response, true);
//            echo "Error code: " . $decodedResponse["error_code"] . "\r\n";
//            echo "Error message: " . $decodedResponse["error_message"] . "\r\n";
        } else {
            //file_put_contents("audio.pcm", $response);
            $filepath = Storage::disk('local')->put('public/listen/test.pcm', $response);
//            return response()->json(file_put_contents("test.ogg", $filepath));
        }
        curl_close($ch);

        return response()->json($response);
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
