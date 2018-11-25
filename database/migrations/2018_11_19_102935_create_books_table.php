<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('name');
            $table->longText('desc')->unique();
            $table->string('author');
            $table->double('rating')->default(0);
            $table->longText('slogan')->unique();
            $table->longText('sloganENG')->unique();
            $table->integer('subject');
            $table->integer('amountOfDownloads')->default(0);
            $table->string('imgURL');
            $table->string('pagesBook');
            $table->string('pagesAbstarct');
            $table->string('publisher');
            $table->string('linkOnText')->unique();
            $table->string('linkOnAudio')->unique();
            $table->string('linkOnVideo')->unique();
            $table->integer('type');
            $table->string('linkOnDemoText')->nullable()->unique();
            $table->string('linkOnDemoAudio')->nullable()->unique();
            $table->string('linkOnDemoVideo')->nullable()->unique();
            $table->integer('amountOfDownloadsDemo')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
