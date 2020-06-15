function squareDigits(num){
    return Number((num + '').split('').map((c) => (Math.pow(parseInt(c), 2))).join(''));
}