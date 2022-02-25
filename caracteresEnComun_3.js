const cadena = 'aklsdlkadfsñljfewouptewkjhqohi';

function caracteresEnComun (str2, str) {
    str = str + str2;
    const arr = [];
    let cache = {};
    let i = 0, j = 0;
    str.replace(/ /g, '').split('').forEach(function (char){
        if ((cache[char] && i >= (str.length - str2.length))){
            if (!(arr.indexOf(char)+1)){
                arr[j] = char;
                j++;
            }
        }else {
            cache[char] = 1;
        }
        i++;
    });
    return arr;   
}

console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("aaaaeeeeeiiiiioooouuuuu", "aaeeiioouu")); // []

/*
   str = str + str2;
    let cache = {};
    for (let i = 0; i < str.length; i++){
        if(i < )
    }  
*/