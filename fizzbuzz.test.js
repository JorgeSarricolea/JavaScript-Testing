// We need to import the document from "fizzbuzz.js"
const fizzbuzz = require('./fizzbuzz');

// Check if the entered number is multiple of 3 and 5
describe('fizzbuzz', () => {
    test('Should print fizzbuzz if they recieve a multiple of 3 and 5', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    });
});

// Check if the entered number is 3 or a multiple of 3
describe('fizzbuzz', () => {
    test('Should print fizz if they recieve 3 or a multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(3) || fizzbuzz(6);
        expect(expected).toBe(result);
    });
});

// Check if the entered number is 5 or a multiple of 5
describe('fizzbuzz', () => {
    test('Should print buzz if they recieve 5 or a multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(5) || fizzbuzz(10);
        expect(expected).toBe(result);
    });
});
