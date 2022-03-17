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

//Big O notation is a way to formalize fuzzy counting
//O(n)
function countingAllPairs(n){
    for(let i=0; i<n; i++){
        for(let j=0;j<n; j++){
           console.log(i, j)
        }
    }
} 
//O(1)
function logAtMost5(n){
    for(var i=1; i<Math.min(5,n); i++){
        console.log(i)
    }
}
//O(n)
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
 console.log( onlyElementsAtEvenIndex([1,2,3,4,5,6,76,7,89,5,8,4,3,6,3,663,35,7,77]))