<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class FindeeCreateRequest extends FormRequest
{
    
    // public function authorize(): bool
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [

            'fullName' => ['required', 'max:255'],
            'gender' => ['required'],
            'dateOfBirth' => ['required'],
            'placeOfBirth' => ['required'],
            'currentAddress' => ['required'],
            'phoneNumber' => ['required'],
            'race' => ['required'],
            'religion' => ['required'],
            'bloodType' => ['required'],
            'weight' => ['required'],
            'height' => ['required'],
            'medicalHistory' => ['required'],
            'familyMemebers' => ['required'],
            'education' => ['required'],
            'occupation' => ['required'],
            'monthlyIncome' => ['required'],
            'personalAssets' => ['required'],
            'hobbies' => ['required'],
            'socialmedia' => ['required'],
            'halfImage' => ['required','image','mimes:jpeg,png,jpg,gif','max:1024'],
            'fullImage' => ['required','image','mimes:jpeg,png,jpg,gif','max:1024'],
            'g-recaptcha-response' => 'required|recaptchav3:register,0.5'
        ];
    }
}
