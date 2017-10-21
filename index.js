// var arr = [4,1,2,3];
//
// Array.prototype.myForEach = function myForEach(callback) {
//     for (var i = 0; i <= this.length - 1; i++) {
//         callback(this[i]);
//     }
// }
//
// arr.myForEach(function (item) {
//     console.log('result- ' + item)
// })
//
// Array.prototype.myMap = function myMap(callback) {
//     for (var i = 0; i <= this.length - 1; i++) {
//         this[i] = callback(this[i]);
//     }
//
//     return this;
// }
//
// arr.myMap(function (item) {
//     return 100 + item
// })
//
// console.log(arr)


var arr1 = [4,5,2,3];

Array.prototype.mySort = function mySort(callback) {
    for (var i = 0; i <= this.length - 2; i++) {
        var curr = this[i]
            next = this[i + 1]
    }
}

arr1.mySort()


console.log(arr1)

