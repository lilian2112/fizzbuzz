function Fizzbuzz() {
};
 Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    if (number%3 === 0) {
     return true;
  }
 };

 Fizzbuzz.prototype.isDivisibleByFive = function(number) {
   if (number%5 === 0) {
     return true;
   }
 };

 Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) {
   if (number%3 === 0&&number%5 === 0) {
     return true;
   }
 };

Fizzbuzz.prototype.play = function(number) {
  if (this.isDivisibleByThreeAndFive(number)) {
    return "FizzBuzz"
  }
  if (this.isDivisibleByThree(number)) {
      return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz"
  }
  return number;
};
