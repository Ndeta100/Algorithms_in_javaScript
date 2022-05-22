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
}