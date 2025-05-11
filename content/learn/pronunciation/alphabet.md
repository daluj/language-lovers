---
title: The Alphabet
weight: 1
---

## Notes

- The Vietnamese alphabet consists of 29 letters including 12 vowels and 17 consonants
- The letters F, J, W, and Z are used only in foreign loanwords

## Alphabet

Click on any letter to see its pronunciation:

<div x-data="vietnameseAlphabet" class="max-w-4xl mx-auto">
<div class="mb-8">
    <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3 p-6">
        <template x-for="(letter, index) in alphabet" :key="index">
            <div class="relative">
                <div 
                    @click="showVideo(letter)"
                    class="letter-cell cursor-pointer bg-white border-2 border-gray-200 rounded-lg h-16 flex items-center justify-center text-2xl font-bold text-gray-800 relative hover:border-blue-400 hover:bg-blue-50"
                    :class="{'border-blue-500 bg-blue-50': currentVideo === letter.video}"
                >
                    <span x-text="letter.character"></span>
                </div>
            </div>
        </template>
    </div>

<template x-if="currentVideo">
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60" @click="closeVideo()" @keydown.escape.window="closeVideo()">
    <div class="rounded-lg shadow-lg max-w-2xl w-full relative" @click.stop>
      <div class="aspect-w-16 aspect-h-9">
        <iframe 
          x-bind:src="currentVideo" 
          class="w-full h-96 rounded-b-lg" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Vowels</h2>
                <div class="grid grid-cols-5 gap-2">
                    <template x-for="vowel in vowels">
                        <div 
                            @click="showVideo(vowel)"
                            class="letter-cell cursor-pointer bg-pink-50 border border-pink-200 rounded-md p-2 text-center font-medium text-pink-700 hover:bg-pink-100"
                        >
                            <span x-text="vowel.character"></span>
                        </div>
                    </template>
                </div>
            </div>
            
<div class="p-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Consonants</h2>
    <div class="grid grid-cols-5 gap-2">
        <template x-for="consonant in consonants">
            <div 
                @click="showVideo(consonant)"
                class="letter-cell cursor-pointer bg-indigo-50 border border-indigo-200 rounded-md p-2 text-center font-medium text-indigo-700 hover:bg-indigo-100"
            >
                <span x-text="consonant.character"></span>
            </div>
        </template>
    </div>
</div>
</div>

</div>
</div>