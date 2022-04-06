//Like merge sort, exploit the fact that arryas of 0 or 1 elements are always sorted 
//Works by selecting one element (called the "Pivot") and finding  the index where the pivot  should  end up in the sorted array
//Once the epivot is positioned appropriately, quick sort can be applied on either of the pivot 


//Quick sort 
//In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either of a pivot 
//Given an array, this helper function should designate an element as the pivot 
//It should then rearrange elements in the array so that all values less than the pivot are movedd to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
//The order of elements on either side of the pivot doesn't matter!
//The helpeer should do this in place, that is, it should not create anew array
//When complete, the helper should return the index of the pivot


//Pivot helper pseudocode

//It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
//Grab the pivot from the start of the array
//Store the current pivot index in a variable (this will keep track of where the pivot should end up)
//Loop through the array from the start until the end
        //If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

//Swap the starting element (i.e the pivot) with the pivot index
//Return the pivot index

function pivot(arr, start=0){
function swap(arr, i ,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
let pivot=arr[start]
let swapIndex=start
for(let i=start+1; i<arr.length; i++){
    if(pivot>arr[i]){
        swapIndex++
        swap(arr,swapIndex,i)
    }
}
swap(arr, start, swapIndex)
console.log(arr)
return swapIndex
}

//Quick sort pseudocode
//Call the pivot  helper on the array
//When the helper returns to the updated pivot index, recursively call the pivot helper on the subarray to the left of the index, and he subarray to the right of that index
//Your base case occurs when you consider a subarray with less than 2 elements 

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIndexd=pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndexd)
        //right
        quickSort(arr,pivotIndexd+1, right)
    }
    return arr
}