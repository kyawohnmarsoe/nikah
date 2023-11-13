@extends('layouts.app')
@section('title', 'Register')
@section('content')
<div>
    <img class="w3-round w3-grayscale-min" src="/img/5.jpg" style="width:100%;">
</div>

<div class="w3-container w3-padding-64 w3-pale-red  w3-wide" >
  @if (session('success'))
    <div class="alert alert-success">
         <h1 class="w3-center" style="color:green;">" {{ session('success') }}"</h1>
    </div>
@endif

    @if ($errors->any())
    <div class="alert alert-danger " style="max-width:700px;margin:auto;">
        <ul>
            @foreach ($errors->all() as $error)
                <li style="color:red;">{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
  <div class="w3-card-4 " style="max-width:700px;margin:auto;">

  <div class="w3-container w3-brown">
    <h2>Nikah Myanmar</h2>
  </div>
<form action="{{ route('upload-image') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="images">
    <button type="submit">Upload Image</button>
</form>
</div>
</div>

<div class="w3-container w3-padding-64 w3-pale-red  w3-wide" id="contact" style="display:none;">
    <h1 class="w3-center">Contact Us At Our Facebook Page </h1>
  <p class="w3-large w3-center">To Begin Your Journey To Lasting Love!</p>
  <p class="w3-xlarge w3-center">
    <!-- <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send Message</button> -->
    <a href="https://www.facebook.com/nikah.myanmar/"><button class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send Message</button></a>
  </p>
</div>
@endsection