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
    //FINDING A NODE IN A BST
    //Starting at the root
        //Check if there is a root, if not- we're done searching!
        //If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're are done!
        //If not, check to see if the value is greater tahn or less tahn the value of the root
         //If it is greater 
            // Check to see if there is a node to the right 
            //If there is, move to that node and repeat these steps
            //If there is not, we're done searching
        //If it is less
               //Check to see if there is a node to the left 
               //If there is, move to that node and repeat these steps
               //If there is not, we're are done searching
//BREATH FIRST SEARCH PSEUDOCODE
//Create a queue (this can be an array) an a variable to store the values of node visited
//Place the root node in the queue
//Loop as long as there is anything in the queue
      //Dequeue a node from the queue and push the value of the node into the variable that stores the node
      //If there is a left property on the node dequeue -add it to the queue
      //If there is a right property on the node dequeue --add it to the queue
//Return the variable that stores the value

//DEPTH FIRST SEARCH PSEUDOCODE
//Create a variable to store the values of the node visited
//store the root of the BST in a variable called current
//Write a helper function which accepts a node
//Push the value of the node to the variable that stores the valaue
//If the node has a left property, call the helper function with the left property on the node 
//If the node has a right property, call the helper function with the right property on the node 
//invoke the helper function with the current variable 
//Return the array of values

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
    find(val){
        if(this.root===null) return false
        let current=this.root
        let found=false
        while(current && !found){
            if(val<current.value){
                current=current.left
            }else if(val>current.value){
                current=current.right
            }else{
                found=true
            }
        }
        if(!found) return 'Not Found'
        return current
    }
    BFS(){
        let node=this.root
        let data=[]
        let queue=[]
        queue.push(node)
        while(queue.length){
            node=queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder(){
        let data=[]
        let current=this.root
        function traversal(node){
            data.push(node.value)
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
        }
        traversal(current)
        return data
    }
    //Pseudocode is same for preorder
    DFSPostOrder(){
        let data=[]
        let current=this.root
        function traversal(node){
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
            data.push(node.value)
        }
        traversal(current)
        return data
    }
}