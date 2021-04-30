let decipherThis = (str) => {
    return str.split(' ').map(el => {
        let newEl = String.fromCharCode(parseInt(el.match(/\d+/))) + el.split(parseInt(el.match(/\d+/)))[1];
        let k = newEl.split("");
        [k[1], k[k.length - 1]] = [k[k.length - 1], k[1]];
        k = k.map(l => l !== undefined ? l : "").join("");
        return k
    }).join(" ")
}