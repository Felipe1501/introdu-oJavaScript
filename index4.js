let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(3, 2, "*");

console.log(resultado);

/*(function(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})(3, 2, "*");

let resultado = calc(3, 2, "*");

console.log(resultado);*/

//DOM = a estrutura como o HTML é formado

//Eventos = Ações realizadas na aplicação que dispara rotinas
