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
            $table->longText('desc');
            $table->string('author');
            $table->double('rating')->default(0);
            $table->longText('slogan');
            $table->longText('sloganENG');
            $table->integer('subject',0,1);
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

        Schema::table('books', function (Blueprint $table) {
            $table->foreign('subject')->references('id')->on('subjects')->onDelete('cascade');
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
