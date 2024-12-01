# Resolvendo Códigos em JavaScript com o GitHub Codespace e ChatGPT

## 1 - Concatenando Dados
VAMOS RECEBER DOIS DADOS DIFERENTES DO USUÁRIO E CONCATENA-LOS EM UMA ÚNICA STRING.

### O que Aprendemos?
- Manipulção de Strings (string)
- Concatenação
- Entrada de Dados
- Utilização eficiente do ChatGPT

```
let nomeUsuario = "Jerônimo";
let sobrenomeUsuario = "Santos Rodrigues";
```
```
const nomeCompleto = `Meu nome é ${nomeUsuario} ${sobrenomeUsuario}.`;
```

```
console.log(nomeCompleto);
```

## 2 - Repetindo Textos
AGORA VAMOS SOLICITAR UMA STRING E UM NÚMERO INTEIRO COMO ENTRADA. DEPOIS TEREMOS QUE RETORNAR A STRING REPETIDA O NÚMERO DE VEZES INFORMADO.

### O que Aprendemos?
- Manipulação de Strings (string e number)
- Números Inteiros
- Múltiplas Repetições (for)
- Entrada de Dados
- Utilização eficiente do ChatGPT

```
let nomeUsuario2 = "Jerônimo";
let senha = 3;
```

```
for(i = 0; i < senha; i++) { console.log(nomeUsuario2) };
```

## 3 - Operações Matemáticas Simples
VAMOS SOLICITAR COMO ENTRADA DOIS NÚMEROS E DEPOIS VAMOS REALIZAR UMA OPERAÇÃO SIMPLES ENTRE ELES.

### O que Aprendemos?
- Operações Matemáticas Básicas
- Entrada de Dados
- Utilização eficiente do ChatGPT

```
let num1 = 25;
let num2 = 50;
let operador = "/";
```

```
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
```
## 4 - Verificando Números Pares e Ímpares 
COMO ENTRADA, RECEBA UM NÚMERO INTEIRO E VERIFIQUE SE ELE É PAR OU ÍMPAR.

### O que Aprendemos?
- Utilização de Condicionais (if, else)
- Operador de Módulo (%)
- Utilização eficiente do ChatGPT

```
let num3 = 10;
```

```
if (num3 % 2 === 0) {
    console.log(`${num3} é par`);
} else {
    console.log(`${num3} é impar`);
}
```

## 5 - Calculando Média de Notas
AGORA VAMOS CALCULAR A MÉDIA DE TRÊS NOTAS FORNECIDAS NA ENTRADA DO USUARIO.

### O que Aprendemos?
- Uso de Variáveis para Armazenar Dados (let, const)
- Utilização de Métodos (reduce, length)
- Funções Anonimas
- Utilização eficiente do ChatGPT

```
let num4 = [15, 18, 21];
```

```
const soma = num4.reduce(function(total, num4) {
    return total + num4
}, 0);

const media = soma / num4.length;
```

```
console.log(`A média é: ${media}`);
```
