var orderedCount = function (text) {
    let array = [];
    text.split('').filter((e, i, arr) => (arr.indexOf(e) === i ? array.push([e, arr.filter(p => p === e).length]) : null));
    return array;
}