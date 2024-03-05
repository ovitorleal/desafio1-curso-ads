/**
 * Preciso capturar o email e senha que o usuario digitou quando 
 * eu clicar no botão entrar.
 * 
 * Verificar se o email ou a senha estão errados.
 * 
 * Se tiver correto, entrar na tela principal
 * Se tiver errado, mandar mensagem e continuar na tela de login
 * 
 */

const EMAIL = "admin@admin.com";
const SENHA = '123456';

let campoEmail = document.querySelector("#email");
let campoSenha = document.querySelector('#senha');
let btnEntrar = document.getElementById(`btn-entrar`);

btnEntrar.addEventListener("click", () => {
    // Capiturando os valores digitados pelo usuario
    let emailDigitado = campoEmail.value.toLowerCase();
    let senhaDigitada = campoSenha.value;

    // Validando o email e senha
    if(!emailDigitado || !senhaDigitada){
        alert("O campo de e-mail e senha não podem ficar vazios. Por favor preencha todos os campos.");
        return;
    }

    if(emailDigitado != EMAIL || senhaDigitada != SENHA){
        alert('E-mail ou Senha incorretos! Tente novamente');
        return;
    }

    //  Acessar o sistema
    location.href="home.html"
    window.open('home.html', '_self');

    autenticar(emailDigitado, senhaDigitada);

});


function autenticar (email, senha){

    //1° Preciso saber qual a URL da API
    const URL = 'http://localhost:3400/login';

    //2° Criar um request para a api
    fetch(URL, {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, senha})
    })
    //3° Se der certo, direcionar para a tela de home
    .then(response => response = response.json())
    .then(response => {
        console.log(response)

        if(!!response.mensagem){
            alert(response.mensagem);
            return;
        }

        window.open('home.html', '_self');
    })
    //4° Se der errado, mandar mensagem para o usuario.
    .catch(erro => {
        console.log(erro)
    })

    
}
