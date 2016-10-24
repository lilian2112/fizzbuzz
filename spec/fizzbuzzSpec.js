describe('Fizzbuzz', function() {
  var fizzbuzz;

  // beforeEach(function() {
  //   fizzbuzz = new Fizzbuzz();
  // });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual("Fizz");
    });

    it('not divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(4)).toEqual(4);
    });

    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe("Buzz");
    });

  });
});
