<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class YaCloud extends Model
{
    //
    protected $fillable = [
        'id', 'OAuth_token', 'IAM_TOKEN', 'old_time', 'folder_id',
    ];

    protected $table = 'ya_cloud';
}
