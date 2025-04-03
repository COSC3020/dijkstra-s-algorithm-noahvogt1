const fs = require('fs');
const assert = require('assert');



eval(fs.readFileSync('Algorithms/code.js')+'');

var basicGraph = [
    [0, 1, 4],
    [1, 0, 2],
    [4, 2, 0]
];
var result = dijkstra(basicGraph);
assert(JSON.stringify(result) == JSON.stringify([0, 1, 3]));

var disconnectedGraph = [
    [0, 1, 4, 0],
    [1, 0, 2, 0],
    [4, 2, 0, 0],
    [0, 0, 0, 0]
];
var result = dijkstra(disconnectedGraph);
assert(JSON.stringify(result) == JSON.stringify([0, 1, 3, Infinity]));

var cycleGraph = [
    [0, 1, 4, 0],
    [1, 0, 2, 5],
    [4, 2, 0, 1],
    [0, 5, 1, 0]
];
var result = dijkstra(cycleGraph);
assert(JSON.stringify(result) == JSON.stringify([0, 1, 3, 4]));

var selfLoopGraph = [
    [1, 1, 4],
    [1, 0, 2],
    [4, 2, 0]
];
var result = dijkstra(selfLoopGraph);
assert(JSON.stringify(result) == JSON.stringify([0, 1, 3]));

var largeGraph = [
    [0, 7, 9, 0, 0, 14],
    [7, 0, 10, 15, 0, 0],
    [9, 10, 0, 11, 0, 2],
    [0, 15, 11, 0, 6, 0],
    [0, 0, 0, 6, 0, 9],
    [14, 0, 2, 0, 9, 0]
];
var result = dijkstra(largeGraph);
assert(JSON.stringify(result) == JSON.stringify([0, 7, 9, 20, 20, 11]));
