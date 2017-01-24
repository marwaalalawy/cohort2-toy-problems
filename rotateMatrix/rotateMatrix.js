/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix =function (matrix) {
	var n=matrix.length;
	for(var i=0;i<n/2;i++){
		for(var j=0;j<n/2;j++){
			var temp=matrix[i][j]//[0][0]
			matrix[i][j]=matrix[n-1-j][i];//[0][0]-[3][0]
			matrix[n-1-j][i] = matrix[n-1-i][n-1-j];//[3][0]-[3][3]
			matrix[n-1-i][n-1-j] = matrix[j][n-1-i];//[3][3]-[0][3]
            matrix[j][n-1-i] = temp;//[0][3]-[0][0]
		}
	}
	return matrix;
}
///////////////////