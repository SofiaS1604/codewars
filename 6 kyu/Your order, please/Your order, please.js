function order(words){
    let arr = words.split(' ').map(el => a = {el:el, id:parseInt(el.match(/\d+/))}).sort((a, b) => a.id > b.id ? 1 : -1)
    return arr.map(el => el.el).join(' ')
}