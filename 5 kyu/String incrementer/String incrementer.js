function incrementString(str) {
    let number = str.match(/(\d+)/g) === null ? 1 : +str.match(/(\d+)/g)[0] + 1;
    let string = str.match(/(\d+)/g) === null ? str : str.split(str.match(/(\d+)/g)[0])[0]
    let numStr = str.split(string)[1] ? str.split(string)[1].substr(0, str.split(string)[1].length - String(number).length) : ''
    return (string + (numStr === undefined ? '' : numStr) + (str.split(string)[1] === '0' && string.length === 0 ? '0' : '') + number)
}