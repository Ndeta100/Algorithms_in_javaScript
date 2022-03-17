//Counting operations 
// Testing performance with this two functions
function addUpp(n){
    let total=0
    for(let i=1; i<=n; i++){
        total +=i
    }
    return total
}

function addUpp1(n){
    return n*(n+1)/2
}
console.log( addUpp(5))