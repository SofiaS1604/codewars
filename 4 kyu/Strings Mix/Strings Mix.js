function countLetter(str){
    let obj = {}
    str = str.replace(/[^a-z]+/g, '')
    
    str.split('').forEach(char => {
      if(Object.keys(obj).includes(char)){
        obj[char] += 1
      }else{
        obj[char] = 1
      }
    })
    
    return obj
}
  
function joinObjectString(obj_s1, obj_s2){
    let combinedObjects = {}
    let keysObjects = Object.keys(obj_s1).concat(Object.keys(obj_s2))
    
    Array.from(new Set(keysObjects)).forEach(key => {
        let obj = {}
        let countChar = 0
        
        if(Object.keys(obj_s1).includes(key) && Object.keys(obj_s2).includes(key)){
          if(obj_s1[key] === obj_s2[key]){
            obj['='] = key 
            countChar = obj_s1[key]
          }else{
              if(obj_s1[key] > obj_s2[key]){
                obj['1'] = key 
                countChar = obj_s1[key]
              }else{
                obj['2'] = key  
                countChar = obj_s2[key]
              }
          }
        }else{
            if (Object.keys(obj_s1).includes(key)){
              obj['1'] = key
              countChar = obj_s1[key]  
            }
            if (Object.keys(obj_s2).includes(key)){
                obj['2'] = key
                countChar = obj_s2[key]  
            }
        }
      
        if(countChar !== 1){
          if (Object.keys(combinedObjects).includes(''+countChar)){
            if(Object.keys(combinedObjects[countChar]).includes(Object.keys(obj)[0])){
              combinedObjects[countChar][Object.keys(obj)[0]].push(obj[Object.keys(obj)[0]])
            }else{
              combinedObjects[countChar][Object.keys(obj)[0]] = [obj[Object.keys(obj)[0]]]
            }
          }else{ 
            combinedObjects[countChar] = {}
            combinedObjects[countChar][Object.keys(obj)[0]] = [obj[Object.keys(obj)[0]]]
        }
      }
    })
    
    return combinedObjects;
}
  
function mix(s1, s2) {
    let obj_s1 = countLetter(s1)
    let obj_s2 = countLetter(s2)
    let answer = ''
    
    let objects = joinObjectString(obj_s1, obj_s2)
    Object.keys(objects).reverse().forEach(count => {
        Object.keys(objects[count]).forEach(group => {
            objects[count][group].sort().forEach(char => {
                 let ans_num = ':'+Array(+count).fill(char).join('')
                answer += group+ans_num+'/'
            })
          
        })
    })
    
    return answer.slice(0, -1)
}