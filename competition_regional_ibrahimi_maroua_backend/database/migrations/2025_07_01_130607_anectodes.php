<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Anectodes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anecdotes', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('user_id');  
        $table->string('title');
        $table->string('category');             
        $table->text('content');               
        $table->timestamps();                   
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anecdotes');
    }
}
