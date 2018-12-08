<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
       'user_id', 'type_of_sub', 'sub_cost_rub',
    ];
}
