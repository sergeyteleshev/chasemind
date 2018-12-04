<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'last_update';

    protected $fillable = [
       'user_id', 'type_of_sub', 'sub_cost_rub',
    ];
}
