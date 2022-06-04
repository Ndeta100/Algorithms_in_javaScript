//We will be implementing an adjacency list
//Write a methos called addVertex, which accepts a name of a vertex
//It should add a key to the adjacency list with the name of the vertex and set its  value to be an empty array
//DFS recursive
//The function should accept a starting node
//Create a list to store the end result, to be returned at the very end
//Create an object to store vertices
//Create a helper function which accepts a vertex
     //The helper function should return early if the vertex is empty
     //The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
     //Loop over all of the values in the adjacency list for that vertex
     //If any of those values not been visited, recursively invoke the helper function with that vertex
//Invoke the helper function with the starting vertex
//Return the result array
class Graph{
    constructor(){
          this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[]
        }
    }
    addEdge(v1,v2){
        this.adjecencyList[v1].push(v2)
        this.adjecencyList[v2].push(v1)
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter(v=>v !==vertex2)
        this.adjecencyList[vertex2]=this.adjecencyList[vertex2].filter(v=>v !==vertex1)
    }
    removeVertex(vertex){
     while(this.adjecencyList[vertex].length){
         const adjecentVertex=this.adjecencyList[vertex].pop()
         this.removeEdge(vertex, adjecentVertex)
     }
     delete this.adjecencyList[vertex]

    }
    DFSRecursive(start){
      const result=[]
      const visited={}
      const adjacencyList=this.adjecencyList
    (function dfs(vertex){
        if(!vertex) return null
        visited[vertex]=true
        result.push(vertex)
        adjacencyList[vertex].forEach(neighbor=>{
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        })
    })(start)
    return result
    }
}