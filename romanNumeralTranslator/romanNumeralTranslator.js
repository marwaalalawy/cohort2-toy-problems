
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  var num=[];
  var result=0;
  var romanNumeral=romanNumeral.split("");
  for(var i=0;i<romanNumeral.length;i++){
    for(var key in DIGIT_VALUES){
      if(romanNumeral[i]===key){
        num.push(DIGIT_VALUES[key]);
      }
    }
  }
  for(var i=0;i<num.length;i++){
    if(num[i]<num[i+1]){
      return num[i+1]-num[i]
    }else if(num[i]>=num[i+1]){
      return num[i]+num[i+1];
    }else{
      return null;
    }
  }
}
//it works in tow digit numbers only