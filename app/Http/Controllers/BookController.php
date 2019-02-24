<?php

namespace App\Http\Controllers;

use App\Book;
use Google\ApiCore\ApiException;
use Google\ApiCore\ValidationException;
use Illuminate\Http\File;
use Illuminate\Http\Request;

use Google\Cloud\TextToSpeech\V1\AudioConfig;
use Google\Cloud\TextToSpeech\V1\AudioEncoding;
use Google\Cloud\TextToSpeech\V1\SsmlVoiceGender;
use Google\Cloud\TextToSpeech\V1\SynthesisInput;
use Google\Cloud\TextToSpeech\V1\TextToSpeechClient;
use Google\Cloud\TextToSpeech\V1\VoiceSelectionParams;
use Illuminate\Support\Facades\Storage;
use function Sodium\add;

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

    public function uploadPdf($pdf, $title)
    {
        $file_content = file_get_contents($pdf);
        if($file_content)
        {
            $filepath = Storage::disk('local')->putFileAs('public/read', $pdf, $title . "(ЧИТАТЬ).pdf");
            $parser = new \Smalot\PdfParser\Parser();
            $pdf_parsed = $parser->parseFile($pdf);
            $text = $pdf_parsed->getText();

            return array(
                "status" => "ok",
                "text" => $text,
                "filepath" => $filepath
            );
        }

        return array("error" => "pdf not found");
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

    public function compileToOneMp3($files)
    {
        $mp3 = "";

        foreach($files as $file)
        {
            $mp3 .= $file;
        }

        return $mp3;
    }

    public function addBook(Request $request)
    {
        $abstractParser = new \AbstractParser();
        $title = $request->input('title');
        $description = $request->input('desc');
        $author = $request->input('author');
        $slogan = $request->input('slogan');
        $slogan_eng = $request->input('sloganENG');
        $subject = $request->input('subject');
        $pages_book = $request->input('pagesOriginal');
        $pages_abstract = $request->input('pagesAbstarct');
        $publisher = $request->input('publisher');
        $imageURL = $request->input('imgURL');
        $pdf = $request->file('pdfToUpload');
        $files = [];

        $pdfUploaded = $this->uploadPdf($pdf, $title);
        $abstractStructure = $abstractParser->getStructure($pdfUploaded['text']);
        $audioFilePath = 'public/listen/' . $title . '(СЛУШАТЬ).mp3';
        $texts = $this->splitText($pdfUploaded['text']);

        foreach($texts as $text)
        {
            $files[] = $this->getAudioGoogle($text)['content'];
        }

        $compiledTo = $this->compileToOneMp3($files);
        Storage::disk('local')->put($audioFilePath, $compiledTo);

        $book = array(
            'name' => $title,
            'desc' => $description,
            'author' => $author,
            'slogan' => $slogan,
            'sloganENG' => $slogan_eng,
            'subject' => $subject,
            'imgURL' => $imageURL,
            'pagesBook' => $pages_book,
            'pagesAbstarct' => $pages_abstract,
            'publisher' => $publisher,
            'linkOnText' => $pdfUploaded['filepath'],
            'linkOnAudio' => $audioFilePath,
        );

        $db_book = Book::create($book);

        return response()->json($db_book);
    }

    public function getBookMaterial(Request $request)
    {
        $id = $request->input('id');
        $type = $request->input('type');
        $book = Book::findOrFail($id);
        $filename = ""; //тут не убирать. оно и так работает
        $file_path_from_public = '';

        if($type == 'read' && $book)
        {
            $file_path_from_public .= $book->linkOnText;
        }
        else if($type == 'listen' && $book)
        {
            $file_path_from_public .= $book->linkOnAudio;
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

        $test = Storage::disk('local')->get($file_path_from_public);

        if(is_string($file_path_from_public))
            return response()->download(Storage::disk('local')->path($file_path_from_public), $filename, $request->header());
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

    public function splitText($text)
    {
        $parts = str_split($text, self::TEXT_TO_SPEECH_MAX_LENGTH);
//        $compiledParts = "";
//        $prevPart = "";
//
//        for($i = count($parts); $i > 0; $i--)
//        {
//            $part = $parts[$i];
//            $sentence = "";
//
//            if($part[$i] !== '!' || $part[$i] !== '.' || $part[$i] !== '?')
//            {
//                $sentence .= $parts[$i];
//            }
//            else
//            {
//
//                break;
//            }
//
//
//            $compiledParts .= $part;
//        }

        return $parts;
    }

    /**
     * @param $text
     * @return array
     * @throws ApiException
     * @throws ValidationException
     */
    public function getAudioGoogle($text)
    {
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
            ->setText($text);

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

        return ['response' => true, 'content' => $audioContent];
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
