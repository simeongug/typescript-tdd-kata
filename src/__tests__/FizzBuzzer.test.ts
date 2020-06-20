import FizzBuzzer from "../FizzBuzzer";

describe('FizzBuzzer tests', () => {
    it('should return 0 if passed 0', () => {
        expect(FizzBuzzer.result(0)).toEqual(0)
    });
});