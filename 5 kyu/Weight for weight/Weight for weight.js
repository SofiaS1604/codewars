function orderWeight(strng) {
    let obj = {}
    strng.split(' ').forEach(el => {
      let num = el.length > 1 ? el.split('').reduce((a, b) => +a+(+b)) : +el
      if(Object.keys(obj).includes(''+num)){
        obj[num].push(el)
      }else{
        obj[num] = [el]
      }
    })
    
    let answer = Object.values(obj).map(el => el.sort((a, b) => a > b || -(a < b)))
  
    return answer.join(' ').split(',').join(' ')
}