<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subjects = array('Бизнес', 'Творчество');

        foreach ($subjects as $subject)
        {
            DB::table('subjects')->insert([
                'subject' => $subject,
            ]);
        }
    }
}
