const cadena = "aklsdlkadfsñljfewouptewkjhqohi";

function caracteresEnComun(str) {
    
    let frecuencia = {};
    str.replace(/ /g, "").split('').forEach(function(char){
        frecuencia[char] = (frecuencia[char] || 0) + 1;
    });
    return frecuencia;   
}

console.log(caracteresEnComun(cadena));

console.log(caracteresEnComun("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(caracteresEnComun("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
