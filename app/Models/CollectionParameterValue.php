<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CollectionParameterValue extends Model
{
    use HasFactory;

    protected $fillable = ['collection_parameter_id', 'value'];

    public function parameter(): BelongsTo
    {
        return $this->belongsTo(CollectionParameter::class, 'collection_parameter_id');
    }
}
