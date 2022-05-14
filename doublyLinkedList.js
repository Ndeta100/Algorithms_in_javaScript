//OBJECTIVES
//Construct a Doubly Linked List
//Compare and constrast Doubly and Singly Linked Lisst
//Implement basic operations on a Doubly Linked list

//PUSH PSEUDOCODE
//Create a new node with the value passed to the function
//If the head property is null set the head and the tail to be the newly created node
//If not, set the next property of the tail to be that node 
//Set the previous property on the newly created node to be the tail
//Set the tail to be the newly created node
//Increment the length
//Return the Doubly Linkedd List 
class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}


class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
      let newNode=new Node(val)
      if(this.length===0){
          this.head=newNode
          this.tail=newNode
      }else{
          this.tail.next=newNode
          newNode.prev=this.tail
          this.tail=newNode
      }
      this.length++
      return this
    }
}