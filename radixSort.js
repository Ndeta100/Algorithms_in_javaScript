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

//