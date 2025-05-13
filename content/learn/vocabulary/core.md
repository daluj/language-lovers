---
title: Core Vocabulary
breadcrumbs: false
weight: 1
---

Para esta seccion, en el front del flashcard, ponemos la imagen. En el back del flashcard, ponemos las palabras.

<div class="min-h-screen">
<div x-data="flashcardApp()" class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto">

<!-- Flashcard Display Section -->
<div x-show="exampleJson.length > 0" x-transition class="fade-in mt-4">
    <div class="flex justify-between items-center mb-6">
        <div class="text-gray-700">
            <span x-text="currentIndex + 1"></span> of <span x-text="exampleJson.length"></span>
        </div>
        <div class="flex space-x-2">
            <button @click="shuffleFlashcards" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition duration-200">
                <i class="fas fa-random mr-2"></i>Shuffle
            </button>
            <button @click="resetFlashcards" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition duration-200">
                <i class="fas fa-redo mr-2"></i>Reset
            </button>
        </div>
    </div>
    
<!-- Flashcard -->
<div class="flashcard  rounded-xl shadow-lg overflow-hidden" :class="{ 'flipped': isFlipped }" @click="toggleFlip">
    <div class="flashcard-inner">
        <!-- Front of the card -->
        <div class="flashcard-front p-6">
            <div class="flex justify-between items-start mb-4">
                <div class="text-sm text-blue-600 font-medium">Question</div>
                <div class="flex space-x-2">
                    <button x-show="currentFlashcard.audio" @click.stop="playAudio(currentFlashcard.audio)" class="media-button bg-blue-100 text-blue-600 p-2 rounded-full">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <button x-show="currentFlashcard.video" @click.stop="showVideo(currentFlashcard.video)" class="media-button bg-blue-100 text-blue-600 p-2 rounded-full">
                        <i class="fas fa-video"></i>
                    </button>
                </div>
            </div>
            
<div class="flex flex-col items-center justify-center">
    <template x-if="currentFlashcard.frontText">
        <div class="text-xl font-medium text-center text-gray-800" x-text="currentFlashcard.frontText"></div>
    </template>
    <template x-if="currentFlashcard.image">
        <img :src="currentFlashcard.image" alt="Flashcard image" class="max-h-72 w-auto rounded-lg mb-4 shadow-sm">
    </template>
    <template x-if="!currentFlashcard.frontText && !currentFlashcard.image">
        <div class="text-gray-500 italic">No content on front side</div>
    </template>
</div>

<div class="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
    Click to flip
</div>
</div>

<!-- Back of the card -->
<div class="flashcard-back bg-blue-50 p-6">
<div class="text-sm text-blue-600 font-medium mb-4">Answer</div>
<div class="h-full flex items-center justify-center">
    <div class="text-lg text-gray-700" x-text="currentFlashcard.backText"></div>
</div>
<div class="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
    Click to flip back
</div>
</div>
</div>
</div>

<!-- Navigation Controls -->
<div class="flex justify-between mt-6">
    <button @click="prevCard" :disabled="currentIndex === 0" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:bg-blue-300 transition duration-200">
        <i class="fas fa-arrow-left mr-2"></i>Previous
    </button>
    <button @click="nextCard" :disabled="currentIndex === exampleJson.length - 1" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:bg-blue-300 transition duration-200">
        Next<i class="fas fa-arrow-right ml-2"></i>
    </button>
</div>
</div>

<!-- Video Modal -->
<div x-show="showVideoModal" class="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60" @click="closeVideoModal()" @keydown.escape.window="closeVideoModal()">
    <div class="rounded-lg shadow-lg max-w-2xl w-full relative" @click.stop>
        <div class="aspect-w-16 aspect-h-9">
            <iframe :src="currentVideoUrl" class="w-full h-96" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
</div>

<!-- Empty State -->
<div x-show="exampleJson.length === 0" class="text-center py-12">
    <i class="fas fa-lightbulb text-5xl text-blue-300 mb-4"></i>
    <h3 class="text-xl font-medium text-gray-700 mb-2">No Flashcards Loaded</h3>
</div>
</div>
</div>
</div>