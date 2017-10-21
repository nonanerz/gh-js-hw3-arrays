var arr = [4,1,2,3];

Array.prototype.myForEach = function myForEach(callback) {
    for (var i = 0; i <= this.length - 1; i++) {
        callback(this[i]);
    }
}

arr.myForEach(function (item) {
    console.log('result- ' + item)
})

Array.prototype.myMap = function myMap(callback) {
    for (var i = 0; i <= this.length - 1; i++) {
        this[i] = callback(this[i]);
    }

    return this;
}

arr.myMap(function (item) {
    return 100 + item
})

console.log(arr)


var arr1 = [7,4,7,5,9,8,2,1,9,3,6];

function mySort(array) {
    for (var i = 0; i <= array.length - 2; i++) {
        var curr = array[i]
            next = array[i + 1]

        if (curr > next) {
            array[i] = next
            array[i + 1] = curr
            mySort(array)
        }
    }
    return array
}

console.log(mySort(arr1))





