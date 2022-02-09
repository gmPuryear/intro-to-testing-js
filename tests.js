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
    })
    it('sayHello(5) should return "Hello, World!"', function() {
        expect(sayHello(5)).toBe("Hello, World!");
    })
})

