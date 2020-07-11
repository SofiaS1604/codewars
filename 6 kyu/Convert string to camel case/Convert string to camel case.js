function toCamelCase(str){
    return str === '' ? '' :
        str.split(/[_\/ -]/)
            .map((c, i) => (`${i > 0 ? c.split('')[0].toUpperCase() : c.split('')[0]}${c.substr(1)}`)).join('');
}