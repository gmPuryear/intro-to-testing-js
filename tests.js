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

// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof 'saHello').toBe('string');
    })
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return "Hello, Alex!"', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('sayHello("pat") should return "Hello, Pat!"', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('sayHello() should return "Hello, World!"', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return "Hello, World!"', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return "Hello, World!"', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('sayHello("") should return "Hello, World!"', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('sayHello(5) should return "Hello, World!"', function() {
        expect(sayHello(5)).toBe("Hello, World!");
    });
});

// Unit tests for isFive function
describe('isFive', function() {
    it('isFive should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('isFive should return a boolean no matter what input', function() {
        expect(isFive(5)).toBe(true);
    });
    it('isFive(typeof string) should return false', function() {
        expect(isFive(typeof isFive())).toBe(false);
    });
})

// Unit tests for isEven function
describe('isEven', function() {
    it("'isEven' should be a defined function", function(){
        expect(typeof isEven).toBe('function');
    });
    it("'isEven' should always return a boolean when executed", function () {
       expect(typeof isEven()).toBe('boolean');
    });
    it("'isEven(2)' to return true", function () {
        expect(isEven(2)).toBe(true);
    });
    it("'isEven(-4)' should return true", function () {
       expect(isEven(-4)).toBe(true);
    });
    it("'isEven(3)' should return false", function () {
        expect(isEven(3)).toBe(false);
    });
    it("'isEven('banana') should return false", function () {
        expect(isEven('banana')).toBe(false);
    });
    it("'isEven('8') should return true", function () {
        expect(isEven("8")).toBe(true);
    });
    it("'isEven(Infinity)' should return false", function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("isEven(true)' or 'isEven(false)' should return false", function () {
        expect(isEven(typeof 'boolean')).toBe(false);
    });

})





