// function mycounter(){
//     let counter = 0;
//     return function(){
//         counter+=5;
//         return counter;
//     }
// }

// const add = mycounter();
// add();
// add();
// console.log(add());

// let a = 20
// let a =10
// console.log(a);



// const a = 20;
// {
//   const a = 30;
//   console.log("Inside Block 1, a = ",a);
//   {
//     const a = 40;
//     console.log("Inside Block 2, a = ",a);
//   }
// }
// console.log("Outside Block, a = ",a);




const a = 20;
{
  const a = 30;
  console.log("Inside Block 1, a = ",a);
  {
    console.log("Inside Block 2, a = ",a);
  }
}
console.log("Outside Block, a = ",a);

