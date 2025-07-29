---
title: "Diphthongs"
weight: 5
next: /learn/pronunciation/tonal-system
---

{{< image src="images/sound-system/diphthongs.png" alt="Tones System" widths="400 800 1200" quality="80" isLCP=true" >}}

Click on any diphthong to see example words:

<div x-data="vietnameseDiphthongs" class="max-w-4xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        <template x-for="diphthong in diphthongs">
            <div 
                @click="selectDiphthong(diphthong)"
                class="cursor-pointer border-2 border-gray-200 rounded-lg p-4 text-center font-medium text-gray-800 hover:border-blue-400 hover:bg-blue-50"
                :class="{'border-blue-500 bg-blue-50': selectedDiphthong === diphthong}"
            >
                <span x-text="diphthong.character" class="text-lg font-bold"></span>
            </div>
        </template>
    </div>

  <template x-if="showWords && selectedDiphthong">
      <div class="mt-8 p-6 rounded-lg">
          <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold" x-text="'Words with ' + selectedDiphthong.character"></h3>
              <button @click="closeWords()" class="text-gray-500 hover:text-gray-700">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <template x-for="wordObj in selectedDiphthong.words">
                  <div class="p-3 rounded border">
                      <div class="font-semibold text-blue-600" x-text="wordObj.word"></div>
                      <div class="text-sm text-gray-600" x-text="wordObj.meaning"></div>
                  </div>
              </template>
          </div>
      </div>
  </template>
</div>