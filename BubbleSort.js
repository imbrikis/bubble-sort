// ---- TEST ARRAY ---- //
var arr = [90, 6, 723, 1, 99, 4087, 33, 297, 8, 45, 963]

var isUnsorted = true

function parseArray(arr) {
	isUnsorted = false
  for (var x = 0; x < arr.length; x++) {
    if (arr[x] > arr[x + 1]) {
      isUnsorted = true
      var y = arr[x]
      var z = arr[x + 1]
      arr[x + 1] = y
      arr[x] = z
    } 
  }
  bubbleSort(arr)
}

function bubbleSort(arr) {
  if (isUnsorted) {
  	parseArray(arr)
  } else {
  	return arr
  }
}

bubbleSort(arr)
console.log(arr)
