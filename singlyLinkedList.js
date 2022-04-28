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
let first=new Node('hi')
first.next=new Node('there')
first.next.next=new Node('How')
first.next.next.next=new Node('are')
first.next.next.next.next=new Node('you')