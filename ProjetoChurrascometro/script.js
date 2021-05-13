//Pegando as tags
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


//Pegando os valores
function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePorPessoa(duracao) * adultos +
    (carnePorPessoa(duracao) / 2) * criancas;
  let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  let refrigerante =
    bebidas(duracao) * adultos + (bebidas(duracao) / 2) * criancas;
 
      resultado.innerHTML = `<h2>Você vai precisar de: </h2>`
      resultado.innerHTML += `<p><img src="./images/carne.png" alt=""> ${qtdTotalCarne / 1000}kg de Carne</p>`;
      resultado.innerHTML += `<p><img src="./images/cerveja.png" alt=""> ${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`;
      resultado.innerHTML += `<p><img src="./images/refrigerante.png" alt=""> ${Math.ceil(refrigerante / 2000)} garrafas de Bebida </p>`;   
         
  }
function carnePorPessoa(duracao) {
  let validarCarne = duracao >= 6 ? 650 : 400
  return validarCarne
}
function cervejaPorPessoa(duracao) {
  let validarCerveja = duracao >= 6 ? 2000 : 1200
  return validarCerveja
}
function bebidas(duracao) {
  let validarBebidas = duracao >= 6 ? 1500 : 1000
  return validarBebidas
  }
