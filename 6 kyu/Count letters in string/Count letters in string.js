function letterCount(s){
    let object = {};
    s.split('').map(el => el ? object[el] = s.split(el).length - 1 : null)
    return object
}