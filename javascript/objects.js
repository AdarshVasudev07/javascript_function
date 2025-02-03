// const obj={
//     name:"jhon",
//     age:20,
//     place:"us"
// };
// console.log(obj.age);


// const obj={
//     name:"jhon",
//     age:20,
//     place:{
//         state:"kerala",
//         district:"kollam",
//         pincode:690522
//     },
//     hobbies:["reading","writing","singing"]
// };
// console.log(obj.hobbies[0]);


// let target={a:1,
//     b:2
// };
// let source={c:3,
//     d:4

// };

// console.log(Object.assign(target,source));


// let person={name:"alice",
//     age:20

// };
// let newperson=Object.create(person)
// console.log(newperson.age);
// console.log(newperson.name);

// object key&values


// let obj={a:1,b:2};

// console.log(Object.keys(obj).length);
// console.log(Object.values(obj).length);


const obj={
    name:"jhon",
    age:20,
    place:"us"
};

for(let key in obj){
    console.log(key);
    
    console.log(key,":",obj[key]);

}

