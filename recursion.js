//Define what recuursion is and how it can be used
//Understand the two essential components of a recursive function
//Visaulize the call stack to better debug and understand recursive functions
//Use helper method recursion and pure recursion to solve more difficult problems 

        //RECURSION IS JUST A PROCESS THAT CALLS ITSELF
        //IN JAVASCRIPT A FUNCTION THAT CALLS ITSELF

//callstack
function takeShower(){
    return 'Showering'

}

function eatBreakFast(){
    let meal=cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let item=['oatmeal', 'eegs', 'protein shake']
    return item[Math.floor(Math.random()*item.length)]
}
function wakeup(){
    takeShower()
    eatBreakFast()
    console.log('Okay ready to go to work')
}

wakeup()

//Recursive functions
function countDown(num){
    if(num<=0){
        console.log('All done!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

function sumRange(num){
    if(num===1) return 1
    return num+sumRange(num-1)
}

//Factorial
function factorial(num){
    let total=1
    for(let i=num; i>1;i--){
        total *=i
    }
    return total
}

//factorial recursive
function factorialRecursive(num){
    if(num===1) return 1
    return num*factorialRecursive(num-1)
}

//helper method recursion
 function collectOdds(num){
     let results=[]
   function helper(helperInput){
       if(helperInput.length===0){
           return
       }
       if(helperInput[0]%2!==0){
           results.push(helperInput[0])
       }
       helper(helperInput.slice(1))
   }
   
 helper(num)
 return results
 }

 //Pure recursion
 function collectOddsValues(arr){
     let newArr=[]
     if(arr.length===0){
         return newArr
     }
     if(arr[0]%2==0){
         newArr.push(arr[0])
     }
     newArr=newArr.concat(collectOddsValues(arr.slice(1)))
     return newArr
 }