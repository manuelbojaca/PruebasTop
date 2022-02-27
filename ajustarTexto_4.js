function ajustarTexto (str, len) {
    if (len > str.length){
        let n = (str.length === 0) ? 1 : len - str.length;
        for (let i = 0; i < n; i++){
            str = str + ' ';
        }
    }
    return str.substr(0, len);
}

console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "
