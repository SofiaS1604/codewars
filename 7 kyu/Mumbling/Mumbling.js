function accum(s) {
    let count = 1;
    let string = '';
    let array = Array.from(s.toLowerCase());
    let i = 1;

    array.forEach((text) => {
        for(let j = 1; j <= i; j++){
            if(j === 1){
                string += text.toUpperCase();
            }else{
                string += text;
            }
        }

        string += '-';
        i++
    })

    return string.slice(0, -1);;
}