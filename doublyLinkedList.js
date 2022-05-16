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

//POP PSEUDOCODE
//If there is no head, return uindefined
//Store the current tail in a variable to return later
//If the length is 1, set the head and tail to be null
//Update the tail to be the previous Node
//Set the newTail's next to null
//Decrement the length
//Return the value removed

//SHIFT PSEUDOCODE
//If the length is 0, return undefined
//Store the current head property in a variable (we'll call it old head)
//If the length is zero
        //Set the head to be null
        //Set the tail to be null
//Update the head to be the next of the old head
//Set the head's prev property to be null
//Set the old head's next to be null
//Decrement the length
//Return the head
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
    pop(){
        if(!this.head) return undefined
        let poppedNode=this.tail
        if(this.length===1){
            this.head=null
            this.tail=null
        }else{
            this.tail=poppedNode.prev
            this.tail.next=null
            poppedNode.prev=null
        }
        this.length--
        return poppedNode
    }
    shift(){
       if(this.length===0) return undefined
       let oldHead=this.head
       if(this.length===1){
           this.head=null
           this.tail=null
       }
       this.head=oldHead.next
       this.head.prev=null
       oldHead.next=null
       this.length--
       return oldHead
    }
}