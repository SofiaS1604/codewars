function removeDuplication(arr){
    return arr.filter((e, i, a) => a.indexOf(e) === i && a.indexOf(e, i + 1) === -1);
}