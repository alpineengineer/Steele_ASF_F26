const isPalindrome = require('../src/palindromeTester')

describe('isPalindrome', () => {

    test('isPalindrome accepts exactly one argument', () => {
        expect(isPalindrome.length).toBe(1);
    })

    describe('valid palindromes', () => {

        test('returns true for bob', () => {
            expect(isPalindrome("bob")).toBe(true)
        })

        test('returns true for racecar regardless of capitalization', () => {
            expect(isPalindrome("Racecar")).toBe(true)
        })

    });

    describe('non-palindromes', () => {

        test('returns false for apple', () => {
            expect(isPalindrome("apple")).toBe(false)
        })

    });

    describe('punctuation and spacing test', () => {

        test("returns true for Madam I'm Adam.", () => {
            expect(isPalindrome("Madam I'm Adam.")).toBe(true)
        })

    });

    describe('invalid input types', () => {

        test('returns false for a number', () => {
            expect(isPalindrome(12321)).toBe(false)
        })

        test('returns false for arrays', () => {
            expect(isPalindrome(["racecar"])).toBe(false)
        })
        test('returns false for boolean', () => {
            expect(isPalindrome(true)).toBe(false)
        })
        test('returns false for objects', () => {
            expect(isPalindrome({word: "racecar"})).toBe(false)
        })
        test('returns false for null', () => {
            expect(isPalindrome(null)).toBe(false)
        })
        test('returns false for undefined', () => {
            expect(isPalindrome(undefined)).toBe(false)
        })

    });

    describe('edge cases', () => {

        test('returns true for an empty string', () => {
            expect(isPalindrome("")).toBe(true)
        })

        test('returns true for single characters', () => {
            expect(isPalindrome("A")).toBe(true)
        })

    });

    describe('very long inputs', () => {

        test('handles a very long palindrome(200 words)', () => {
             const longPalindrome = "madam anna civic level radar refer rotor kayak racecar reviver redder noon stats tenet wow mom dad pop eye nun madam anna civic level radar refer rotor kayak racecar reviver redder noon stats tenet wow mom dad pop eye nun madam anna civic level radar refer rotor kayak racecar reviver redder noon stats tenet wow mom dad pop eye nun madam anna civic level radar refer rotor kayak racecar reviver redder noon stats tenet wow mom dad pop eye nun madam anna civic level radar refer rotor kayak racecar reviver redder noon stats tenet wow mom dad pop eye nun nun eye pop dad mom wow tenet stats noon redder reviver racecar kayak rotor refer radar level civic anna madam nun eye pop dad mom wow tenet stats noon redder reviver racecar kayak rotor refer radar level civic anna madam nun eye pop dad mom wow tenet stats noon redder reviver racecar kayak rotor refer radar level civic anna madam nun eye pop dad mom wow tenet stats noon redder reviver racecar kayak rotor refer radar level civic anna madam nun eye pop dad mom wow tenet stats noon redder reviver racecar kayak rotor refer radar level civic anna madam";
            expect(isPalindrome(longPalindrome)).toBe(true)
        })
        test('handles a very long non-palindrome', () => {
            const longNonPalindrome =
                "a".repeat(9999) + "b";

            expect(isPalindrome(longNonPalindrome)).toBe(false);
        });


    });

});