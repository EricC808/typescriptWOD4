"use strict";
/**
 * Problem with searching for the word "I":
 * Searching for the word "I" can be problematic because it is a very common standalone letter,
 * and can appear within other words as a substring (e.g., "I'm", "inside").
 * To correctly identify instances of "I" as a separate word, you would need to check for word boundaries.
 */
// Function to check if the word "yeah" (case-insensitive) appears in any lyric
function hasYeah(lyrics) {
    return lyrics.some(line => line.toLowerCase().includes("yeah"));
}
// Function to count occurrences of the word "yeah" (case-insensitive) in all lyrics
function numYeahs(lyrics) {
    return lyrics.reduce((count, line) => count + (line.toLowerCase().split("yeah").length - 1), 0);
}
// Test cases
console.log(hasYeah(bieberBaby)); // Expected output: true or false
console.log(hasYeah(bieberBaby.slice(0, 4))); // Expected output: true or false
console.log(numYeahs(bieberBaby)); // Expected output: Number of "yeah" occurrences
console.log(numYeahs(bieberBaby.slice(10, 15))); // Expected output: Number of "yeah" occurrences in the slice
