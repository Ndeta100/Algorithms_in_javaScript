//Some langauges come with build in stacks but javascript does not so we can use and array as an example of a stack
let stack=[]
stack.push('google')
stack.push('instagram')
stack.push('discord')
//Building our own stack using the principle of a singly linked list 
//PUSHING PSEUDOCODE
//The function should accept a value
//Create a new  node with that value
//If there are no nodes in the atack, set the first and last property to be the newly created node
//If there is at least one node, create a variable that stores the current first property on the stack
//Reset the first property to be the newly created node
//set the next property on the node to the previously created variable
//Increment the size of the stack by 1

//POP PSEUDOCODE
//If there are no nodes in the stack, return null
//Create a temporary variable to store the first property on the stack
//If there is only 1 node, set the first and last property to be null
//If there is more than one node, set the first property to be the next property on the current first 
//Decrement the size by 1
class Node{
    constructor(value) {
         this.value=value
         this.next=null
    }
}

class Stack{
    constructor(){
        this.first=null
        this.last=null
        this.size=0  
    }
    push(val){
        let newNode=new Node(val)
        if(!this.first){
            this.first=newNode
            this.last=newNode
        }else{
            let temp=this.first
            this.first=newNode
            this.first.next=temp
        }
        return this.size++
    }
    pop(){
       if(!this.first) return null
       let temp=this.first
       if(this.first===this.last){
           this.last=null
       }
       this.first=this.first.next
       this.size--
       return temp.value
    }
}

//QUEUES
let q=[]
q.push('first')
q.push('second')
q.push('third')
q.unshift()
q.unshift()
q.unshift()
//ENQUEUE PSEUDOCODE
//This function accepts some value
//Create a new node  using that value passed to the function
//If there are no nodes in the queue, set this node to be the first and the last property of the queue
//Otherewise, set the next property on the current last node to be that node, and then set the last property of the queue to be that node 
//DEQUEUE PSEUDOCODE
//If there is no first property, just return null
//Store the first proprty in a variable
//See if the first is the same as the last (check if there is only 1 node). If so, set the first and the last to be null
//If there is more than 1 node, set the first property to be the next property of the first
//Decrement the size by 1
//Return the value of the node dequeued 
class Queue{

    constructor(){
        this.first=null
        this.last=null
        this.size=0
    }
    enqueue(val){
        let newNode=new Node(val)
        if(!this.first){
            this.first=newNode
            this.last=newNode
        }else{
        this.last.next=newNode
        this.last=newNode
       }
       return this.size++ 
    }
    dequeue(){
       if(!this.first) return null
       let temp=this.first
       if(this.first===this.last){
           this.last=null
       }
       this.first=this.first.next
       this.size--
       return temp.value
    }

}