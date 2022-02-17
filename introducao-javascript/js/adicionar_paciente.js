const adicionarPaciente = document.querySelector("#adicionar-paciente");

function obterDadosDoPaciente(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
}

function inserirDadosDoPaciente(form, nome, peso, altura, gordura, imc) {
    const dadosDoPaciente = obterDadosDoPaciente(form);

    nome.textContent = dadosDoPaciente.nome;
    peso.textContent = dadosDoPaciente.peso;
    altura.textContent = dadosDoPaciente.altura;
    gordura.textContent = dadosDoPaciente.gordura;
    imc.textContent = dadosDoPaciente.imc;
    
}

function criarElementosNaTabela(form) {
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
    
    inserirDadosDoPaciente(form, nomeTd, pesoTd, alturaTd, gorduraTd, imcTd);

    //Inserir dentro da tag TR
    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(alturaTd);
    tr.appendChild(gorduraTd);
    tr.appendChild(imcTd);

    const tBody = document.querySelector("#tabela-pacientes");

    tBody.append(tr);
}
    
//Função que insere os dados de novos pacientes.
adicionarPaciente.addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    criarElementosNaTabela(form);

    form.reset();
});