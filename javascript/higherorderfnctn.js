// const number =[1,2,3,4,5];

//     const square = x => x*x;

//     const squaredNumbers = number.map(square);
//     console.log(squaredNumbers);
    

// function adarsh(){
//     console.log("hello");
    

// }
// function user(){
//     adarsh();
// }
// user(adarsh)

// function callback(res){
//     console.log(res);
// }

// function greet(callback){
//     let res = 5+6
//     callback(res);
// }
// greet(callback)


let arr=[1,2,3,4,5]

let nrr=arr.map((num,indx,arr)=>{
    console.log('value:',num);
    console.log('index:',indx);
    console.log('arr:',arr);            
    
    return num*2 
});
console.log(nrr);
// console.log(arr);

