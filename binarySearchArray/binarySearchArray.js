/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */
//var array=[1,2,3,4,5,6];
var binarySearch = function (array, target) {// target=2
	var minIndex=0;
	var maxIndex=array.length-1;//6
	var currentIndex;
	var currentElement;
	while(minIndex <= maxIndex){
		 currentIndex = (minIndex + maxIndex) / 2 | 0; // 3-2-1
		 currentElement=array[currentIndex];//4-3-2
		 if(currentElement < target){//false-false
		 	minIndex=currentIndex+1
		 }else if(currentElement > target){//true-true
		 	maxIndex=currentIndex-1 //2-1
		 }else{
		 	return currentIndex;//2
		 }
	}
	return -1;
};

