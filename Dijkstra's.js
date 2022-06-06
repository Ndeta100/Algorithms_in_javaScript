//Dijkstra's Pseudocode
//This function should accept a starting and ending vertex
//Create an object (we'll call it distance) and set each key to be very vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
//After setting a value in the distance object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
//Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
//Start looping as long as there is anythiung in the priority queue
     //Dequeue a vertex from the priority queue
     //If that vertex is same as the ending vertex. We are done
     //Otherwise loop throgh each value in the adjacency list at that vertex
         //Calculate the distance to that vertex from the starting vertex
         //If the distance is less than what is currently stored in our distances object
         // Update the distances object with new lower distance
         //update  the previous object to contain that vertex
         //Enqueue the vertex with the total distance from the start node

class PriorityQueue{
    constructor(){
        this.values=[]
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority)
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight})
        this.adjacencyList[vertex2].push({node:vertex1, weight})
    }

    Dijkstra(start, finish){
       const nodes=new PriorityQueue()
       const distances={}
       const previous={}
       let path=[] //to return at end
       let smallest
         //Build up initial state
         for(let vertex in this.adjacencyList){
             if(vertex===start){
                 distances[vertex]=0
                 nodes.enqueue(vertex, 0)
             }else{
                 distances[vertex]=Infinity
                 nodes.enqueue(vertex, Infinity)
             }
             previous[vertex]=null
         }
         //As long as there is something to visit
         while(node.values.length){
             smallest=node.enqueue().val
             if(smallest===finish){
                 //We are done
                 //Build up path to return at end
                 while(previous[smallest]){
                     path.push(smallest)
                     smallest=previous[smallest]
                 }
                 break
             }
             if(smallest || distances[smallest] !==Infinity){
                 for(let neighbor in this.adjacencyList[smallest]){
                     //Find neighboring node
                     let nextNode=this.adjacencyList[smallest][neighbor]
                     console.log(nextNode)
                     //calculate new distance to neighboring node
                     let candidate=distance[smallest]+ nextNode.weight
                     let nextNeighbor=nextNode.weight
                     if(candidate<distances[nextNeighbor]){
                         //update new smallest distance to neighbor
                         distances[nextNeighbor]=candidate
                         //updating previous How we got to neighbor
                         previous[nextNeighbor]=smallest
                         //enqueue in priority queue with new priority
                         nodes.enqueue(nextNeighbor, candidate)
                     }
                 }
             }
         }
         return path.concat(smallest.revers())
    }
}