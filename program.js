let sum = 0,arr=process.argv;
for(let i=2;i<arr.length;i++){
  sum += +arr[i];
  
}
console.log(sum);