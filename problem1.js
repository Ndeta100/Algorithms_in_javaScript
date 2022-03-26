//Master common problem solving patterns
//Frequwncy counter
//multiple pointers
//sliding windowa
//divide and conquer
//dynamic programming 
//greedy algorithms
//backtracking
//many more 
//AN EXAMPLE
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same


//Naive appraoch
function same(arr1,arr2){
    if(arr1.length !==arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        let correctIndex=arr2.indexOf(arr1[i]**2)
        if(correctIndex===-1){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

//frequency counter appraoch
function sameF(arr1, arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    let frequencyCounter1={}
    let frequencyCounter2={}
    for (let val in arr2){
        frequencyCounter1[val]=(frequencyCounter1[val]|| 0)+1

    }
    for(let key in arr2){
        frequencyCounter2[key]=(frequencyCounter2[key]||0)+1
    }
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
            return false
        }
    }
 return true
}

//ANAGRAMS
//Given two strings, wrute a function to determine if the second string is an anagram of the firsdt. AN anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

function valideAnagram(first, second){
    if(first.length!==second.length){
        return false
    }
    const lookup={}
    for(let i=0; i<first.length; i++){
        let letter=first[i]
       //if the letter exist, invrement, otherwise set to 1
          lookup[letter]?lookup[letter] +=1:lookup[letter]=1
    }

    for(let i=0; i<second.length; i++){
        let letter=second[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]-=1
        }
    }

    return true

}

//MULTIPLE POINTER PATTERN
//Write a funvtion called SumZero which accepts sorted array and integers. The function should find the firsty pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if the pair does not exist

//Naive solution
function sumZero1(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j]===0){
                return [arr[i], arr[j]]
            }
        }
    }
}

//Refactored solution
function sumZero(arr){
    let left=0
    let right=arr.length-1
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum===0){
            return [arr[left]+arr[right]]
        }else if(sum>0){
            right--

        }else{
            left++
        }
    }
}

//Implement a function called countUninqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted 
function countUniqueValues(arr){
    if(arr.length==0){
        return 0
    }
    let i=0
    for(let j=1; j<arr.length; j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    return i+1
}

//Write  a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.


//Naive solution
function maxSubarraySum(arr, num){
    if(num>arr.length){
        return null
    }
    let max=-Infinity
    for(let i=0; i<arr.length-num+1; i++){
        temp=0
        for(let j=0; j<num; j++){
            temp +=arr[i+j]
        }
        if(temp>max){
            max=temp
        }
    }
    return max
}

//Refactor
function maxSubarraySum1(arr, num){
    let maxSum=0
    let tempSum=0
    if(arr.length<num){
        return null
    }
    for (let i=0; i<num; i++){
        maxSum+=arr[i]
    }
    tempSum=maxSum
    for(let i=num; i<arr.length; i++){
        tempSum=tempSum-arr[i-num]+arr[i]
        maxSum=Math.max(maxSum, tempSum)
    }
      return maxSum 
}

//Given a sorted array of integers, write a function called search , that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

//NIAAVE APPROACH
function search1(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}

//Refactor
function search(arr, val){
    let min=0
    let max=arr.length-1
    while(min<=max){
        let middle=Math.floor((min+max)/2)
        if(arr[middle]<val){
            min=middle+1
        }else if(arr[middle]>val){
            max=middle-1
        }else{
            return middle
        }
    }
    return -1
}