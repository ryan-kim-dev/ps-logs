/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // this가 배열이 된다.
    if (!this.length) return -1;
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */