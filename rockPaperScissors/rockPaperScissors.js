
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
<<<<<<< HEAD
*/ function rps() {

    var options = ['rock', 'paper', 'scissors'];
    var results = [];

    for (var i = 0; i < options.length; i++) {
        for (var j = 0; j < options.length; j++) {
            for (var k = 0; k < options.length; k++) {
                results.push([].concat(options[i], options[j], options[k]));
            }
        }
    }
    return results;
}

function allanagrams(word) {
    if (word.length < 2) {
        return [word];
    } else {
        var allanswers = [];
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            var shorterword = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            var shortwordarray = allanagrams(shorterword);
            for (var j = 0; j < shortwordarray.length; j++) {
                allanswers.push(letter + shortwordarray[j]);
            }
        }
        return allanswers;
    }
}
=======
*/
function rockPaperScissors(number){
  var array =[];
  var array2 =["rock","paper","scissors"]
  var bigArray=[];
  array.length=3;
  bigArray.length=number;
  	if (number > 0) {
  		for (var i = 0; i < array.length; i++) {
	    	var x=Math.floor(Math.random() * array2.length)
    		array.push(array2[x])
  		}
  			if (bigArray.indexOf(array) === -1) {
  				bigArray.push(array)
  			}
  	}	
  return bigArray + rockPaperScissors(number-1);
}

>>>>>>> 6568bbd23274e6102779dd33ae75e4ed66b62768
