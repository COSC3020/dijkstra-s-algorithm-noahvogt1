# Dijkstra's Algorithm

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I did not know how to do dijkstras algorithm because its been a few weeks, so I watched a video from FelixTechTips on how dijkstras works. Other than that it was all me

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? 
The big $\Theta$  complexity is $\Theta(|V|^2)$  for my implimentation because I
have an initial for loop that runs the through the number of vertices. Then inside that
I call visitNode which has a for loop that runs through the vertices. Finally, on the same
level as the visitNode I have a for loop to find the next best vertex to go to which
loops through all of the vertices. All in all this gives us $|V|(|V| + |V|) \in |V|^2$.
