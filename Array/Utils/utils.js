//Slice (begin, end)

const arr1 = [1, 2, 3, 5, 6, 7]
console.log(arr1.slice(2));

//Splice
console.log(arr1.splice(0,6,56));
console.log(arr1);

const names = ['Jupiter', 'Mountain', 'Juptain', 'Gphics', 'Design']

const secondArr = Array.from(names)

console.log(secondArr.splice(3, 2, 'poland', 'checlsea'));
console.log(secondArr);