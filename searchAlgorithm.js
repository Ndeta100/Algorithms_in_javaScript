//Describe what a search algorithm is
//Implememnt linear search algorithm on aarrays
//Implement binary search on sorted arrays
//Implement a naive string searching algorithm
//Implement a kmp string searching algorithm


//Implementing linear search
function linear(arr, val){
   for(let i=0; i<arr.length; i++){
       if(arr[i]===val)return i     
   }
   return -1
}
linear([4,5,6,3,6,2,7],7)