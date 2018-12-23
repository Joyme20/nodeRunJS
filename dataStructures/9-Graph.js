import Dictionary from './7-Dictionary';
import Queue from './4-Queue'

export default class Graph {
    constructor(){
        this.vertices = [];
        this.adjList = new Dictionary();
    }

    addVertex(v){
        this.vertices.push(v);
        this.adjList.set(v,[]);
    }

    addEdge(v,w){
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    toString(){
        let s = '';
        for(let i = 0; i<this.vertices.length; i++){
            s += this.vertices[i] + ' -> ';
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j<neighbors.length; j++){
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }

    initializeColor(){
        let color = [];
        for(let i = 0; i<this.vertices.length; i++){
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    //广度优先算法
    bfs(v,callback){
        let color = this.initializeColor(),
            queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()){
            let u = queue.dequeue(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for(let i = 0; i<neighbors.length; i++){
                let w = neighbors[i];
                if (color[w] === 'white'){
                    color[w] = 'grey';
                    queue.enqueue(w)
                }
            }
            color[u] = 'black';
            if (callback){
                callback(u);
            }
        }

    }

    BFS(v){
        let color = this.initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v);

        for(let i=0; i<this.vertices.length; i++){
            d[this.vertices[i]] = 0;
            pred[this.vertices[i]] = null;
        }

        while (!queue.isEmpty()){
            let u = queue.dequeue(),
                neighbors = this.adjList.get(u);
            color[u] = 'grey';
            for(let i = 0; i<neighbors.length; i++){
                let w = neighbors[i];
                if (color[w] === 'white'){
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return{
            distances: d,
            predecessors: pred
        }

    }

    dfs(){

    }
}
