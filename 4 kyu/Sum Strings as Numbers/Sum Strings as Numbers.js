function sumStrings(a,b) {
    if(a.length >= 15 && b.length >= 15){
        a = a.split("").reverse().join("");
        b = b.split("").reverse().join("");
        let k = [a,b].map((l) => (l.match(/.{1,15}/g).reverse())).map(el => el.map(j => parseFloat(j.split("").reverse().join(""))));
        k[0][1] = [k[1][0], k[1][0] = k[0][1]][0];
        return k.map(el => el.map(j => parseFloat(j)).reduce((total, amount) => total + amount)).join('')
    }else{
        return [a,b].map(el => parseFloat(el)).filter(el => !Number.isNaN(el)).reduce((total, amount) => total + amount)+'';

    }
}