function sum(arr, n) {
  // Only change code below this line
  if(n > 0){ 
    return sum(arr, n-1)+arr[n];
     }
  else{
     return arr[0];
   }
   
  // Only change code above this line
}
