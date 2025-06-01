<?php

namespace Database\Seeders;

use App\Repositories\All\Collection\CollectionInterface;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CollectionSeeder extends Seeder
{
      public function __construct(
        protected CollectionInterface $collectionInterface,
        ) {}
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $array = [
            [
            'name' => 'Blazer',
            'description' => 'This is the blazer collection.',
            'slug' => 'blazer-collection',
            'status'=>'active'
            ],
            [
            'name' => 'Saree',
            'description'=>'This is the saree collection.',
            'slug' => 'saree-collection',
            'status'=>'active'
            ]
            ];

        foreach ($array as $data) {
            $this->collectionInterface->create($data);
        }
    }
}
