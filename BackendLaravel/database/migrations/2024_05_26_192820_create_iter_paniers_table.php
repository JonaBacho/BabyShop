<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('iter_paniers', function (Blueprint $table) {
            $table->id('idPanier');
            $table->unsignedInteger('idClient');
            $table->unsignedInteger('codePro');
            $table->integer('quantity');
            $table->timestamps();
            $table->foreign('idClient')->references('matr')->on('clientcarte')->onDelete('cascade');
            $table->foreign('codePro')->references('codePro')->on('produit')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iter_paniers');
    }
};
