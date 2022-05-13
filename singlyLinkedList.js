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

//POPPING PSEUDOCODE
//If there are no nodes in the list, return undefined
//Loop through the list until you reach the tail
//Set the next property of the 2nd to the last node to be null
//Set the tail to be the second to the last node
//Decrement the length of the list by 1
//Return the value of the node removed

//SHIFTING PSEUDOCODE
//If there are no nodes, return undefined
//Store the current head property in a variable
//Set the head property to be the current head's next property
//Decrement the length by 1
//Return the value of the node removed 

//UNSHIFT PSEUDOCODE
//This function should accept a value
//Create a new node using the value passed to the function
//If there is no head property on the list, set the head and the tail to be the newly created node
//Otherwise set the newly created node's next property to be the current head property on the list 
//Set the head property on the list to be that newly created node 
//Increment the length of the list by 1
//Return the linked list


//GET PSEUDOCODE
//This function should accept an index
//If the index is less than zero or greater than or equal to the length of the list, return null
//Loop through the list until you reach the index and return the node at that specific index

//SET PSEUDOCODE
//This function should accepta value and an index
//Use your fet function to find the specific node
//If the node is found, set the value of that node to be the value passed to the fuction and return true

//INSERT PSEUDOCODE
//if the index is less thn zero or greater than the length, return false
//If the index is the same as the length, push a new node to the end of the list 
//if the index is 0, unshift a new node to the start of the list 
//Otherwise, using the get method, accedd the node at the index -1
//Set the next property on that node  to be the new node
//Set the next property on the new node to be the previous next
//increment the length
//Return true

//REMOVE PSEUDOCODE
//If the index is less than zero or greater than the length. return undefined 
//If the index is the same as the length-1, pop
//If the index is 0, shift
//Otherwise, using the get method, access the node at the index-1
///Set the next property pon that node to be the next of the next node
//Decrement the length
//Return the value of the node removed 


//REVERSE PSEUDOCODE
//Swap the head and tail
//Create a variable called next
//create a variable called prev
//Create a variable called node and initialize it to the head prpoerty
//Loop throght the list
//Set next to be the next property on whatever node is
//Set next peoperty on the node to be whatever prev is
//Set prev to be the value of the node variable
//Set the node variable to be the value of the next variable
//Good approach 
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
    pop(){
      if(!this.head) return undefined
      let current=this.head
      let newTail=current
      while(current.next){
          newTail=current
          current=current.next
      }
      this.tail=newTail
      this.tail.next=null
      this.length--
      if(this.length===0){
          this.head=null
          this.tail=null
      }
      return current
    }
    shift(){
       if(!this.length===0) return undefined
       let currentHead=this.head
       this.head=currentHead.next
       this.length--
       return currentHead
    }
    unshift(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this

    }
    get(index){
        if(index<0 || index>=this.length) return null
       let counter=0
       let current=this.head
       while(counter !=index){
           current=current.next
           counter++
       }
       return current
    }
    set(index, val){
        let foundNode=this.get(index)
        if(foundNode){
            foundNode.val=val
            return true
        }
        return false
    }
     insert(index, val){
         if(index<0 || index>this.length) return false
         if(index===this.length) return this.push(val)
         if(index===0) return !!this.unshift(val)
         newNode =new Node(val)
         let prev=this.get(index-1)
         let temp=prev.next
         newNode.next=temp
         this.length++
         return true
     }
     remove(index ){
         if(index<0 || index>=this.length) return undefined
         if(index===0) return this.shift()
         if(index===this.length-1) return this.pop()
         let previousNode=this.get(index-1)
         let removed=previousNode.next
         previousNode.next=removed.next
         this.length--
         return removed
     }
     reverse(){
         let node=this.head
         this.head=this.tail
         this.tail=node
         let next
         let prev=null
         for(let i=0; i<this.length; i++){
             next=node.next
             node.next=prev
             prev=node
             node=next
         }
         return this
     }
     print(){
         let arr=[]
        let current=this.head
         while(current){
             arr.push(current.val)
             current=current.next
         }
         console.log(arr)
    }

}

let list = new singlyLinkedList()