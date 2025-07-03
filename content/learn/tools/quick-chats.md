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

<div class="min-h-screen">
    <div x-data="chatApp()" class="container mx-auto px-4">
        <div class="grid grid-cols-1 gap-8 h-full">
            <!-- Main Chat Area with Agents at Bottom -->
            <div class="space-y-6 h-full">
                <div class="">
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'planner' }" 
                        @click="selectAgent('planner')">
                        <h3 class="font-medium">Planner Agent</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'phone' }" 
                        @click="selectAgent('phone')">
                        <h3 class="font-medium">Phone Agent</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'video' }" 
                        @click="selectAgent('video')">
                        <h3 class="font-medium">Video Agent</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'research' }" 
                        @click="selectAgent('research')">
                        <h3 class="font-medium">Research Agent</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'data' }" 
                        @click="selectAgent('data')">
                        <h3 class="font-medium">Data Analysis</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'web' }" 
                        @click="selectAgent('web')">
                        <h3 class="font-medium">Web Agent</h3>
                  </div>
                  <div class="agent-card bg-white border border-gray-200 rounded-lg p-4 transition cursor-pointer hover:border-indigo-300" 
                        :class="{ 'selected-agent': selectedAgent === 'content' }" 
                        @click="selectAgent('content')">
                        <h3 class="font-medium">Content Synthesis</h3>
                  </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-6 space-y-4" id="chat-messages">
                        <template x-for="message in getAgentMessages()" :key="message.id">
                            <div class="flex items-start space-x-3">
                                <div :class="message.sender === 'A' ? 'bg-blue-50 message-bubble' : 'bg-gray-50 message-bubble'">
                                    <p class="text-sm font-medium" x-text="message.name"></p><span class="text-sm text-gray-500" x-text="message.description"></span>
                                    <p class="text-gray-800 mt-1" x-text="message.text"></p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{<share-buttons>}}