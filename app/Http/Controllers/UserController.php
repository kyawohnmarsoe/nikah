<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
 
class UserController extends Controller
{
    /**
     * Show the Users for a given user.
     */

    public function showOnlineUsers(): Response
    {
        return Inertia::render('Users/OnlineUsers');
    }

}