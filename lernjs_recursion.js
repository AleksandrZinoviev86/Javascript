const _obj = {
    sumTo_0: function(x){
        return x == 0 ? x : x += this.sumTo_0(x - 1);
    },
    sumTo_1: function(x){
        let res = 0
        for(let i = 1; i <= x; ++i){
            res += i;
        }
        return res
    },
    sumTo_2: function(x){
        return ((1 + x)/2)*x
    },
    fractals: function(x) {
        return x == 1 ? x : x * this.fractals(x -1);
    }
}
console.log(_obj.fractals(2));
console.log(_obj.fractals(4));
console.log(_obj.fractals(6));