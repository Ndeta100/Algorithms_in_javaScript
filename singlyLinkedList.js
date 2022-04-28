//A data structure that contains a head, tail and length proerty
//Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

//Features of list
//Do not have indices
//Connected via nodes with a next pointer
//Random access is not allowed 

//Piece of data --val
//refernce to next node --next
class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

//Bad approach
let first=new Node('hi')
first.next=new Node('there')
first.next.next=new Node('How')
first.next.next.next=new Node('are')
first.next.next.next.next=new Node('you')

//PUSHING PSEUDOCODE
//This function should accept a value
//Create a new node using the value passed to the function
//If there is no head property on the list, set the head and the tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
//Increment the length by 1
//Return the linked list

class singlyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
     let newNode=new Node(val)
     if(!this.head){
         this.head=newNode
         this.tail=this.head
     }else{
         this.tail.next=newNode
         this.tail=newNode
     }
     this.length++
     return this
    }
}
//Good approach 
let list = new singlyLinkedList()