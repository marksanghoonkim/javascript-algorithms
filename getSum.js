/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    console.log('a =', a, 'b =', b);
    var x = a ^ b;
    var y = a & b;
    console.log('x =', x, 'y =', y);
    if (y == 0) return x;
    else return getSum(x, y << 1);
};

getSum(4,5)