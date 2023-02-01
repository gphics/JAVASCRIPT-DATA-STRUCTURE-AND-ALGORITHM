/*

const firstSet = new Set([1, 1, 1, 1, 3, 3, 45, 56, 3, 3, 54, 3]);
firstSet.add(8888);
const A = firstSet.delete(54);
console.log(A);
console.log(firstSet);
console.log(firstSet.has(1));
\

*/

//Intersection of two set
const first = new Set([1, 2, 3, 4, 5, 8, 9, 67])
const second = new Set([1, 2, 3])

function FindIntersect(A, B) {
    const res = new Set()

    for (elem of B) {
        if(A.has(elem)) res.add(elem)
    }
    return res
}
first.clear()
console.log(first);
const res = FindIntersect(first, second)
console.log(res);