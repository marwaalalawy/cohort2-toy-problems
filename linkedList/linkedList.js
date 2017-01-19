/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.tree={};
  this.head=null;
  this.tail=null;
};

LinkedList.prototype.makeNode=function(value){
	var node={};
	node.value=value;
	node.next=null;
	return node;
}
LinkedList.prototype.addToTail = function(value){
	var x=this.makeNode(value)
	if(this.tail !== null){
		this.tail=this.tail.next=x
		this.tail=x
	}else if(this.tail === null)
	this.head=x
	this.tail=this.head;
}

LinkedList.prototype.removeHead = function(){
	var currentHead =this.head.value;
	if(this.head.value === this.tail.value){
		this.head = this.tail = null
	}else{
	this.head=this.head.next;
	}
	return currentHead;
}

LinkedList.prototype.contains = function(value){
	var start=this.head;
	while(start){
		if(start.value === value){
			return true
		}else{
			start=start.next;
		}
	}
	return false;
}
