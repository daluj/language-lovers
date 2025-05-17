---
title: "Fluency Speaking Tool"
description: "Practice your Vietnamese speaking skills with images or topics"
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

Practice your speaking skills with images or topics

<div class="min-h-screen">
<div x-data="speakingTool()" x-init="init()" class="container mx-auto px-4 py-8 max-w-4xl">
<div class="mb-8">
    <!-- Tabs -->
    <div class="flex border-b border-gray-200">
        <button 
            @click="activeTab = 'images'"
            :class="{'bg-blue-50 text-blue-600': activeTab === 'images', 'text-gray-600 hover:text-gray-800': activeTab !== 'images'}"
            class="flex-1 py-4 px-6 text-center font-medium transition-colors">
            <i class="fas fa-image mr-2"></i> Images
        </button>
        <button 
            @click="activeTab = 'topics'"
            :class="{'bg-blue-50 text-blue-600': activeTab === 'topics', 'text-gray-600 hover:text-gray-800': activeTab !== 'topics'}"
            class="flex-1 py-4 px-6 text-center font-medium transition-colors">
            <i class="fas fa-list-ul mr-2"></i> Topics
        </button>
    </div>

<!-- Tab Content -->
<div class="p-6">
<!-- Images Tab -->
<div x-show="activeTab === 'images'" x-transition:enter="fade-enter-active" x-transition:leave="fade-leave-active">
<div class="mb-6">
    <div class="flex items-center justify-center w-full" x-show="images.length === 0">
        <label class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer transition-colors">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <i class="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
                <p class="mb-2 text-sm text-gray-500">
                    <span class="font-semibold">Click to Upload Image</span>
                </p>
                <p class="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB each)</p>
            </div>
            <input 
                type="file" 
                class="hidden" 
                multiple 
                accept="image/*" 
                @change="handleImageUpload"
            >
        </label>
    </div>
</div>

<div class="mb-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" x-show="images.length > 0">
        <template x-for="(image, index) in images" :key="index">
            <div class="relative group">
                <img :src="image.url" alt="Speaking prompt" class="w-full h-32 object-cover rounded-lg">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <button @click="removeImage(index)" class="text-white hover:text-red-400 transition-colors">
                        <i class="fas fa-trash">Remove</i>
                    </button>
                </div>
            </div>
        </template>
    </div>
</div>
</div>

<!-- Topics Tab -->
<div x-show="activeTab === 'topics'" x-transition:enter="fade-enter-active" x-transition:leave="fade-leave-active">
<div class="mb-6" x-show="showInput">
    <div class="flex">
        <input 
            type="text" 
            x-model="newTopic" 
            @keyup.enter="addTopic"
            placeholder="Enter a topic and press Enter" 
            class="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
        >
        <button 
            @click="addTopic"
            class="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
        >
            Add
        </button>
    </div>
</div>

<div class="mb-4" x-show="!showInput">
    <template x-if="topics.length === 0">
        <div class="text-center py-8 rounded-lg">
            <i class="fas fa-list-ul text-gray-300 text-4xl mb-2"></i>
            <p class="text-gray-500">No topics added yet</p>
        </div>
    </template>
    <ul class="space-y-2" x-show="topics.length > 0">
        <template x-for="(topic, index) in topics" :key="index">
            <li class="flex items-center justify-between px-4 py-3 rounded-lg">
                <span x-text="topic"></span>
                <button @click="removeTopic(index)" class="hover:text-red-500 transition-colors">
                    <i class="fas fa-times">Remove</i>
                </button>
            </li>
        </template>
    </ul>
</div>
</div>
</div>
</div>

<!-- Timer Section -->
<div class="mb-8">
    <div class="p-6">
        <h2 class="text-xl font-bold text-gray-800 mb-6">Timer Settings</h2>
        
<div class="flex justify-center space-x-4 mb-8">
    <button 
        @click="setTimer(4)"
        :class="{'timer-active bg-blue-600 text-white': selectedTime === 4, 'bg-gray-100 text-gray-800': selectedTime !== 4}"
        class="flex flex-col items-center justify-center w-20 h-20 rounded-full transition-all"
    >
        <span class="text-xl font-bold" x-text="4"></span>
        <span class="text-xs">minutes</span>
    </button>
    <button 
        @click="setTimer(3)"
        :class="{'timer-active bg-blue-600 text-white': selectedTime === 3, 'bg-gray-100 text-gray-800': selectedTime !== 3}"
        class="flex flex-col items-center justify-center w-20 h-20 rounded-full transition-all"
    >
        <span class="text-xl font-bold" x-text="3"></span>
        <span class="text-xs">minutes</span>
    </button>
    <button 
        @click="setTimer(2)"
        :class="{'timer-active bg-blue-600 text-white': selectedTime === 2, 'bg-gray-100 text-gray-800': selectedTime !== 2}"
        class="flex flex-col items-center justify-center w-20 h-20 rounded-full transition-all"
    >
        <span class="text-xl font-bold" x-text="2"></span>
        <span class="text-xs">minutes</span>
    </button>
</div>

<!-- Toggle for Audio Recording -->
<div class="flex items-center justify-center mb-8">
    <label class="flex items-center space-x-3">
        <input type="checkbox" x-model="recordAudio" class="form-checkbox h-5 w-5 text-blue-600">
        <span class="text-gray-700">Record Audio</span>
    </label>
</div>

<!-- Timer Display -->
<div class="flex flex-col items-center">
    <div class="relative w-48 h-48 mb-6">
        <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle 
                class="text-gray-200" 
                stroke-width="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50"
            />
            <circle 
                class="progress-ring__circle text-blue-600" 
                stroke-width="8" 
                stroke-linecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="circumference - (timeLeft / (selectedTime * 60)) * circumference"
            />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center flex-col">
            <span x-text="formatTime(timeLeft)" class="text-4xl font-bold text-gray-800"></span>
            <span x-show="isRunning" class="text-blue-600 text-sm">Speaking...</span>
            <span x-show="!isRunning && !isComplete" class="text-gray-500 text-sm">Ready</span>
            <span x-show="isComplete" class="text-green-600 text-sm">Complete!</span>
        </div>
    </div>

<div class="flex space-x-4">
    <button 
        @click="startTimer"
        x-show="!isRunning"
        :disabled="(activeTab === 'images' && images.length === 0) || (activeTab === 'topics' && topics.length === 0)"
        :class="{'bg-blue-600 hover:bg-blue-700': !isRunning, 'bg-gray-300 cursor-not-allowed': (activeTab === 'images' && images.length === 0) || (activeTab === 'topics' && topics.length === 0)}"
        class="px-6 py-2 text-white rounded-lg transition-colors"
    >
        Start
    </button>
    <button 
        @click="pauseTimer"
        x-show="isRunning && !isPaused"
        class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">Pause</button>
    </button>
    <button 
        @click="resumeTimer"
        x-show="isPaused"
        class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Resume</button>
    </button>
    <button 
        @click="resetTimer"
        class="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
    >
        Reset
    </button>
</div>
</div>
</div>
</div>

<!-- Current Prompt -->
<div x-show="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
        <div class="p-6">
            <template x-if="activeTab === 'images' && images.length > 0">
                <div class="text-center">
                    <p class="text-gray-600">Describe what you see in this image</p>
                    <img :src="currentImage" alt="Speaking prompt" class="max-h-64 mx-auto mb-4 rounded-lg">
                </div>
            </template>
            <template x-if="activeTab === 'topics' && topics.length > 0">
                <div class="text-center">
                    <p class="text-gray-600">Speak about this topic for <span x-text="selectedTime"></span> minutes</p>
                    <p x-text="currentTopic" class="text-2xl font-bold text-blue-600 mb-4"></p>
                </div>
            </template>
            <div class="flex justify-end mt-4">
                <span x-text="formatTime(timeLeft)" class="text-gray-600 text-sm mr-auto"></span>
                <button @click="pauseTimer" x-show="isRunning && !isPaused" class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">Pause</button>
                <button @click="resumeTimer" x-show="isPaused" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Resume</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>

{{< share-buttons >}}
