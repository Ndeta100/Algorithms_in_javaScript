//We will be implementing an adjacency list
//Write a methos called addVertex, which accepts a name of a vertex
//It should add a key to the adjacency list with the name of the vertex and set its  value to be an empty array
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
}