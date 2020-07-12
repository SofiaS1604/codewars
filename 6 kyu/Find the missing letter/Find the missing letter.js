function findMissingLetter(array)
{
    let english = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    english = array[0] === array[0].toLowerCase() ?
        english.slice(english.indexOf(array[0]), english.indexOf(array[0]) + array.length + 1) :
        english.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).slice(english.indexOf(array[0].toLowerCase()), english.indexOf(array[0].toLowerCase()) + array.length + 1);

    let i = 0;
    let ar;

    english.forEach(el => {
        if(el !== array[i]){
            ar = el;
            return false
        }

        i++;
    });

    return ar;
}