//OBJECTIVES
//Define what a binary heap is
//Compare and contrast min and max heaps
//Implement basic methods on heaps
//Understand where heaps are used in the real world and other data structures can be constructed from heaps

//MAX BINARY HEAP PSEUDOCODE
//Push the value into the values property on the heap
//Bubble Up
     //Create a variable called index which is the length of the values property-1
     //Create a variable called parent index which is the floor of (index-10)/2
     //Keep looping as long as the values element at the parentIndex is less than the values element at thge child index
     //Swap the value of the values element at the parentIndex with the value of the property at the child index
     //Set the index to be the parent index, and start over

class MaxBinaryHeap{
 constructor(){
     this.values=[41,39,33,18,27,12]
 }
 insert(element){
     this.values.push(element)
     this.bubbleUp()
 }
 bubbleUp(){
     let index=this.values.length-1
     const element=this.values[index]
     while(index>0){
     let parentIndex=Math.floor((index-1)/2)
     let parent=this.values[parentIndex]
     if(element<=parent) break
     this.values[parentIndex]=element
     this.values[index]=parent
     index=parentIndex
     }
 }
}