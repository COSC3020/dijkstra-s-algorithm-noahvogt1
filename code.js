function visitNode(graph, node, dist, previousNode, visited) {
    for (let i = 0; i < graph.length; i++) {
        if (graph[node][i] > 0 && !visited.has(i)) {
            if (dist[node] + graph[node][i] < dist[i]) {
                dist[i] = dist[node] + graph[node][i];
                previousNode[i] = node;
            }
        }
    }
}

function dijkstra(graph) {
    let dist = Array(graph.length).fill(Infinity);
    dist[0] = 0;
    let visited = new Set();
    let previousNode = Array(graph.length).fill(null);

    let currentNode = 0;
    while (visited.size < graph.length) {
        visitNode(graph, currentNode, dist, previousNode, visited);
        visited.add(currentNode);
        
        let shortest = Infinity;
        let nextNode = currentNode;
        for (let i = 0; i < graph.length; i++) {
            if (dist[i] < shortest && !visited.has(i)) {
                shortest = dist[i];
                nextNode = i;
            }
        }

        if (nextNode == currentNode) {
            break;
        }

        currentNode = nextNode;
    }

    return dist;
}
