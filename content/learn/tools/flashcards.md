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
{{< flashcard-demo-cards >}}

<!-- File Upload Section -->
{{< flashcard-upload >}}

<!-- Flashcard Display Section -->
{{< flashcard-display >}}

<!-- Navigation Controls -->
{{< flashcard-navigation >}}

<!-- Video Modal -->
{{< flashcard-video-modal >}}

<!-- Empty State -->
{{< flashcard-empty-state >}}

</div>
</div>
</div>

{{< share-buttons >}}