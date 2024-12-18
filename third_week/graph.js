class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }


    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1); 
        }
    }

 
    dfs(start, visited = {}, result = []) {
        if (!start) return null;

        visited[start] = true;
        result.push(start);

        for (let neighbor of this.adjacencyList[start]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited, result);
            }
        }
        return result;
    }


    bfs(start) {
        if (!start) return null;

        let queue = [start];
        let visited = {};
        let result = [];

        visited[start] = true;

        while (queue.length) {
            let current = queue.shift();
            result.push(current);

            for (let neighbor of this.adjacencyList[current]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
