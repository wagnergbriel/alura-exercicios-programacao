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

function obterDadosDoPaciente(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
}

function main() {
    const adicionarPaciente = document.querySelector("#adicionar-paciente");
    
    //Função que insere os dados de novos pacientes.
    adicionarPaciente.addEventListener("click", (event) => {
        event.preventDefault();

        const form = document.querySelector("#form-adiciona");
        const dadosDoPaciente = obterDadosDoPaciente(form);

        //Criar elementos da tabela
        const tr = document.createElement("tr");
        const nomeTd = document.createElement("td");
        const pesoTd = document.createElement("td");
        const alturaTd = document.createElement("td");
        const gorduraTd = document.createElement("td");
        const imcTd = document.createElement("td");

        //Adicionando classes nas tags
        tr.classList.add("paciente");
        nomeTd.classList.add("info-nome");
        pesoTd.classList.add("info-peso");
        alturaTd.classList.add("info-altura");
        gorduraTd.classList.add("info-gordura");
        imcTd.classList.add("info-imc");

        //Adicionar os dados nos campos da tabela
        nomeTd.textContent = dadosDoPaciente.nome;
        pesoTd.textContent = dadosDoPaciente.peso;
        alturaTd.textContent = dadosDoPaciente.altura;
        gorduraTd.textContent = dadosDoPaciente.gordura;
        imcTd.textContent = dadosDoPaciente.imc;

        tr.appendChild(nomeTd);
        tr.appendChild(pesoTd);
        tr.appendChild(alturaTd);
        tr.appendChild(gorduraTd);
        tr.appendChild(imcTd);

        const tBody = document.querySelector("#tabela-pacientes");

        tBody.append(tr);
        form.reset();
    });
    tratamentoDeErroForm();
}

main();