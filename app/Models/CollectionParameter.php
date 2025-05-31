<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CollectionParameter extends Model
{
    use HasFactory;

    protected $fillable = ['collection_id', 'name'];

    public function collection(): BelongsTo
    {
        return $this->belongsTo(Collection::class);
    }
    public function values(): HasMany
    {
        return $this->hasMany(CollectionParameterValue::class);
    }
}
