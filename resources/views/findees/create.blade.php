@extends('layouts.app')
@section('title', 'Register')
@section('content')

<div>
    <img class="w3-round w3-grayscale-min" src="/img/5Large.jpeg" style="width:100%;">
</div>

<div class="w3-container w3-padding-64 w3-pale-red  w3-wide">
    @if(session('status') == '201')
        <div class="alert alert-success">
            <h1 class="w3-center" style="color:green;">" Register Success "</h1>
            <p class="w3-center" style="color:green;">We will contact you soon ...</p>
        </div>
    @endif

    @if($errors->any())
        <div class="alert alert-danger " style="max-width:700px;margin:auto;">
            <ul>
                @foreach($errors->all() as $error)
                    <li style="color:red;">{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <div class="w3-card-4 " style="max-width:700px;margin:auto;">

        <div class="w3-container w3-brown">
            <h2>Nikah Myanmar</h2>
        </div>
        <form id="contactForm1" class="w3-container" enctype="multipart/form-data"
            action="{{ route('findees.store') }}" method="post">
            @csrf

            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Name</b></label>
                    <input class="w3-input w3-border w3-sand @error('fullName') is-invalid @enderror" required
                        name="fullName" type="text" value="{{ old('fullName') }}">
                </p>
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Gender</b></label>
                    <select class="w3-input w3-border w3-sand @error('gender') is-invalid @enderror" required
                        name="gender" value="{{ old('gender') }}">
                        <option value="male" selected>Male</option>
                        <option value="female">Female </option>
                    </select>
                </p>
            </div>

            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Date of Birth</b></label>
                    <input class="w3-input w3-border w3-sand @error('dateOfBirth') is-invalid @enderror" required
                        name="dateOfBirth" type="date" value="{{ old('dateOfBirth') }}">
                </p>

                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Place of Birth (Home Town)</b></label>
                    <input class="w3-input w3-border w3-sand @error('placeOfBirth') is-invalid @enderror" required
                        name="placeOfBirth" type="text" value="{{ old('placeOfBirth') }}">
                </p>
            </div>


            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Current Address (City Only)</b></label>
                    <input class="w3-input w3-border w3-sand @error('currentAddress') is-invalid @enderror" required
                        name="currentAddress" type="text" placeholder="Yangon, Mandalay, Mawlamyine"
                        value="{{ old('currentAddress') }}">
                </p>

                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Phone Number</b></label>
                    <input class="w3-input w3-border w3-sand @error('phoneNumber') is-invalid @enderror" required
                        name="phoneNumber" type="text" value="{{ old('phoneNumber') }}">
                </p>
            </div>


            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Race</b></label>
                    <input class="w3-input w3-border w3-sand @error('race') is-invalid @enderror" required name="race"
                        type="text" placeholder="Sunni, Shia, Whabbi, Kachin, Mon, Shan etc"
                        value="{{ old('race') }}">
                </p>

                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Religion</b></label>
                    <input class="w3-input w3-border w3-sand @error('religion') is-invalid @enderror" required
                        name="religion" type="text" placeholder="Muslim, Christian"
                        value="{{ old('religion') }}">
                </p>
            </div>

            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Bloodtype</b></label>
                    <input class="w3-input w3-border w3-sand @error('bloodType') is-invalid @enderror" required
                        name="bloodType" type="text" placeholder="A+, A-, B+, B-, O+, O- etc"
                        value="{{ old('bloodType') }}">
                </p>

                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Weight (in lbs)</b></label>
                    <input class="w3-input w3-border w3-sand @error('weight') is-invalid @enderror" required
                        name="weight" type="number" placeholder="130" value="{{ old('weight') }}">
                </p>
            </div>

            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Height (in feet)</b></label>
                    <input class="w3-input w3-border w3-sand @error('height') is-invalid @enderror" required
                        name="height" type="text" placeholder="5 ft 9 in" value="{{ old('height') }}">
                </p>


            </div>
            <p class="w3-col m12">
                <label class="w3-text-brown"><b>Medical History</b></label>
                <textarea rows="3" class="w3-input w3-border w3-sand @error('medicalHistory') is-invalid @enderror"
                    required name="medicalHistory"
                    placeholder="Diabetes, Heart Disease etc">{{ old('medicalHistory') }}</textarea>
            </p>

            <p class="w3-col m12">
                <label class="w3-text-brown"><b>Family Members</b></label>
                <textarea rows="2" class="w3-input w3-border w3-sand @error('familyMemebers') is-invalid @enderror"
                    required name="familyMemebers"
                    placeholder="2 sisters and 1 brother">{{ old('familyMemebers') }}</textarea>
            </p>

            <div class="w3-row">


                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Education</b></label>
                    <input class="w3-input w3-border w3-sand @error('education') is-invalid @enderror" required
                        name="education" type="text" placeholder="Highschool, Diploma, Bachelor, Master etc"
                        value="{{ old('education') }}">
                </p>
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Occupation</b></label>
                    <input class="w3-input w3-border w3-sand @error('occupation') is-invalid @enderror" required
                        name="occupation" type="text" placeholder="Sales, Engineer, Own Business"
                        value="{{ old('occupation') }}">
                </p>
            </div>

            <div class="w3-row">


                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Monthly Income</b></label>
                    <select class="w3-input w3-border w3-sand @error('monthlyIncome') is-invalid @enderror" required
                        name="monthlyIncome" value="{{ old('monthlyIncome') }}">
                        <option value="500" selected>Less than 500 USD</option>
                        <option value="1000">More than 1000 USD </option>
                        <option value="3000">More than 3000 USD</option>
                        <option value="10000">More than 10000 USD</option>
                    </select>
                </p>
            </div>

            <p class="w3-col m12">
                <label class="w3-text-brown"><b>Personal Assets (Appartment, Land,
                        etc)</b></label>
                <textarea rows="2" class="w3-input w3-border w3-sand @error('personalAssets') is-invalid @enderror"
                    required name="personalAssets">{{ old('personalAssets') }}</textarea>
            </p>
            <p class="w3-col m12">
                <label class="w3-text-brown"><b>Hobbies and Interests</b></label>
                <textarea rows="2" class="w3-input w3-border w3-sand @error('hobbies') is-invalid @enderror" required
                    name="hobbies"
                    placeholder="Swimming, Drawing, Travel">{{ old('hobbies') }}</textarea>
            </p>


            <p class="w3-col m12">
                <label class="w3-text-brown"><b>Socialmedia Profile (Facebook, Instragram,
                        etc)</b></label>
                <input class="w3-input w3-border w3-sand @error('socialmedia') is-invalid @enderror" name="socialmedia"
                    type="url" placeholder="https://facebook.com/your_user_name_id"
                    value="{{ old('socialmedia') }}">
            </p>



            <div class="w3-row">
                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Please Upload Your Selfie</b></label>
                    <!-- <input class="w3-input w3-border w3-sand @error('halfImage') is-invalid @enderror" required name="halfImage" type="file"></p> -->
                    <input class="w3-input w3-border w3-sand @error('halfImage') is-invalid @enderror" required
                        name="halfImage" type="file"></p>

                <p class="w3-col m6">
                    <label class="w3-text-brown"><b>Fullbody Image</b></label>

                    <input class="w3-input w3-border w3-sand @error('fullImage') is-invalid @enderror" required
                        name="fullImage" type="file"></p>

                </p>
            </div>

            <p>
                <input calss="w3-input w3-border w3-sand @error('agree') is-invalid @enderror" type="checkbox"
                    id="agree" name="agree" value="yes" required>
                <label class="w3-text-brown" for="agree"><small>All of my information filled in
                        this form is correct and
                        I agree to use in this website. </small></label>
            </p>

            <!-- <p>      
    <label class="w3-text-brown"><b>Please Upload Clear And Fullbody Image</b></label>
    <input class="w3-input w3-border w3-sand @error('images') is-invalid @enderror" required name="images" type="text" value="{{ old('images') }}"></p> -->

            <p><button class="w3-btn w3-brown">Register</button></p>

        </form>
    </div>
</div>


<div class="w3-container w3-padding-64 w3-pale-red  w3-wide" id="contact" style="display:none;">
    <h1 class="w3-center">Contact Us At Our Facebook Page </h1>
    <p class="w3-large w3-center">To Begin Your Journey To Lasting Love!</p>
    <p class="w3-xlarge w3-center">
        <!-- <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send Message</button> -->
        <a href="https://www.facebook.com/nikah.myanmar/"><button
                class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send
                Message</button></a>
    </p>
</div>
@endsection
