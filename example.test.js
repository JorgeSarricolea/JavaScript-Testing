const example = require('./example');

describe('example', () => {
    test('Should print 1 if they recieve 1', () => {
        const expected = 1;
        const result = example(1);
        expect(expected).toBe(result);
    });
});