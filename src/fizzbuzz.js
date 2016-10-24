function Fizzbuzz (){
};
 Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    if (number%3 == 0) {
    return "Fizz";
  } else {
    return number;
  }
 };
