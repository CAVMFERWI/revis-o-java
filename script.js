
function calcularMedia(n1, n2, n3) {
  var media = (n1 + n2 + n3) / 3;
  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
  return media;
}
calcularMedia(8, 7, 6);


function verificarTipo(valor) {
  console.log("A variável é do tipo " + typeof valor);
}
verificarTipo("oi");
verificarTipo(10);
verificarTipo(true);


var idade = 20;
var status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);


var numero = 7;
for (var i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}


var diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("número invalido");
}


const calcularArea = (base, altura) => base * altura;
console.log("area: " + calcularArea(5, 3));


var listaDeCompras = ["Arroz", "Feijão", "Batata"];
listaDeCompras.push("Macarrão");
listaDeCompras.unshift("Suco");
listaDeCompras.pop();
console.log(listaDeCompras);


var alunos = [
  { nome: "Ana", nota: 8.5, idade: 20 },
  { nome: "João", nota: 6.7, idade: 22 },
  { nome: "Maria", nota: 9.3, idade: 19 },
  { nome: "Carlos", nota: 5.0, idade: 21 },
  { nome: "Beatriz", nota: 7.8, idade: 20 },
];

var aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 7;
});

var nomesAlunos = alunos.map(function (aluno) {
  return aluno.nome;
});

var somaIdades = alunos.reduce(function (soma, aluno) {
  return soma + aluno.idade;
}, 0);
var mediaIdade = somaIdades / alunos.length;

var reprovado = alunos.find(function (aluno) {
  return aluno.nota < 6;
});

console.log(aprovados);
console.log(nomesAlunos);
console.log("media de idade: " + mediaIdade);
console.log(reprovado);


// exercicio 9
var titulo = document.getElementById("titulo");
var btnMudar = document.getElementById("btnMudar");
btnMudar.addEventListener("click", function () {
  titulo.innerText = "Título Alterado com Sucesso!";
});


var contagem = 0;
var contador = document.getElementById("contador");
var btnIncrementar = document.getElementById("btnIncrementar");
btnIncrementar.addEventListener("click", function () {
  contagem = contagem + 1;
  contador.innerText = contagem;
});


var paragrafos = document.querySelectorAll(".paragrafo");
var btnDestacar = document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", function () {
  paragrafos.forEach(function (p) {
    p.classList.add("destaque");
  });
});


var campoInput = document.getElementById("campoInput");
var textoRefletido = document.getElementById("textoRefletido");
campoInput.addEventListener("input", function () {
  textoRefletido.innerText = campoInput.value;
});


var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnSoma = document.getElementById("btnSoma");
var btnSub = document.getElementById("btnSub");
var btnMulti = document.getElementById("btnMulti");
var btnDiv = document.getElementById("btnDiv");
var resultado = document.getElementById("resultado");

function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}


function pegarNumeros() {
  var a = Number(num1.value);
  var b = Number(num2.value);
  return [a, b];
}

btnSoma.addEventListener("click", function () {
  var nums = pegarNumeros();
  resultado.innerText = somar(nums[0], nums[1]);
});

btnSub.addEventListener("click", function () {
  var nums = pegarNumeros();
  resultado.innerText = subtrair(nums[0], nums[1]);
});

btnMulti.addEventListener("click", function () {
  var nums = pegarNumeros();
  resultado.innerText = multiplicar(nums[0], nums[1]);
});

btnDiv.addEventListener("click", function () {
  var nums = pegarNumeros();
  if (nums[1] === 0) {
    resultado.innerText = "não pode dividir por 0";
  } else {
    resultado.innerText = dividir(nums[0], nums[1]);
  }
});
