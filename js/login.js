/* capturar o email e senha que o usuario entrar ao clicar no botao.

verificar se o email ou a senha estal errados

se tiver correto, entrar na tela principal.
se tiver errado, mandar msg e continuar na tela de login*/

const CPF = "14112623798";
const SENHA= "123";

var campoCpf = document.getElementById('cpf');  // pega o input do CPF
var campoSenha = document.getElementById('senha');   //pega o input da Senha
var botaoEntrar = document.getElementById('botao-entrar'); //pega o que tava na tela quando clicar.

botaoEntrar.addEventListener('click', ()=>{
    let cpfDigitado = campoCpf.value;
    let  senhaDigitada = campoSenha.value;


    //validação cpf e senha
    if(!cpfDigitado ||  !senhaDigitada) {
        alert("Os campos CPF ou SENHA tem que ser preenchidos!")
        return;
    }
    
    if(cpfDigitado != CPF || senhaDigitada != SENHA){
        alert('ATENÇÃO - CPF ou Senha incorretos! Tente novamente');
        return;
    }

    //acessar o sistema
    location.href="home.html"

    window.open('home.html', '_self')

})

    
