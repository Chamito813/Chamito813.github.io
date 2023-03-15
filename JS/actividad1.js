//Ejercicio 1
function primerNumeroQueNoSeRepite(str){
    const freq = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        // Al utlizar un tipo de "diccionario" utilizamos el operador condicional terciario 
        // para determinar si el caracter está en este, si es así este le suma 1 a ese caracter,
        // si no es así este le asigna el valor 1.
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }

    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        // Busca el caracter que tenga asignado el valor 1, si lo encuentra va a hacer el return
        if(freq[str[i]] === 1){
            return char;
        }
    }
    //Si no encuentra ningun valor que tenga asignado el valor 1, va a regresar "null"
    return null;
}

console.log('Ejercicio 1: '+ primerNumeroQueNoSeRepite('abacddbec'));


// Ejercicio 7
function factoriza(num){
    let lista = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            lista.push(i);
        }
    }
    return lista;
}

console.log('Actividad 7: [' + factoriza(12)+']');


// Ejercicio 14
function PotenciaDeDos(num){
    if(num<1){
        return false;
    }
    while(num > 1){
        if(num % 2 !== 0){
            return false;
        }
        num /= 2;
    }
    return true;
}

console.log('Actividad 14: ' + PotenciaDeDos(4));