var arr = [4,1,2,3];

Array.prototype.myForEach = function myForEach(callback) {
    for (var i = 0; i <= this.length - 1; i++) {
        callback(this[i], i, this);
    }
}

arr.myForEach(function (item) {
    console.log('result- ' + item)
})

Array.prototype.myMap = function myMap(callback) {
    for (var i = 0; i <= this.length - 1; i++) {
        this[i] = callback(this[i], i, this);
    }

    return this;
}

arr.myMap(function (item) {
    return 100 + item
})

console.log(arr)


var arr1 = [2,3,1,7,4,6];

Array.prototype.mySort = function mySort(callback) {
    var reverse = false

    for (var i = 0; i <= this.length - 1; i++) {

        var curr = this[i]
        var next = this[i + 1]

        if (curr > next) {
            if (callback) {
                var result = callback(curr, next)

                if (result === curr + next) {
                    reverse = true
                }

                if (result > 0) {
                    this[i] = next
                    this[i + 1] = curr
                    i = -1
                } else if (result < 0) {
                    this[i] = curr
                    this[i + 1] = next
                    i = -1
                }

            } else {
                this[i] = next
                this[i + 1] = curr
                i = 0

            }
        }
    }
    return reverse ? this.reverse() : this
}



console.log(arr1.mySort(function(a, b){return a + b}))
console.log(arr1.mySort(function(a, b){return a - b}))
console.log(arr1.sort(function(a, b){return a + b}))
console.log(arr1.mySort())





