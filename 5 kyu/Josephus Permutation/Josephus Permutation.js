function josephus(items, k) {
    let newArr = [];
    let counter = 0;
    let index = 0;

    while (items.length > 0) {
        index = index % items.length;
        if (++counter === k) {
            newArr.push(items.splice(index, 1)[0]);
            counter = 0;
            index--;
        }

        index++;
    }

    return newArr;
}
