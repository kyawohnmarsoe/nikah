@extends('layouts.app')
@section('title', 'Marriage Agency')
@section('content')

<!-- Header / Home-->
<header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
  <div class="w3-display-middle w3-text-white w3-center">
    <h1 class="w3-jumbo">Nikah Myanmar</h1>
    <h2>Marriage Agency</h2>
    <!-- <h2><b>17.07.2017</b></h2> -->
  </div>
</header>

<!-- About / Jane And John -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min " >
  <div class="w3-content">
    <h1 class="w3-center w3-text-grey"><b>Find Your Perfect Match  </b></h1>
<h2 class="w3-center w3-text-grey"><b>With Us</b></h2>
<p style="width:100%;margin:32px 0" class="w3-center"><i>Are you ready to embark on a lifelong journey of love and companionship? At Nikah Myanmar, we specialize in bringing hearts together, creating beautiful love stories, and uniting soulmates for a lifetime of happiness.</i>
    </p>

    <img class="w3-round w3-grayscale-min" src="/img/2.jpg" style="width:100%;margin:32px 0" id="how-it-works">

    <p style="width:100%;margin:32px 0" > 

    <b>Step 1 : Matchmaking</b> 
    <br>
     Register your details in our website and let us help you to find your perfect soulmate.<br>
    <b>Step 2 : Introduction</b> 
    <br>
     Introduce each other via video conferencing and find out how much is your compatibility.<br>
    <b>Step 3 : Dating Support</b> 
    <br>
     Exchange contact and arrange meeting to get to know each other, and we're here to assist with any questions or concerns.
     <br>

    </p>
    <br>

    <p class="w3-center"><a href="#wedding" class="w3-button w3-black w3-round w3-padding-large w3-large">Register Now</a></p>
  </div>
</div>

<!-- Background photo -->
<div class="w3-display-container bgimg2">
  <div class="w3-display-middle w3-text-white w3-center">
    <h1 class="w3-jumbo">Love Stories</h1><br>
    <!-- <h2>Begin Here...</h2> -->
  </div>
</div>

<!-- Wedding information -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min " id="about">
  <div class="w3-content">
     <h1 class="w3-center w3-text-grey"><b>To Finding The Love Of Your Life </b></h1>
<h2 class="w3-center w3-text-grey"><b>Begins Here</b></h2>
<p style="width:100%;margin:32px 0" class="w3-center"><i>Don't leave your love life to chance. Let us help you find the love you deserve. Join Nikah Myanmar today and take the first step toward a future filled with love, joy, and companionship. Your happily ever after starts here.</i>
    </p>
    <img class="w3-round-large w3-grayscale-min" src="/img/4.jpg" style="width:100%;margin:32px 0">


    <div class="w3-row">
      <div class="w3-half">
        <h2>Finders</h2>
        <p>Finders shall contact our consultants immediately via our facebook page and provide  your requirements and preferrences.</p>
        <p><a href="https://www.facebook.com/nikah.myanmar/">Go To Our Facebook Page</a></p>
        <p>Fees : Finders shall pay per head once they plan to meet in person.</p>
       
      </div>
      <div class="w3-half">
        <h2>Findees</h2>
        <p>Findees shall register in our website with the correct infromation and our consultants will contact you once they found suitable candidates.</p>
         <p><a href="#">Register Here</a></p>
         <p>Fees : Free of charge.</p>
      </div>
     
    </div>
  </div>
</div>

<!-- RSVP section -->
<div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="contact">
  <h1>Contact Us At Our Facebook Page </h1>
  <p class="w3-large">To Begin Your Journey To Lasting Love!</p>
  <p class="w3-xlarge">
    <!-- <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send Message</button> -->
    <a href="https://www.facebook.com/nikah.myanmar/"><button class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">Send Message</button></a>
  </p>
</div>

<!-- RSVP modal -->
<div id="id01" class="w3-modal">
  <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
    <div class="w3-container w3-white w3-center">
      <h1 class="w3-wide">CAN YOU COME?</h1>
      <p>We really hope you can make it.</p>
      <form>
        <input class="w3-input w3-border" type="text" placeholder="Name(s)" name="name">
      </form>
      <p><i>Sincerely, John & Jane</i></p>
      <div class="w3-row">
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-green">Going</button>
        </div>
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none'" type="button" class="w3-button w3-block w3-red">Can't come</button>
        </div>
      </div>
    </div>
  </div>
</div>

@endsection
