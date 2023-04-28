// We need to import the document from "example.js"
const example = require('./example');

// Check if the received number is 1 (Test)
describe('example', () => {
    test('Should print 1 if they recieve 1', () => {
        const expected = 1;
        const result = example(1);
        expect(expected).toBe(result);
    });
});