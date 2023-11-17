// import hello from "../hello";

describe('FizzBuzz tdd test', () => {

    beforeEach(() => {

    })

    it('should return the correct FizzBuzz array', () => {

        function fizzBuzz(n: number): string[] {
            const result: string[] = [];
            for (let i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result.push("FizzBuzz");
                } else if (i % 3 === 0) {
                    result.push("Fizz");
                } else if (i % 5 === 0) {
                    result.push("Buzz");
                } else {
                    result.push(i.toString());
                }
            }
            return result;
        }

        // Test
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
        expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    });
});
