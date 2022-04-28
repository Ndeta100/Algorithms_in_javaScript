//Radix sort is a special sorting algorithm that works on list of numbers 
//It never makes comparisons between elements!
//It exploits the fact that information about the size of a numberis encoded in the  number of digits
//More digits means bigger number!


//How to implement Radix sort
//In order to implement radix sort,it's helpful to build a few helper functions first

//getDigit(num, place) returns the digit in num at the given place value
function getDigit(num, place){
    return Math.floor(Math.abs(num)/Math.pow(10, place))%10
}
function digitCount(num){
    if(num===0) return 1
    return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigit(num){
    let maxDigit=0
    for(let i=0; i<num.length; i++){
        maxDigit=Math.max(maxDigit, digitCount(num[i]))
    }
    return maxDigit
}

//Implementing radix sort after helper
//Define a function that accepts list of numbers
//Figure out how many digits the largest number has
//Loop from k=0 up to this largest number of digits 
//For each iteration of the loop:
       //Create buckets for each digit(0  to 9)
       //Place each number in the corresponding bucket based on it kth digit
//Replace our existing array with values in our buckets, starting with 0 and going up to 9
//Return list at the end!
function radixSort(nums){
    let maxDigitCount=mostDigit(nums)
    for(let k=0; k<maxDigitCount.length;k++){
        let digitBucket=Array.from({length:10}, ()=>[])
        for(let i=0;i<nums.length; i++){
           let digit= getDigit(nums[i], k)
           digitBucket[digit].push(nums[i])
    }
    nums=[].concat(...digitBucket)
}
return nums
}