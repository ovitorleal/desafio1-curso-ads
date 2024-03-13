const URL = 'http://localhost:3400/produtos/'

let listaDeProdutos = [];
let btnAdicionar = document.querySelector( '#btn-adicionar' );
let tabelaProduto = document.querySelector('table>tbody');

//obter produtos da API
function obterProdutos(){
    fetch(URL,{
        method: 'GET',
        headers: {
            'Authorization' : obterToken()
        }
    })
    .then((response) => response.json())
    .then(produtos=> {
        listaDeProdutos= produtos;
        popularTabela(produtos)
    })
    .catch((erro)=>{});
}

obterProdutos();

function popularTabela(produtos){

    //limpa tabela
    tabelaProduto.textContent = '';

    produtos.forEach(produto => {
        criarLinhaNaTabela(produto);
    });
}

function criarLinhaNaTabela(produto){
    //criar tr(linha) na tabela
    let tr = document.createElement("tr");

    //criando conteudo da tabela
    let tdId = document.createElement('td'); 
    let tdNome = document.createElement("td");
    let tdQuantidadeEstoque = document.createElement('td');
    let tdValor = document.createElement("td");
    let tdDataCadastro = document.createElement("td");
    let tdObservacao = document.createElement("td");
    let tdAcoes = document.createElement("td");

    //atualizar tds com base nos produtos
    tdId.textContent = produto.id;
    tdNome.textContent = produto.nome;
    tdQuantidadeEstoque.textContent = produto.quantidadeEstoque;
    tdValor.textContent = produto.valor;
    tdObservacao.textContent = produto.observacao;
    tdDataCadastro.textContent = new Date(produto.dataCadastro).toLocaleDateString();
    //FALTA ADICIONAR AÇÕES!!!
    
    //adicionando as td as tr

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdQuantidadeEstoque);
    tr.appendChild(tdValor);
    tr.appendChild(tdDataCadastro);
    tr.appendChild(tdAcoes);

    //adicionar tr a tabela
    tabelaProduto.appendChild(tr);






}

