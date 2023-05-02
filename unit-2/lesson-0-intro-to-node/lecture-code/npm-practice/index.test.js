const { divide } = require('./index');

describe('Divide Tests', () => {
    it('divides two numbers', () => {
        expect(divide(6, 3)).toEqual(2);
    });

    it('returns NaN only if divided by zero', () => {
        expect(divide(0, 6)).toEqual(0);
        expect(divide(6, 0)).toEqual(NaN);
        expect(divide(0, 0)).toEqual(NaN);
    });
});
