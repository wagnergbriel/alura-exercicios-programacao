//Código da Aula 2
function ExibirIdade(){
   let idade = document.getElementById("idade");
   if(idade.value == ""){
       alert("Idade não informada!");
   }else{
    document.write("A sua idade é " + idade.value);
   }
}