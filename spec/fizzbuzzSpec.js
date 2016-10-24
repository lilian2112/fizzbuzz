describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function(){
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });


  });
});
