function towerBuilder(nFloors) {
    let arr = new Array(nFloors).fill('');
    arr.map((el, index) => arr[index] = index === 0 ? '*' : arr[index-1]+'**')

    arr.map((el, index) => {
        let idElement = (nFloors * 2 - index * 2) / 2 - 1
        arr[index] = ' '.repeat(idElement) + arr[index] + ' '.repeat(idElement)})
    return arr
}