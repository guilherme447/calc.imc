const inputValor = document.querySelector("#valor--conta")
const inputPessoas = document.querySelector("#num--pessoa")
const inputGorjeta = document.querySelector("#gorjeta")
const btnCalc = document.querySelector("#btn--calc")
const resulT = document.querySelector(".resultado")

btnCalc.addEventListener('click', function(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();
})

btnCalc.addEventListener("click", calcular)

function calcular() {
    let valor = inputValor.value
    let pessoa = inputPessoas.value
    let gorjeta = inputGorjeta.value
    let resultado = valor / pessoa * (gorjeta / 100)
    resulatadoReal = resultado.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    resulT.textContent = `o valor da gorjeta é de ${resulatadoReal}`


}