/* Váriaveis
var --> Variável de escopo global
let --> Variável de escopo local
const --> Variável constante que não muda seu valor no decorrer
*/

/*
Acessando o DOM :
JavaScript --> É Case Sensitive --> reconhece e diferencia letras maiusculas e minusculas
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() --> É possível selecionar por tag, id e classe (moderno e elegante)
*/

let nome = window.document.getElementById('nome') 
let email = document.querySelector('#email') /* OU querySelector('input#email') */
let assunto = document.querySelector('#assunto')

/*Variáveis booleanas */
let nomeOk = false /*Vai ser usado lá em baixo para verificar se os campos estão preenchidos */
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/*Alerando o DOM */
nome.style.width = '100%' /* Pode fazer via CSS ou através do DOM com JavaScript */
email.style.width = '100%'

/*Funções --> podem ou não ter um nomer */
function validaNome() { /*Função que valida nome */

   let txtNome = document.querySelector('#txtNome') /* trazer a <div id='txtNome'></div> */
   if (nome.value.length < 3) { /*value --> valor que tem dentro do nome, dentro do input, length --> tamanho */
      txtNome.innerHTML = 'Nome Inválido' /* innerHTML --> colocar uma valor dentro dessa div lá no HTML */
      txtNome.style.color = 'red' /* Muda a cor da mensagem */
   } else {
      txtNome.innerHTML = 'Nome Válido'
      txtNome.style.color = 'green' /* Muda a cor da mensagem */
      nomeOk = true
   }

}

/*Validação do campo e-mail */
function validaEmail() {

   let txtEmail = document.querySelector('#txtEmail') /* Trazer a <div id='txtEmail'></div> */
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) { /* indexOf --> Saber se tem um caractere especifico. Use-se esse método */
      txtEmail.innerHTML = 'E-mail inválido' /* innerHTML --> colocar uma valor dentro dessa div lá no HTML */
      txtEmail.style.color = 'red' /* Muda a cor da mensagem */
   } else {
      txtEmail.innerHTML = 'E-mail válido' /* innerHTML --> colocar uma valor dentro dessa div lá no HTML */
      txtEmail.style.color = 'green' /* Muda a cor da mensagem */
      emailOk = true
   }
}

/* indexOf retorna 1 ou -1 --> 1 existe o elemento e -1 não existe o elemento, nesse caso é um caractere */

/*Validando o assunto para não ter mais que 100 caracteres */
function validaAssunto() {
   let txtAssunto = document.querySelector('#txtAssunto') /* Trazer a <div id='txtAssunto'></div> */

   if (assunto.value.length >= 100) {
      txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block' /*display --> é como uma elemento aparece dentro da minha página / Quero que o texto apareça */
   } else {
      txtAssunto.style.display = 'none' /*display --> não quero que o texto aparece */
      assuntoOk = true
   }
}

/*Verificar se todos os campos estão validados e dando ok (FAKE: Vai mostrar um alert) */
function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert ('Formulário enviado com sucesso!')
   } else {
      alert ('Preencha o formulário corretamente antes de enviar...')
   }
}


/* Dando Zoom no mapa  e voltando o mesmo ao tamanho original */
function mapaZoom() {
   mapa.style.width = '500px' /* Aumenta a largura */
   mapa.style.height = '400px' /* Aumenta a altura */
}

function mapaNormal() {
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}