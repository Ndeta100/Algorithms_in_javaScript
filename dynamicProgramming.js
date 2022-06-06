//Implementing fibonaaci sequence

function fib(n){
    if(n<=2) return 1
    return fib(n-1)+fib(n-2)
}
//OPTIMIZING AND MAKING IT FASTER
function fibOptimized(n, memo=[]){
    if(memo[n]=== undefined) return memo[n]
    if(n<=2) return 1
    let res=fibOptimized(n-1, memo)+ fibOptimized(n-2, memo)
    memo[n]=res
    return res
}