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

//Naive string search
//Suppose you want to count the number of times a smaller string appears in a longer string
//A straightforward approach involves checking pairs of characters individually

//pseudocode
//Loop over the longer string
//loop over the shorter string
//If the character don't match, keep going
//If you complete the inner loop and find a match, increment the of the matches 
//Return the count
 function naiveSearch(long, short){
     let count=0
  for (let i=0; i<long.length; i++){
      for(let j=0; j<short.length; j++){
          if(short[j]!==long[i+j]){
              break
          }
          if(j===short.length-1) count++
      }
  }
  console.log('found one')
  return count
 }
 naiveSearch('lorie loled', 'lol')

 