/*script barra de tarefas*/
const toggleButton = document.getElementById('checkbox');

const corpo2 = document.getElementById('corpo2');
let iscorpo2Visible = false;

const taskbar = document.getElementById('taskbar');
let isTaskbarVisible = false;


toggleButton.addEventListener("click", function() {
  if (corpo2.classList.contains("animation2-in")) {
    corpo2.classList.remove("animation2-in");
    corpo2.classList.add("animation2-out");
    setTimeout(function() {
    corpo2.style.display = 'none';
    iscorpo2Visible = false; }, 1000);
  } else {

    corpo2.style.display = "block";
    corpo2.classList.remove("animation2-out");
    corpo2.classList.add("animation2-in");
    iscorpo2Visible = true;
  }
});

toggleButton.addEventListener("click", function() {
  if (taskbar.classList.contains("animation-in")) {
    taskbar.classList.remove("animation-in");
    taskbar.classList.add("animation-out");
  } else {

    taskbar.style.display = "block";
    taskbar.classList.remove("animation-out");
    taskbar.classList.add("animation-in");
  }
});


// Função para cadastrar os dados
function cadastrarDados() {
  var codigoPesquisa = document.getElementById("codigoPesquisa").value;
  var produto = document.getElementById("produto").value;
  var fornecedor = document.getElementById("fornecedor").value;
  var tipoun = document.getElementById("tipoun").value;
  var valor = document.getElementById("valor").value;
  var valortotal = document.getElementById("valortotal").value;
  var qntproduto = document.getElementById("qntproduto").value;
  var data = document.getElementById("data").value;
 
  // Salvar os dados em algum lugar (por exemplo, em um objeto ou em um banco de dados)
  // Aqui, irei armazenar os dados em uma variável chamada "dadosCadastrados"
  if (typeof dadosCadastrados === 'undefined') {
      dadosCadastrados = [];
  }
  
  dadosCadastrados.push({ codigoPesquisa: codigoPesquisa, produto: produto, fornecedor: fornecedor, tipoun: tipoun, valor: valor, valortotal: valortotal, qntproduto: qntproduto, data: data});
  
  // Limpar os campos após cadastrar

  document.getElementById("codigoPesquisa").value = "";
  document.getElementById("produto").value = "";
  document.getElementById("fornecedor").value = "";
  document.getElementById("tipoun").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("valortotal").value = "";
  document.getElementById("qntproduto").value = "";
  document.getElementById("data").value = "";

  
  alert("Cadastro de Estoque:\nCódigo do Produto: " + codigo + "\nProduto: " + produto + "\nFornecedor: " + fornecedor + "\nTipo Unitário: " + tipoun + "\nValor: " + valor + "\nValor Total: " + valortotal + "\nQuantidade de Produto: " + qntproduto + "\nNúmero: " + num + "\nData de Saída: " + data) ;
}

// Função para exibir os dados cadastrados
// Função para exibir os dados cadastrados
function exibirDados() {
var codigoPesquisa = document.getElementById("codigoPesquisa").value;

// Procurar pelos dados cadastrados com o código informado
var encontrados = dadosCadastrados.filter(function(dado) {
  return dado.codigoPesquisa === codigoPesquisa;
});

if (encontrados.length > 0) {
  // Exibir os dados encontrados
  var mensagem = "Dados encontrados:\n\n";
  encontrados.forEach(function(dado) {
      mensagem += "Código do Produto: " + dado.codigoPesquisa + "\n";
      mensagem += "Produto: " + dado.produto + "\n";
      mensagem += "Fornecedor: " + dado.fornecedor + "\n";
      mensagem += "Tipo Unitário: " + dado.tipoun + "\n";
      mensagem += "Valor: " + dado.valor + "\n";
      mensagem += "Valor Total: " + dado.valortotal + "\n";
      mensagem += "Quantidade de Produto " + dado.qntproduto + "\n";
      mensagem += "Data de Saída: " + dado.data + "\n";
  });

  // Exibir um alerta com os dados encontrados
  alert(mensagem);
} else {
  // Exibir um alerta caso nenhum dado seja encontrado
  alert("Nenhum dado encontrado com o código informado.");
}
}

