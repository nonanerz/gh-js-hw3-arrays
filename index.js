var arr = [1,2,2,2,1,4];

function myForEach(callback) {
    for (var i = 0; i <= array.length - 1; i++) {
        callback(array[i]);
    }
}

myForEach(arr, function (item) {
    console.log('result- ' + item)
});

function myMap(array, callback) {
    for (var i = 0; i <= array.length - 1; i++) {
        array[i] = (callback(this[i]))
    }
}

myMap(arr, function (item) {
    return 10 + item
})

console.log(arr);

