// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function (){
    it('should be a defined function', function () {
        expect (typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed Jane as an argument', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when passed Alex as an argument', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when passed Pat as an argument', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when passed the argument of no input', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of boolean true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed the argument of boolean false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
    // it('should return the number -43 when passed the argument of the num -44', function () {
    //     expect(sayHello(33)).toBe(34);
    // });
    // it("should return NaN when passed the string 'Hakeem Olajuwon.'", function () {
    //     expect(isNaN(sayHello('Hakeem Olajuwon'))).toBe(true);
    // });
    // it("should return NaN when passed the boolean of true", function () {
    //     expect(isNaN(sayHello(true))).toBe(NaN);
    // });
    // it("should return NaN when passed the array [1, 2, 3]", function () {
    //     expect(Number.isNaN(sayHello([1, 2, 3]))).toBe(true);
    // });
describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean no matter the input type', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return boolean true when passed the number 5 as an argument', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return boolean false when passed string of "5" as an argument', function () {
        expect(isFive("5")).toBe(false);
    });
});
describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passing the number 2 as an argument', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passing the number -4 as an argument', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passing the number 3 as an argument', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passing the string "banana" as an argument', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passing the number 8 as an argument', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passing Infinity as an argument', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passing the boolean value of true or false', function () {
        expect(isEven(false && true)).toBe(false);
    });
    it('should return false when passed an empty input ()', function () {
        expect(isEven()).toBe(false);
    });
});
describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean no matter the input', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a" as an argument', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A" as an argument', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" as an argument', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4 as an argument', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed the string of "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed an empty parameter "isVowel()"', function () {
        expect(isVowel()).toBe(false);
    });
});
describe("add", function () {
    it('should return 5 when passed 2 and 3 as arguments', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed -3 and -9 as arguments', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed string of "5" and 6 as arguments', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed string of "-4" and "10" as arguments', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when passed string of "banana" and "split" as arguments', function () {
        expect(Number.isNaN(add("banana", "split"))).toBe(true);
    });
    it('should return NaN when passed 2 and "apples" as arguments', function () {
        expect(Number.isNaN(add(2, "apples"))).toBe(true);
    });
    it('should return NaN when passed no parameters', function () {
        expect(Number.isNaN(add())).toBe(true);
    });
});