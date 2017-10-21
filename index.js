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
    console.log(100 + item)
})


Array.prototype.mySort = function mySort() {
    //have no idea
}

arr.mySort()

console.log(arr)

