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