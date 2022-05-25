//HOW BSTS WORK
//Every parent node has at most two children
//Every node to the left of the parent node is always less than the parent
//Every node to the right of th parent node is always greater than the parent 
//INSERT PSEUDOCODE
//Create a new Node
//Starting at the root
    //Check if there is a root, if not -the root now becomes the new node
    //If there is a root, check if the value of the new node is greater than or less than the value of the root 
    //If it is greater 
            //Check to see if there is a node to the right
                //If there is, move to that node and repeat these steps
                //If there is not, add that node as the right property
    //If it is less 
             //Check to see if there is a node to the left
             //If there, move to that node and repeat these steps
             //If there is not, add to that node as the left property
    class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(val){
        let newNode=new Node(val)
       if(this.root===null){
           this.root=newNode
           return this
       }else{
           let current=this.root
           while(true){
               if(val===current.value) return undefined
               if(val<current.value){
                   if(current.left===null){
                       current.left==newNode
                       return this
                   }else{
                    current=current.left
                   }
               }else if(val>current.value){
                   if(current.right==null){
                       current.right=newNode
                       return this
                   }else{
                       current=current.right
                   }
               }
           }
       }


    }
}