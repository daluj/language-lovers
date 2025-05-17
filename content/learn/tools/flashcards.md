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

<!-- File Upload Section -->
{{< flashcard-upload >}}

<!-- Flashcard Display Section -->
{{< flashcard-display >}}

<!-- Video Modal -->
{{< flashcard-video-modal >}}

<!-- Empty State -->
{{< flashcard-empty-state >}}

</div>
</div>
</div>

{{< share-buttons >}}