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
    // it('should return the number -2.14 when passed the argument of the number -3.14', function () {
    //     expect(sayHello(-3.14)).toBe(-2.14);
    // });
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
});