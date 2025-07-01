---
title: The Alphabet
description: An overview of the Vietnamese alphabet, vowels, and consonants for learning Vietnamese.
weight: 1
---

## The Vietnamese Alphabet

The Vietnamese alphabet is the foundation of the language, consisting of **29 letters** with a rich system of vowels and consonants. This guide breaks down the phonetics to aid your learning journey.

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

<div class="p-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Compound Consonants</h2>
    <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
        <template x-for="consonant in compoundConsonants">
            <div 
                @click="showVideo(consonant)"
                class="letter-cell cursor-pointer bg-white border-2 border-gray-200 rounded-lg h-16 flex items-center justify-center text-2xl font-bold text-gray-800 relative hover:border-blue-400 hover:bg-blue-50"
            >
                <span x-text="consonant.character"></span>
            </div>
        </template>
    </div>
</div>
</div>

## Vowel System

The Vietnamese language has **11 simple vowels** and **12 distinct vowel letters**, each with unique phonemes critical for accurate pronunciation.

### Simple Vowels
The 11 simple vowels are:
- **a, ă, â, e, ê, i, o, ô, ơ, u, ư, y**

#### Understanding the Three 'A' Vowels
Vietnamese has three distinct 'a' sounds, each with a unique pronunciation:

| Vowel | Pronunciation | Example Word |
|-------|---------------|--------------|
| a     | /a/           | An           |
| ă     | /a/           | Ăn           |
| â     | /ə/           | Ân           |

### Vowel Series
The vowels are grouped into series based on their phonetic characteristics:

- **E Series**: e, ê
- **O Series**: o, ô, ơ
- **U Series**: u, ư
- **I and Y**:
  - **i**: Known as *i ngắn* (short i)
  - **y**: Known as *y dài* (long y)
  
> **Note**: The letters *i* and *y* have distinct pronunciations despite their visual similarity. Understanding this distinction is crucial for accurate pronunciation.

## Consonant System

Vietnamese consonants are divided into **simple** and **compound** consonants, with specific roles as initial or final sounds in syllables.

In Vietnamese phonetics, certain consonants share similar sounds but differ in their spelling based on the vowels that follow them:
- "c" and "k" both produce the same hard [k] sound.
- "g" and "gh" both produce the same [g] sound.
- "ng" and "ngh" both produce the nasal [n] sound (like the "ng" in "sing").

However, their usage depends on the vowel that follows:
- "k", "gh" and "ngh" are only used **before the front vowels: "i", "y", "e" and "ê"**
    Example: khi, ghế, nghĩ
- "c", "g" and "ng" are used **before all the other vowels: "a", "ă", "â", "o", "ô", "ơ", and "u"**
    Example: cá, gà, ngô

> **Note**: This rule helps maintain clarity in pronunciation and spelling, especially for learners navigating Vietnamese’s phonetic system.

### Simple Consonants
There are **16 simple consonants**: b, d, đ, g, h, k, l, m, n, p, q, r, s, t, v, x.

#### Initial Simple Consonants
The following consonants can appear at the start of a syllable:

| Consonant | Example Word | Meaning       |
|-----------|--------------|---------------|
| **b**     | bạn, bận, ba | friend, busy, dad/three |
| **m**     | mẹ, mèo, mở  | mom, cat, open |
| **v**     | và, về, vâng  | and, back, yes (formal) |
| **t**     | tôi, tám, tìm | I, eight, find |
| **đ**     | đi, đó, đau   | go, that, pain |
| **x**     | xe, xấu, xạo  | vehicle, ugly, liar |
| **l**     | lớn, làm, là  | big, work, am/is/are |
| **n**     | no, nam, nữ   | full, male, female |
| **s**     | sáu, sau, sợ  | six, after, scared |
| **r**     | rồi, rủ, rán  | already, invite, deep fried |
| **h**     | ho, hè, hứa   | cough, summer, promise |

#### Final Simple Consonants
These consonants can appear at the end of a syllable:

| Consonant | Example Word | Meaning         |
|-----------|--------------|-----------------|
| **m**     | tám, tăm, cầm | eight, toothpick, hold |
| **n**     | ăn, bán, xuân | eat, sell, spring |
| **p**     | họp, bóp, hợp | meeting, wallet, suitable |
| **t**     | tốt, hết, sốt | good, over, fever |
| **c**     | học, đọc, khóc | study, read, cry |

### Compound Consonants
There are **11 compound consonants**: gh, ph, ch, tr, qu, gi, th, kh, nh, ng, ngh.

#### Initial Compound Consonants
These consonants appear at the start of a syllable:

| Consonant | Example Word | Meaning         |
|-----------|--------------|-----------------|
| **ph**    | phim, phở, phòng | film, flat noodle, room |
| **th**    | thích, thêm, thấp | like, extra, short |
| **ng**    | ngủ, ngồi, người  | sleep, sit, people |
| **ngh**   | nghe, nghĩ, nghề  | listen, think, job |
| **tr**    | trưa, trong, trà  | afternoon, in, tea |
| **ch**    | chợ, cho, chậm    | market, give/for, slow |
| **nh**    | nhỏ, nhà, nhớ     | small, house, miss/remember |
| **kh**    | khi, khó, không   | when, difficult, no |

> **Tip**: The consonants *gh* and *ngh* are pronounced similarly to *g* and *ng* but are used to differentiate spelling in dictation.

#### Final Compound Consonants
These consonants appear at the end of a syllable:

| Consonant | Example Word | Meaning         |
|-----------|--------------|-----------------|
| **nh**    | anh, bánh, rảnh | older brother, cake, free (time) |
| **ng**    | không, tháng, cảng | no, month, harbor |
| **ch**    | sách, sạch, mạch | book, clean, vein |

## Pronunciation Guide by Articulation

To help with pronunciation, consonants can be categorized by where they are articulated in the mouth:

| Articulation Point       | Consonants                 |
|--------------------------|----------------------------|
| **Lips**                 | b, m, p, ph, v             |
| **Tongue (behind or between teeth)** | t, đ, n, x/s, d/gi, r, l, th |
| **Back of mouth**        | ch/tr, nh                  |
| **Back of throat**       | k/c/q, ng/ngh, kh, g/gh    |
| **Natural**              | h                          |