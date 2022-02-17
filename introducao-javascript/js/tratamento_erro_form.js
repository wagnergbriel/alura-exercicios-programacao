var titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutricionista";

const listaDeDadosDosPacientes = document.querySelectorAll(".paciente");

function tratamentoDeErroForm() {
    /*
        A função que verifica se o valor de peso e altura são invalidos, caso for positivo,
        retorna uma mensagem informando, se não for, executa o calculo do imc.
    */
    for (var i = 0; i < listaDeDadosDosPacientes.length; i++) {
        let peso;
        let altura;
        let pesoEhValido = true;
        let alturaEhValida = true;
        let imc;

        peso = listaDeDadosDosPacientes[i].querySelector(".info-peso").textContent;
        altura = listaDeDadosDosPacientes[i].querySelector(".info-altura").textContent;

        if (peso <= 0 || peso >= 400) {
            pesoEhValido = false;
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = "Peso Inválido!";
            listaDeDadosDosPacientes[i].classList.add("paciente-invalido");
        }

        if (altura <= 0 || altura >= 3.0) {
            alturaEhValida = false;
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = "Altura Inválida!";
            listaDeDadosDosPacientes[i].classList.add("paciente-invalido");
        }

        if (pesoEhValido && alturaEhValida) {
            imc = calcularImc(peso, altura);
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = imc;
        }
    }
}

function calcularImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function main() {
    tratamentoDeErroForm();
}

main();