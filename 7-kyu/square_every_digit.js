const squareDigits = num => {
    return parseInt(num
        .toString()
        .split('')
        .map(item => Math.pow(item, 2))
        .reduce((accu, item) => accu + item, ''));
}