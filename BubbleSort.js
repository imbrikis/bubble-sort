// ---- TEST ARRAY ---- //
let arr = [90, 6, 723, 1, 99, 4087, 33, 297, 8, 45, 963]

let arrIsUnsorted = true

const parseArray = arr => {
	arrIsUnsorted = false
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] > arr[x + 1]) {
      arrIsUnsorted = true
      let y = arr[x]
      let z = arr[x + 1]
      arr[x + 1] = y
      arr[x] = z
    } 
  }
  bubbleSort(arr)
}

const bubbleSort = arr => arrIsUnsorted ? parseArray(arr) : arr

console.log(`The unsorted array: ${arr}
Now running the bubble sort algorithm against the array...`)

bubbleSort(arr)

console.log(`The array has been sorted: ${arr}`)