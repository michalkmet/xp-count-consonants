# Notes

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans
sorryBro:
Line 11: Try to replace input[i] with lowerInput[i]

Story 1: When user pass incorrect data, it should return exception
✅ UAT1.1 - When given number, it should return exception
✅ UAT1.2 - When given empty array, it should return exception

Story 2: When user pass empty string, it should return 0
✅ UAT2.1 - When given empty string, it should return 0

Story 3: When user pass one consonant
✅ UAT3.1 -  When user pass 'p', it should return 1
✅ UAT3.2 -  When user pass 'b', it should return 1
✅ UAT3.3 -  When user pass 'B', it should return 1

Story 4: When user pass one string, not consonant
✅ UAT4.1 - When user pass 'a', it should return 0
✅ UAT4.2 - When user pass '.', it should return 0
✅ UAT4.3 - When user pass '9', it should return 0
✅ UAT4.4 - When user pass ' ', it should return 0
✅ UAT4.5 - When user pass 'A', it should return 0

Story 5: When user pass string of length 2, both consonant
✅ UAT5.1 - When user pass 'kp', it should return 2
✅ UAT5.2 - When user pass 'cc', it should return 2

Story 6: When user pass string of length 2, one consonant, one not
✅ UAT6.1 - When user pass 'k0', it should return 1
UAT6.2 - When user pass 'ca', it should return 1
UAT6.3 - When user pass ' r', it should return 1
UAT6.4 - When user pass '9q', it should return 1

