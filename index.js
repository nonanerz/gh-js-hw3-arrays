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
    var reverse = null

    for (var i = 1; i <= this.length; i++) {

        var curr = this[i -1]
        var next = this[i]

        if (curr > next) {

            if (callback) {
                var result = callback(curr, next)

                if (result > 0) {
                    this[i - 1] = next
                    this[i] = curr
                    i = 0
                } else if (result < 0) {
                    this[i - 1] = curr
                    this[i] = next
                }

            } else {
                this[i - 1] = next
                this[i] = curr
                i = 0

            }
        }

        if (callback && curr < callback(curr, next) && next < callback(curr, next)) {
            reverse = true
        }
    }
    return reverse ? this.reverse() : this
}



console.log(arr1.mySort(function(a, b){return a + b}))
console.log(arr1.mySort(function(a, b){return a - b}))







