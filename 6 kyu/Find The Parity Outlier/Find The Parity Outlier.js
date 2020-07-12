function findOutlier(integers){
    let filter1 = integers.filter(e => e / 2 - Math.floor(e / 2) === 0);
    let filter2 = integers.filter(e => e / 2 - Math.floor(e / 2) > 0);
    return filter1.length === 1 ? filter1[0] : filter2[0]
}