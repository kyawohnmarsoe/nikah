<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Findee extends Model
{
    use HasFactory;

        protected $fillable = [
            'fullName',
            'dateOfBirth',
            'placeOfBirth',
            'currentAddress',
            'phoneNumber',
            'race',
            'religion',
            'bloodType',
            'weight',
            'height',
            'medicalHistory',
            'familyMemebers',
            'education',
            'occupation',
            'monthlyIncome',
            'personalAssets',
            'hobbies',
            'socialmedia',
            'images'
    ];
}
