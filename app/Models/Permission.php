<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Permission extends Model
{
        use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'permission_category_id',
    ];


    /**
     * category
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo {
        return $this->belongsTo(PermissionCategory::class, 'permission_category_id');
    }

    /**
     * roles
     *
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(UserRole::class, 'user_role_permissions');
    }
}
