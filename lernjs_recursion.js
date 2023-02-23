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
    },
    fib: function(x){
        if(x == 0 || x == 1){
            return x
        } else {
            let res_1 = 1
            let res_2 = 1
            for(let i = 3; i <= x; i++){
                res_1 = res_1 + res_2
                res_2 = res_1 - res_2 
            }
            return res_1
        }
    },
    fib_2: function(x){
        x <= 1 ? x : this.fib_2(x - 1) + this.fib_2(x - 2)
    },
    printList: function(list){
        
        if(list.next == null){
            console.log(list.value)
            return  list.value
        } else {
            console.log(list.value)
            return this.printList(list.next)
        }
    }
}
