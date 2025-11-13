<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Http\Requests\ListingRequest;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Listing/Index', [
            'listings' => Listing::orderBy('created_at', 'desc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Listing/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ListingRequest $request)
    {
        Listing::create($request->validated());

        return to_route('listing.index')->with('success', 'Listing created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('Listing/Show', [
            'listing' => Listing::findOrFail($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('Listing/Edit', [
            'listing' => Listing::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ListingRequest $request, string $id)
    {
        $listing = Listing::findOrFail($id);
        $listing->update($request->validated());

        return to_route('listing.index')->with('success', 'Listing updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $listing = Listing::findOrFail($id);
        $listing->delete();

        return redirect()->back()->with('success', 'Listing deleted successfully.');
    }
}
