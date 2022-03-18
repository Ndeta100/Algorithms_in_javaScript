//Counting operations 
// Testing performance with this two functions
function addUpp(n){
    let total=0
    for(let i=1; i<=n; i++){
        total +=i
    }
    return total
}
console.log(addUpp(5))

function addUpp1(n){
    return n*(n+1)/2
}
console.log( addUpp(5))

//Big O notation is a way to formalize fuzzy counting
//TIME COMPLEXITY
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

 //O(n squared)
 function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
console.log(subtotals([1,2,3,4,5,6,76,7,89,5,8,4,3,6,3,663,35,7,77]))

//SPACE COMPLEXITY
function sum(arr){
    let total=0
    for (let i=0; i<arr.length; i++){
      total +=arr[i]
    }
    return total
}
function double(arr){
    let newArr=[]
    for(let i=0; i<arr.length; i++){
      newArr.push(2*arr[i])
    }
    return newArr
}
