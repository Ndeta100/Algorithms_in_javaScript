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

//Binary search
//This function accepts a sorted array and a value
//Create a left pointer at the start of the array, and a right pointer at the end of the array
//While the left pointer comes before the right pointer
        //Create a pointer in the middle
        //If you find the value you want, return the index
        //If the value is too small, move the left pointer up
        //If the value is too large, move the right pointer down
//If you never find the value, return -1

function binary(arr, val){
let start=0
let end=arr.length-1
let middle=Math.floor((start+end)/2)
while(arr[middle]!==val &&start<=end){
    if(val<arr[middle]){
        end=middle-1
    }else{
        start=middle+1
    }
    middle=Math.floor((start+end)/2)
}
if(arr[middle]==val){

    return middle
}else{
    return -1
}}
binary([2,5,6,9,13,15,28,30],28)