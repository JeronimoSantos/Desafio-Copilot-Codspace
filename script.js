// VAMOS RECEBER DOIS DADOS DIFERENTES DO USUÁRIO E CONCATENA-LOS EM UMA ÚNICA STRING

// DADOS DE ENTRADA
let nomeUsuario = "Jerônimo";
let sobrenomeUsuario = "Santos Rodrigues";

// PROCESSAMENTO
const nomeCompleto = `Meu nome é ${nomeUsuario} ${sobrenomeUsuario}.`;

// SAÍDA
console.log(nomeCompleto);


// AGORA VAMOS SOLICITAR UMA STRING E UM NÚMERO INTEIRO COMO ENTRADA. DEPOIS TEREMOS QUE RETORNAR A STRING REPETIDA O NÚMERO DE VEZES INFORMADO.

// DADOS DE ENTRADA
let nomeUsuario2 = "Jerônimo";
let senha = 3;

// PROCESSAMENTO E SAÍDA
for(i = 0; i < senha; i++) { console.log(nomeUsuario2) };


// VAMOS SOLICITAR COMO ENTRADA DOIS NÚMEROS E DEPOIS VAMOS REALIZAR UMA OPERAÇÃO SIMPLES ENTRE ELES.

// DADOS DE ENTRADA
let num1 = 25;
let num2 = 50;
let operador = "/";

// PROCESSAMENTO E SAÍDA
if (operador == "+") {
    console.log(num1 + num2);
} else if (operador == "-") {
    console.log(Math.abs(num1 - num2));
} else if (operador == "*") {
    console.log(num1 * num2);
} else if (operador == "/") {
    console.log(num1 / num2);
} else {
    console.log("Operação invalida")
};


// COMO ENTRADA, RECEBA UM NÚMERO INTEIRO E VERIFIQUE SE ELE É PAR OU ÍMPAR.

// DADOS DE ENTRADA
let num3 = 10;

// PROCESSAMENTO E SAÍDA
if (num3 % 2 === 0) {
    console.log(`${num3} é par`);
} else {
    console.log(`${num3} é impar`);
}

// AGORA VAMOS CALCULAR A MÉDIA DE TRÊS NOTAS FORNECIDAS NA ENTRADA DO USUARIO.

// DADOS DE ENTRADA
let num4 = [15, 18, 21];

// PROCESSAMENTO
const soma = num4.reduce(function(total, num4) {
    return total + num4
}, 0);

const media = soma / num4.length;

// SAÍDA
console.log(`A média é: ${media}`);