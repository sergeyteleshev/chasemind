<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $subjects = array('Бизнес', 'Здоровье', 'Творчество', 'Маркетинг', 'Саморазвитие');

        foreach ($subjects as $subject)
        {
            DB::table('subjects')->insert([
                'subject' => $subject,
            ]);
        }
    }
}
