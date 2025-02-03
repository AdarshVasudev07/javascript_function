
// ascending order

const arr =[52,15,89,568,254,88,30,89,102,781];

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp =arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log("ascending order:",arr);
