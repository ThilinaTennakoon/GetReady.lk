<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class RentalRequest extends Model
{
    use HasFactory;

    protected $fillable = ['cart_id', 'rental_date', 'status'];

    protected $casts = [
        'status' => 'string', // Should use enum in migration: enum('pending', 'approved', 'cancelled', 'returned')
    ];
    public function cart(): BelongsTo
    {
        return $this->belongsTo(Cart::class);
    }
}
