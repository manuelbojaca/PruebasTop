const cadena = "aklsdlkadfsñljfewouptewkjhqohi";

function numDuplicados(str) {

    let duplicados = {};
    let contador = 0; 
    str.split('').forEach(function(char){
        duplicados[char] = (duplicados[char] || 0) + 1;
        if (duplicados[char] === 2) {contador++;}
    });
    return contador;
}

console.log(numDuplicados(cadena));
console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 

