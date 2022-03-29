//Elementary sorting algorithms
 //What is sorting
        //Sorting is the process of rearranging the items in a collection (e.g ann array) so that the items are in some kind of order


//WHY DO WE NEED TO LEARN THIS
        //Sorting is an incredibly common task, so it's good to know how it works
        //There are many differnet ways to sort things, and different techniques have their own advantages and disadvantages 

function numCompare(a, b){
    return b-a
}
[3,45,2,5,7,3,23].sort(numCompare)     

//Bubble sort overview
//A sorting algorithm  where the largest value bubble up to the top
function swap(arr, index1, index2){
    let temp=arr
    arr[index1]=arr[index2]
    arr[index2]=temp
}

//Start looping from with a variable called i the end of the array towards the beginning 
//Start an inner loop with a variable called j from the beginning untill i-1
//if arr[i] id greater than arr[j+1], swap those two values
//Return the sorted array


//less optimised version
function bubbleSort1(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                //Swap
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
bubbleSort1([2,4,5,6,44,7,35,356,7,88])

//Optimised approach
function bubbleSort(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }

    return arr
}