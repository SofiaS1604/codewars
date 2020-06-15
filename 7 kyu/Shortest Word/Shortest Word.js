function findShort(s){
    let i = s.split(' ')[0].length;
    s.split(' ').map((c) => (i = i > c.length ? c.length : i));
    return i;
}