<?php

namespace App\Http\Controllers;
use App\Models\Findee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class FindeeController extends Controller
{
    
     public function index()
    {
        // return view('findees.index',['findees' => Findee::all()]);
        return Inertia::render('Findees/FindeesTable', [
            'findees' => Findee::all()
        ]);
    }

    public function create()
    {
        return view('findees.create');
    }

     public function store(Request $request): RedirectResponse
    {
    //   return ($request->fullName);

        $validated = $request->validate([
            'fullName' => ['required', 'max:255'],
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
            'images' => ['required']
        ]);

        // dd($validated);
 
        // Storage::put($request->images, $contents);
        // $path = $request->file('images')->store('images');
        // Storage::putFile('images', $request->file('images'));
        // $contents = Storage::get($request->images);
       
        $path = Storage::put($request->images,'sdfsdf');
         dd($path);

        $findee = Findee::create($validated);
        $findee->save();

        return redirect('/findees/create')->with('success', 'Register Success');
    

        // $findee = Findee::create([
        //     'fullName' => $request->fullName,
        //     'dateOfBirth' => $request->dateOfBirth,
        //     'placeOfBirth' => $request->placeOfBirth,
        //     'currentAddress' => $request->currentAddress,
        //     'phoneNumber' => $request->phoneNumber,
        //     'race' => $request->race,
        //     'religion' => $request->religion,
        //     'bloodType' => $request->bloodType,
        //     'weight' => $request->weight,
        //     'height' => $request->height,
        //     'medicalHistory' => $request->medicalHistory,
        //     'familyMemebers' => $request->familyMemebers,
        //     'education' => $request->education,
        //     'occupation' => $request->occupation,
        //     'monthlyIncome' => $request->monthlyIncome,
        //     'personalAssets' => $request->personalAssets,
        //     'hobbies' => $request->hobbies,
        //     'socialmedia' => $request->socialmedia,
        //     'images' => $request->images
        // ]);

    }
}
