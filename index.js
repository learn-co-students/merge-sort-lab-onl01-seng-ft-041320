
function findMinAndRemoveSorted(array) {
  if (array.length <= 1) {
    return array[0];
  }
  else {
    if (array[0] < array[1]) {
      return findMinAndRemoveSorted(array.splice(0, 1))
    }
    else if (array[0] > array[1]) {
      return findMinAndRemoveSorted(array.splice(1, 1))
    }
  }
}

function findMinComparator(arr1, arr2) {
  let min1 = arr1[0]
  let min2 = arr2[0]

  if (min1 < min2) {
    return arr1.shift()
  }
  else {
    return arr2.shift()
  }
}

function merge(arr1, arr2) {
  let sorted = []

  let currentMin;
  while( arr1.length !== 0 && arr2.length !== 0) {
    currentMin = findMinComparator(arr1, arr2)
    sorted.push(currentMin)
  }

  return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if(array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}