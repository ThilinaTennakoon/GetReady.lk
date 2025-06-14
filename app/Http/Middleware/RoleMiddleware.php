<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$role)
    {
        $user = $request->user();
        if ($user && in_array( ucfirst($user->type), $role)) {
            return $next($request);
        }
        return response('Unauthorized.', 401);

    }
}
