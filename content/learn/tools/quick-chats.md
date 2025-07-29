---
title: "Quick Chats"
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

<div class="min-h-screen" x-data="chatApp()">
<div class="flex flex-col h-full max-w-4xl mx-auto shadow-lg">
<!-- Chat area -->
<div class="flex-1 overflow-hidden flex flex-col">
    <!-- Participants info -->
    <div class="p-3 border-b flex justify-between items-center">
        <div class="flex items-center space-x-3">
            <div class="relative">
                <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">A</div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <div>
                <div class="font-medium">Party A</div>
                <div class="text-xs text-gray-500">Customer Support</div>
            </div>
        </div>
        <div class="flex items-center space-x-3">
            <div>
                <div class="font-medium text-right">Party B</div>
                <div class="text-xs text-gray-500 text-right">You</div>
            </div>
            <div class="relative">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">B</div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
        </div>
    </div>
    
<!-- Messages container -->
<div class="flex-1 overflow-y-auto p-4 space-y-4 chat-container" x-ref="messagesContainer">
    <template x-for="message in filteredMessages()" :key="message.id">
        <div :class="{
            'flex justify-end': message.sender === 'B',
            'flex justify-start': message.sender === 'A'
        }">
            <div :class="{
                'bg-indigo-100 text-indigo-900 rounded-l-lg rounded-br-lg': message.sender === 'A',
                'bg-blue-600 text-white rounded-r-lg rounded-bl-lg': message.sender === 'B',
                'max-w-xs md:max-w-md lg:max-w-lg px-4 py-2': true
            }">
                <div x-text="message.text"></div>
                <div class="text-xs mt-1 flex justify-end items-center space-x-1" :class="{
                    'text-indigo-500': message.sender === 'A',
                    'text-blue-200': message.sender === 'B'
                }">
                    <span x-text="formatTime(message.timestamp)"></span>
                    <template x-if="message.sender === 'B'">
                        <span x-show="message.read" class="text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </template>
                </div>
            </div>
        </div>
    </template>
</div>

<!-- Categories selector (where message input would normally be) -->
<div class="p-4 border-t">
    <div class="mb-2 text-sm font-medium text-gray-700">Filter by category:</div>
    <div class="mt-2 flex space-x-3 overflow-x-auto pb-2">
        <template x-for="category in categories" :key="category">
            <div 
                @click="selectCategory(category)"
                :class="{
                    'mt-2 category-card active': selectedCategory === category,
                    'mt-2 category-card': selectedCategory !== category,
                    'mt-2 border border-gray-200 rounded-lg p-3 cursor-pointer flex-shrink-0': true
                }"
            >
                <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center" 
                            :class="{
                                'bg-indigo-100 text-indigo-600': selectedCategory !== category,
                                'bg-indigo-600 text-white': selectedCategory === category
                            }">
                        <span x-text="getCategoryEmoji(category)"></span>
                    </div>
                    <span x-text="category" class="capitalize"></span>
                </div>
            </div>
        </template>
    </div>
</div>
</div>
</div>
</div>

{{<share-buttons>}}