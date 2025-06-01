<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Repositories\All\Users\UserRepositoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
     public function __construct(
        protected UserRepositoryInterface $userRepository,
     ){}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->all('searchParam', 'sortBy', 'sortDirection', 'rowPerPage', 'page');
        $filters['sortBy'] = $filters['sortBy'] ?? "id";
        $filters['sortDirection'] = $filters['sortDirection'] ?? "desc";
        $filters['rowPerPage'] = $filters['rowPerPage'] ?? 10;
        $filters['page'] = $filters['page'] ?? 1;

        return Inertia::render('Admin/Users/All/Index', [
            'filters' => $filters,
            'users' => UserResource::collection($this->userRepository->filter($filters)),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Logic for showing the user creation form
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Logic for storing a new user
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Logic for showing a specific user
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Logic for showing the user edit form
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Logic for updating a user
    }
}
