<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ItemParameter extends Model
{
    use HasFactory;

    protected $fillable = ['item_id', 'collection_parameter_id', 'value'];

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
    public function parameter(): BelongsTo
    {
        return $this->belongsTo(CollectionParameter::class);
    }
}
