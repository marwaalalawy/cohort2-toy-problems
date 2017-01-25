/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6], 
      [7,8,9]                                         
    ]);                                                
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var result=[];
	//while(matrix.length !== 0){
		for(var i=0;i<matrix.length;i++){
			for(var j=0;j<matrix[i].length;j++){
				result.shift(matrix[i][j])// take the top of the array 
                var newArray = matrix[0].map(function(col, i) {// transpose the remaining  
                	return matrix.map(function(row) { 
    					return row[i] 
                     })
                    });
			}
		}

	//}
};


 // [[1,2,3],// first i want to take the top [1,2,3]
 // [4,5,6], then transpose the left which give me [[4,7],
 // [7,8,9]                                         [5,8],
 //    ];                                           [6,9]]


 // after that i should reverse the left [[6,9],
                                       //[5,8],
                                       //[4,7]] and again take the top which give me [1,2,3,6,9]
                                            //then keep repeate the transpose and reverse and take the top off untill the base case which give me [1,2,3,6,9,8,7]