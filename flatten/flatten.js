/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

// function flatten(list,result){
// 	var result= result || [];
// 	for(var i=0;i<list.length;i++){
// 		if(Array.isArray(list[i])){
// 			flatten(list[i],result)
// 		}else{
// 			result.push(list[i]);
// 		}
// 	}
// 	return result;
// }

function flatten(){
	var result=[];
	var args = Array.prototype.slice.call(arguments);
	function flatting(args){
		for(var i=0;i<args.length;i++){
			if(Array.isArray(args[i])){
				flatting(args[i])
			}else{
				result.push(args[i]);
			}
		}
	}
	flatting(args);
	return result;
}