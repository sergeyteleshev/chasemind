<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'name', 'desc', 'author', 'slogan', 'sloganENG',
        'rating', 'subject', 'amountOfDownloads', 'imgURL',
        'pagesBook', 'pagesAbstarct', 'publisher', 'linkOnText',
        'linkOnAudio', 'linkOnVideo', 'linkOnDemoText', 'linkOnDemoAudio',
        'linkOnDemoVideo', 'type', 'amountOfDownloadsDemo'
    ];
}
