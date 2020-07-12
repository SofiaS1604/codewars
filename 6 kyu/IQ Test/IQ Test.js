function iqTest(numbers){
    numbers = numbers.split(' ');
    let filter1 = numbers.filter(e => e / 2 - Math.floor(e / 2) === 0);
    let filter2 = numbers.filter(e => e / 2 - Math.floor(e / 2) > 0);
    return filter1.length === 1 ? numbers.indexOf(filter1[0]) + 1 : numbers.indexOf(filter2[0]) + 1;
}