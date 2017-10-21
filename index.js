var arr = [1,2,2,2,1,4];

Array.prototype.myForEach = function myForEach(callback) {
    for (var i = 0; i <= this.length - 1; i++) {
        callback(this[i]);
    }
}

arr.myForEach(function (item) {
    console.log('result- ' + item)
})

