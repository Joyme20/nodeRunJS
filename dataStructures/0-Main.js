function print(...a) {
    console.log(...a);
}

import Graph from './9-Graph'

let graph = new Graph()
let myVertices = ['a','b','c','d'];
for(let i=0; i<myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}

graph.addEdge('a','b');
graph.addEdge('a','c');
graph.addEdge('a','d');
graph.addEdge('c','b');

print(graph.toString())

let a = []
a['c'] = 0
print(a)