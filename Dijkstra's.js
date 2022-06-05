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