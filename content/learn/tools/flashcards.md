---
title: "Flashcards"
description: "Practice Vietnamese vocabulary with flashcards."
breadcrumbs: false
excludeSearch: true
share_platforms:
  - platform: facebook
    url: "https://www.facebook.com/sharer/sharer.php?u="
    icon: facebook
  - platform: X
    url: "https://x.com/intent/tweet?url="
    icon: x-twitter
  - platform: Linkedin
    url: "https://www.linkedin.com/sharing/share-offsite/?url="
    icon: linkedin
---

<div class="min-h-screen">
<div x-data="flashcardApp()" class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-center text-blue-700 mb-2">Interactive Flashcards</h1>
            <p class="text-center text-gray-600 mb-8">Choose a demo category or upload your JSON file to start learning</p>
            
<!-- Demo Cards Section -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
    <div @click="loadDemo('food')" class="demo-card  rounded-lg shadow-md p-6 text-center cursor-pointer">
        <i class="fas fa-utensils text-3xl text-blue-500 mb-2"></i>
        <h3 class="text-lg font-semibold text-gray-800">Food</h3>
        <p class="text-sm text-gray-500">Learn about different foods</p>
    </div>
    <div @click="loadDemo('animals')" class="demo-card  rounded-lg shadow-md p-6 text-center cursor-pointer">
        <i class="fas fa-paw text-3xl text-blue-500 mb-2"></i>
        <h3 class="text-lg font-semibold text-gray-800">Animals</h3>
        <p class="text-sm text-gray-500">Explore the animal kingdom</p>
    </div>
    <div @click="loadDemo('geography')" class="demo-card  rounded-lg shadow-md p-6 text-center cursor-pointer">
        <i class="fas fa-globe text-3xl text-blue-500 mb-2"></i>
        <h3 class="text-lg font-semibold text-gray-800">Geography</h3>
        <p class="text-sm text-gray-500">Discover world geography</p>
    </div>
</div>

<!-- File Upload Section -->
<div class="rounded-lg p-6 mb-8">
    <div x-data="{ showExample: false }" class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8">
        <i class="fas fa-file-upload text-4xl text-blue-500 mb-4"></i>
        <h2 class="text-xl font-semibold mb-2">Upload Flashcards JSON</h2>
        <p class="text-gray-500 mb-4">Your file should contain an array of flashcards with front text, image, audio, video, and back text</p>
        <div class="flex space-x-4">
            <input type="file" id="fileInput" accept=".json" @change="loadFile" class="hidden">
            <button 
                @click="$refs.fileInput.click()" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg cursor-pointer transition duration-200"
                x-ref="fileInput"
            >
                Upload File
            </button>
            <button 
                @click="showExample = !showExample" 
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200"
            >
                Example File Structure
            </button>
        </div>
        <p x-show="fileName" class="mt-4 text-sm text-gray-600">Selected: <span x-text="fileName" class="font-medium"></span></p>

<!-- Example JSON Structure -->
<div x-show="showExample" x-transition class="mt-6 w-full bg-gray-50 p-4 rounded-lg">
    <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold text-gray-800">Example JSON Format</h3>
        <button 
            @click="navigator.clipboard.writeText(JSON.stringify(exampleJson, null, 2))"
            class="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded-lg transition duration-200"
        >
            Copy
        </button>
    </div>
    <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"><code x-text="JSON.stringify(exampleJson, null, 2)"></code></pre>
</div>
</div>

<!-- Flashcard Display Section -->
<div x-show="flashcards.length > 0" x-transition class="fade-in mt-4">
    <div class="flex justify-between items-center mb-6">
        <div class="text-gray-700">
            <span x-text="currentIndex + 1"></span> of <span x-text="flashcards.length"></span>
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
    <button @click="nextCard" :disabled="currentIndex === flashcards.length - 1" 
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
<div x-show="flashcards.length === 0" class="text-center py-12">
    <i class="fas fa-lightbulb text-5xl text-blue-300 mb-4"></i>
    <h3 class="text-xl font-medium text-gray-700 mb-2">No Flashcards Loaded</h3>
    <p class="text-gray-500">Choose a demo category or upload a JSON file to start learning with interactive flashcards</p>
</div>
</div>
</div>
</div>

{{< share-buttons >}}