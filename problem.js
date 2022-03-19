//BASIC APPROACH TO SOLVING A PROBLEM

//1. Devise a plan for solving aproblem
//2. Master common problem solving patterns

//Understand the problem
//Explore concrete examples
//Break it down
// slove/simplify
//look back and refactor
//write a function which takes in a string and return counts of each character in the string
function charCount(str){
    //make object to return at end
    let count={}
    //loop over string for each char
    for (let i=0;i<str.length;i++){
        //if the char is a number/letter AND is a key in object, add 1 to count
        let char=str[i].toLowerCase()
        if(count[char]>0){
            count[char]++
            //if the char is a number/letter AND  not an object, add it to the object and set value to one
        }else{
            count[char]=1
        }
    }
       
       
       //if char is something else (space, period, etc) don't do anything
    //return object at end
    return count
}
console.log(charCount('Hello there'))

