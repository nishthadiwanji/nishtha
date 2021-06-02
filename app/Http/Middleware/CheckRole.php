<?php

namespace App\Http\Middleware;

use Sentinel;
use Closure;
use Illuminate\Support\Facades\Route;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roles = null)
    {
        $user = Sentinel::getUser();
        if ($user==null) {
            return redirect('/login');
        }
        $roles = explode('|',$roles);
        $flag = false;
        foreach ($roles as $role) {
            if ($user->inRole($role)) {
                $flag = true;
            }
        }
        if (!$flag) {
            if ($request->ajax()){
                return response()->json(['message'=>'unauthorized'],401);
            }
            return redirect('/unauthorized');  
        }
        return $next($request);
    }
}
