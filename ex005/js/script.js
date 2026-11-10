// Operadores Matematicos

var v1, v2, t;
v1 = 5;
v2 = 2;

t = v1 + v2;

// ================================================

let idade, R;

idade = 24;

if (idade >= 18) {
    R = "Maior de idade";
} else {
    R = "Menor de idade";
}

document.getElementById("nome").innerHTML = R;

// ================================================

/*
var n;
n = 11;

n = n % 2;
if (n == 0) {
    n = "Par";    
} else {
    n = "Impar";
}

alert(n);
*/

var n;
n = 78;
n = n % 2;
n = (n == 0) ? "Par":"Impar";

document.getElementById("pi").innerHTML = n;