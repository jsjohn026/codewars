/*
Description:
Detect Cycle in Module Dependency Graph
Given n modules labeled 0 to n-1 and a list of directed edges dependencies where [u, v] means module u depends on module v, return 1 if there is a cycle in the dependency graph, otherwise return 0.

Examples
Example 1
Input:
n = 4
dependencies = [[1, 0], [2, 1], [3, 2]]

Output:
0

Explanation:
We have edges 1→0, 2→1, 3→2.
This forms a simple chain and no module depends (directly or indirectly) back on itself.
There is no cycle in the directed graph, so the function returns 0.

Example 2
Input:
n = 4
dependencies = [[1, 0], [2, 1], [0, 2]]

Output:
1

Explanation:
Edges are 1→0, 2→1, and 0→2.
Follow the chain: 0 depends on 2, 2 depends on 1, and 1 depends on 0.
This creates a cycle (0→2→1→0), so the function returns 1.

Input Format
The first line contains the integer n.
The second line contains an integer dependencies_rows, the value of the rows in the array dependencies.
The third line contains an integer dependencies_columns, the value of the columns in the array dependencies.
The next dependencies_rows lines contains the value of the array itself.

Constraints
1 <= n <= 1000
0 <= dependencies.length <= n * (n - 1)
For each i, dependencies[i].length == 2
For each i, 0 <= dependencies[i][0] < n
For each i, 0 <= dependencies[i][1] < n
dependencies may contain duplicate pairs
Self-dependencies (u == v) are allowed and count as cycles

Output Format
Returns a BOOLEAN value: 1 if the directed graph defined by dependencies contains any cycle (including self-dependencies) and 0 if the graph is acyclic

Sample Input 0
1
0
0
Sample Output 0
0

Sample Input 1
1
1
2
0 0
Sample Output 1
1
*/

/*
 * Complete the 'hasCircularDependency' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY dependencies
 */

function hasCircularDependency(n, dependencies) {
  const indegree = new Array(n).fill(0)               // Make a new array with 0's to be a counter of how many modules depend on each one
  const graph = Array.from({ length: n }, () => [])   // Make an array of empty arrays

  for(const[u, v] of dependencies) {
    graph[u].push(v)
    indegree[v]++
    console.log(graph)
    console.log(indegree)
  }

}

// refactor:
let dependencies = [[1, 0], [2, 1], [0, 2]]
console.log(hasCircularDependency(4, dependencies))


// Tests:
/* 

*/
