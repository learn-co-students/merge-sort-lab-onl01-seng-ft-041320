function findMinAndRemoveSorted(array){
    let min = array[0]
    let index = 0
    array.forEach( (element, i) => {
        if (element < min){
            min = element
            index = i
        }
    })
    array.splice(index, 1)
    return min
}


function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length !== 0 && secondHalf.length !==0){
        if(firstHalf[0] < secondHalf[0]){
            sorted.push(firstHalf.shift())
        } else {
            sorted.push(secondHalf.shift())
        }
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let sorted = []
    while(array.length > 0){
        sorted.push(findMinAndRemoveSorted(array))
    }
    return sorted
}
