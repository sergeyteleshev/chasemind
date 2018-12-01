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

        foreach (range(1, 100) as $index)
        {
            DB::table('books')->insert([
                'name' => str_random(10),
                'desc' => str_random(500),
                'author' => str_random(20),
                'rating' => random_int(0,5),
                'slogan' => str_random(100),
                'sloganENG' => str_random(100),
                'subject' => random_int(1, DB::table('subjects')->max('id')),
                'amountOfDownloads' => 0,
                'imgURL' => "https://images.ua.prom.st/941882038_w640_h640_elrod_h.magiya__200na140mm.jpg",
                'pagesBook' => (string) random_int(500,1000),
                'pagesAbstarct' => (string) random_int(500,1000),
                'publisher' => str_random(100),
                'linkOnText' => str_random(100),
                'linkOnAudio' => str_random(100),
                'linkOnVideo' => str_random(100),
                'linkOnDemoText' => str_random(100),
                'linkOnDemoAudio' => str_random(100),
                'linkOnDemoVideo' => str_random(100),
                'type' => random_int(1,3),
                'amountOfDownloadsDemo' => 0,
            ]);
        }
    }
}
