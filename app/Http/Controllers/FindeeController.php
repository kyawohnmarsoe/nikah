<?php

namespace App\Http\Controllers;
use App\Models\Findee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FindeeCreateRequest;
use Intervention\Image\Facades\Image;

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
        public function create()
    {
        $findee = Findee::where('active', true)->orderByDesc('id')->limit(1)->get();
        
        $id = $findee[0]['id'];
        if($id>=100){
             return view('findees.create',[
             'status' => 100
             ]);
             
        }else{
            return view('findees.create');
        }
       
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

    public function upload(Request $request,$name)
{
        $image = $request->file($name);
        $imageName = rand(111, 888).time().'.'.$image->getClientOriginalExtension();

        $path = public_path('storage/' . $imageName);

        // Compress and save the image
        Image::make($image->getRealPath())->encode('jpg', 80)->save($path);

        return $imageName;

}



     public function store(FindeeCreateRequest $request)
    {
        $request->validated();

        // $path = $request->file('halfImage')->store('findee_img/half');
        // $fullPath = $request->file('fullImage')->store('findee_img/full');

        $halfImage = $this->upload($request,'halfImage');
        $fullImage = $this->upload($request,'fullImage');

        // Storage::put($request->fullImage,$path);
 
        $data = [
            'fullName' => $request->fullName,
            'gender' => $request->gender,
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
            'halfImage' => $halfImage,
            'fullImage' => $fullImage
        ];

        Findee::create($data);

        //  return redirect('/findees/create')->with('success', 'Register Success');
         return redirect('/findees/create')->with('status', 201);
       
    }

}
