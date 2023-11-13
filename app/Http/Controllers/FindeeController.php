<?php

namespace App\Http\Controllers;
use App\Models\Findee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FindeeCreateRequest;


class FindeeController extends Controller
{
    
     public function index()
    {
        $findees = Findee::where('active', true)
               ->orderBy('fullName')
            //    ->take(3)
               ->get();

         return Inertia::render('Findees/Findees', [
            'findees' => $findees
        ]);
    }

    public function search(Request $request):RedirectResponse
    {
        $findees = Findee::where('active', true)
               ->orderBy('fullName')
            //    ->take(3)
               ->get();

         return Inertia::render('Findees/Findees', [
            'findees' => $findees
        ]);
    }

    public function upload(Request $request)
{
    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time().'.'.$image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);
        // You can save the file path or other information to the database here
        return redirect()->back()->with('success', 'Image uploaded successfully.');
    }

    return redirect()->back()->with('error', 'Image not uploaded.');
}

    public function create()
    {
        return view('findees.create');
    }

     public function store(FindeeCreateRequest $request)
    {
        $request->validated();

        // $image = $request->file('images');
        // $imageName = time().'.'.$image->getClientOriginalExtension();
        // $image->move(public_path('images'), $imageName);

        $path = $request->file('fullImage')->store('findee_img');

        // Storage::put($request->fullImage,$path);
 
        $data = [
            'fullName' => $request->fullName,
            'dateOfBirth' => $request->dateOfBirth,
            'placeOfBirth' => $request->placeOfBirth,
            'currentAddress' => $request->currentAddress,
            'phoneNumber' => $request->phoneNumber,
            'race' => $request->race,
            'religion' => $request->religion,
            'bloodType' => $request->bloodType,
            'weight' => $request->weight,
            'height' => $request->height,
            'medicalHistory' => $request->medicalHistory,
            'familyMemebers' => $request->familyMemebers,
            'education' => $request->education,
            'occupation' => $request->occupation,
            'monthlyIncome' => $request->monthlyIncome,
            'personalAssets' => $request->personalAssets,
            'hobbies' => $request->hobbies,
            'socialmedia' => $request->socialmedia,
            'fullImage' => $path
        ];

        Findee::create($data);

        //  return redirect('/findees/create')->with('success', 'Register Success');
         return back()->with('status', 201); 
       
    }

}
