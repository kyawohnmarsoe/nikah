<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('findees', function (Blueprint $table) {
            $table->id();
             $table->string('fullName');
             $table->string('gender');
             $table->string('dateOfBirth');
             $table->string('placeOfBirth');
             $table->string('currentAddress');
             $table->string('phoneNumber');
             $table->string('race');
             $table->string('religion');
             $table->string('bloodType');
             $table->integer('weight');
             $table->string('height');
             $table->text('medicalHistory');
             $table->text('familyMemebers');
             $table->string('education');
             $table->string('occupation');
             $table->string('monthlyIncome');
             $table->text('personalAssets');
             $table->text('hobbies');
             $table->string('socialmedia');
             $table->string('halfImage');
             $table->string('fullImage');
             $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('findees');
    }
};
