var HelloWorld = "Olá Mundo";

//aqui eu escrevo no console
console.log("HELLO WORLD!");
console.log(HelloWorld); 
/**
 * comentário por bloco
 */

/*let: leva em conta o escopo em que foi definida*/
let a = 10;
const b = "10";

console.log(a == b || typeof a == 'string');
/* constante é constante, variável é variável */
/*const: declara constantes */

/**
 * typeOf - tipo de dado variável
 * variáveis são fracamente tipadas
 */

let cor = "amarelo";

if(cor === "azul"){
    console.log("siga");
}else if (cor === "amarelo"){
    console.log("atenção");
}else if(cor === "vermelho"){
    console.log("pare");
}