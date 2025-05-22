<?php

namespace App\Enums;

enum RoleEnum: string
{
    case SuperAdmin = 'superAdmin';
    case Admin = 'admin';
    case HR = 'hr';
}
