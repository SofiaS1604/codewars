function arrayDiff(a, b) {
    return a.filter(el => b.indexOf(el) === -1);
}