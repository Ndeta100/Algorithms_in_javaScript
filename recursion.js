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