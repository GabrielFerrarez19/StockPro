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


const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});


// Função para cadastrar os dados
function cadastrarDados() {
  var codigoPesquisa = document.getElementById("codigoPesquisa").value;
  var marcaproduto = document.getElementById("marcaproduto").value;
  var nomeproduto = document.getElementById("nomeproduto").value;
  var valorproduto = document.getElementById("valorproduto").value;
  var valorcomercial = document.getElementById("valorcomercial").value;
  
 
  // Salvar os dados em algum lugar (por exemplo, em um objeto ou em um banco de dados)
  // Aqui, irei armazenar os dados em uma variável chamada "dadosCadastrados"
  if (typeof dadosCadastrados === 'undefined') {
      dadosCadastrados = [];
  }
  
  dadosCadastrados.push({ codigoPesquisa: codigoPesquisa, marcaproduto: marcaproduto, nomeproduto: nomeproduto, valorproduto: valorproduto, valorcomercial: valorcomercial});
  
  // Limpar os campos após cadastrar

  document.getElementById("codigoPesquisa").value = "";
  document.getElementById("marcaproduto").value = "";
  document.getElementById("nomeproduto").value = "";
  document.getElementById("valorproduto").value = "";
  document.getElementById("valorcomercial").value = "";
  

  alert("Cadastro de Produto:\nNome do Produto: " + nomeproduto + "\nMarca do Prodtuo: " + marcaproduto + "\nCódigo do Produto: " + codigoPesquisa + "\nValor do Produto: " + valorproduto + "\nValor Comercial: " + valorcomercial);
}

// Função para exibir os dados cadastrados
// Função para exibir os dados cadastrados
function exibirDados() {

var codigoPesquisa = document.getElementById("codigoPesquisa").value;

// Procurar pelos dados cadastrados com o código informado
var encontrados = dadosCadastrados.filter(function(dado) {
  return dado.codigoPesquisa == codigoPesquisa;
});

if (encontrados.length > 0) {
  // Exibir os dados encontrados
  var mensagem = "Dados encontrados:\n\n";
      encontrados.forEach(function(dado) {
      mensagem += "Nome do Produto: " + dado.nomeproduto + "\n";
      mensagem += "Marca do Produto: " + dado.marcaproduto + "\n";
      mensagem += "Código do Produto: " + dado.codigoPesquisa + "\n";
      mensagem += "Valor do Produto: " + dado.valorproduto + "\n";
      mensagem += "Valor Comercial: " + dado.valorcomercial + "\n";
      
  });

  // Exibir um alerta com os dados encontrados
  alert(mensagem);
} else {
  // Exibir um alerta caso nenhum dado seja encontrado
  alert("Nenhum dado encontrado com o código informado.");
}
}