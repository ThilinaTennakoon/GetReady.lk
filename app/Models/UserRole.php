<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;

class UserRole extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'status'
    ];
    /**
     * appens
     *
     * @var array
     */
    protected $appends = [
        'created_at_human'
    ];
    /**
     * Method getCreatedAtHumanAttribute
     *
     * @return string
     */
    public function getCreatedAtHumanAttribute(): string
    {
        return Carbon::parse($this->created_at)->format("M d, Y");
    }

    /**
     * @param mixed $query
     * @param mixed $column
     * @param string $direction
     *
     * @return [type]
     */
    public function scopeOrderByColumn($query, $column, $direction = 'asc')
    {
        $query->orderBy($column, $direction);
    }
    /**
     * @param mixed $query
     * @param array $filters
     *
     * @return [type]
     */
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['searchParam'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        })->where("status", "active");
    }

    /**
     * permissions
     *
     * @return BelongsToMany
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'user_role_permissions');
    }

    /**
     * users
     *
     * @return BelongsTo
     */
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'role_id');
    }
}
