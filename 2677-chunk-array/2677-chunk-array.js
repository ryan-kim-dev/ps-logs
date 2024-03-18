/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (!arr.length) return arr;
    let answerArr = [];
    let temp = [...arr];

    function recursive(array) {
        if (!array.length) return;
        if (array.length < size) return answerArr.push(array);
        let el = array.splice(0, size);
        answerArr.push(el);
        return recursive(array);
    }
    recursive(temp);

    return answerArr;
};
