//Вариант 1
function solution(str){
    str += str.length - Math.floor(str.length / 2)*2 > 0 ? '_' : ''
    return str.match(/.{1,2}/g) ? str.match(/.{1,2}/g) : [];
}

//Вариант 2
function solution(str){
    return (str.length % 2 ? str+'_' : str+'').match(/.{1,2}/g) || [];
}