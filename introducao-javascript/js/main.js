var titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutricionista";

const listaDeDadosDosPacientes = document.querySelectorAll(".paciente");

function main() {

    for (var i = 0; i < listaDeDadosDosPacientes.length; i++) {
        let peso;
        let altura;
        let pesoEhValido = true;
        let alturaEhValida = true;
        let imc;

        peso = listaDeDadosDosPacientes[i].querySelector(".info-peso").textContent;
        altura = listaDeDadosDosPacientes[i].querySelector(".info-altura").textContent;
        
        if(peso <= 0 || peso >= 400) {
            pesoEhValido = false; 
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = "Peso Inválido!";
            listaDeDadosDosPacientes[i].classList.add("paciente-invalido");
        }

        if(altura <= 0 || altura >= 3.0){
            alturaEhValida = false;
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = "Altura Inválida!";
            listaDeDadosDosPacientes[i].classList.add("paciente-invalido");
        }

        if(pesoEhValido && alturaEhValida){
            imc = peso / (altura * altura);
            listaDeDadosDosPacientes[i].querySelector(".info-imc").textContent = imc.toFixed(2);
        }
    } 
}

//Construir função que insere novos dados na tabela.

main();