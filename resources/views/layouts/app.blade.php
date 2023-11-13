<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Nikah Myanmar - @yield('title')</title>

    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->

    <link rel="stylesheet" href="/css/w3.css">
    <link rel="stylesheet" href="/css/nikah.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
    <link rel="icon" type="image/x-icon" href="/img/icon.png">

</head>

<body>
    <!-- Navbar (sticky bottom) -->
    <div class="w3-top ">
        <div class="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">

            <a href="/home" style="width:25%;" class="w3-bar-item w3-button">Home</a>
            <a href="/findees/create" style="width:25%;" class="w3-bar-item w3-button">Register</a>
            <a href="/home#about" style="width:25%;" class="w3-bar-item w3-button">About</a>
            <a href="/home#contact" style="width:25%;" class="w3-bar-item w3-button">Contact</a>

            <!-- <a href="#" style="width:100%" class="w3-bar-item w3-button">Register Now!</a> -->
        </div>
    </div>
    @yield('content')
    <!-- Footer -->

    <footer class="w3-center w3-black w3-padding-16">
        <p>© 2023 Nikah Myanmar | All Rights Reserved</p>
        <!-- <p>Powered by <a href="https://www.facebook.com/wayk.tech/" title="W3.CSS" target="_blank">WayK Tech</a></p> -->
    </footer>
</body>

</html>
