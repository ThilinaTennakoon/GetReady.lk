<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['collection_id', 'name', 'slug', 'description', 'price', 'status', 'is_new', 'is_popular'];

    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class);
    }
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }
    public function images(): HasMany
    {
        return $this->hasMany(ItemImage::class);
    }
    public function parameters(): HasMany
    {
        return $this->hasMany(ItemParameter::class);
    }
    public function reviews(): HasMany
    {
        return $this->hasMany(ItemReview::class);
    }
}
