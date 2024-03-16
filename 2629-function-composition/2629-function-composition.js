/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    functions = functions.reverse();
    
    return function(x) {
        if (functions === []) return x;
        
        let val = x;
        for (let i = 0; i < functions.length; i++) {
            val = functions[i](val);
        }
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */