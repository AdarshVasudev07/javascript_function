// array push

let str=["html","css","java"];             //add an item to the end of the array and returns the new length

str.push("mongo db","node js");

console.log(str);


// array shift   (remove an element from the begining of an array)


let sft=["html","css","java","mongodb"] 

sft.shift()

console.log(sft);


// array concat (combines two or more arrays into a new array)


let arr1=[10,15,20]
let arr2=[25,30,35]
let arr3=[40,45,50]

let newArr = arr1.concat(arr2,arr3) ;
console.log(newArr);


// array unshift (add an item to the begining of the array and returns the new length)


let numarr=[30,40,50]

numarr.unshift(10,20)
console.log(numarr);


// array slice (start,end) (returns a shallow copy of part of the array)
// 
let lnge =["html","css","java","react"]
// first argmnts index no., 2nd lenth size
let nw =lnge.slice(1,3);
console.log(nw);



//  array splice  (add/removes items of a specific position in the array )

let sparr =["Banana", "Orange", "Apple", "Mango"];
// 1> index no, 2> remove elemnts count
sparr.splice(1,0,  "lemon","kiwi")

console.log(sparr);














