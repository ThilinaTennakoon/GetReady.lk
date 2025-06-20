<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemImage extends Model
{
    use HasFactory;

    protected $fillable = ['item_id', 'image_path', 'alt_text'];

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
