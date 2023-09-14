// gera um numero alatorio entre 0 e 100
const numero_aleatorio = Math.floor(Math.random() * 100);
alert(numero_aleatorio)

const tentativa_input = document.getElementById("tentativa_input");
//refenciando o botão para a "variavel_button"
const verificar_button = document.getElementById("verificar_button");

const resultado_mensagem =document.getElementById("resultado_mensagem");



verificar_button.addEventListener("click", function () { //alert("tentativa_input.value") })
    
    if (tentativa_input.value < 0 || tentativa_input.value >100 || tentativa_input == "") {
        //alert("número esta fora do escopo")
        resultado_mensagem.innerHTML= "<h1>O número está fora do escopo!!!</h1>"
        resultado_mensagem.classList.add("erro")
        resultado_mensagem.classList.remove("falha")
        resultado_mensagem.classList.remove("sucesso")
    }
    else if (tentativa_input.value == numero_aleatorio) {
        //alert("você acertou!!!")
        resultado_mensagem.innerHTML= "<h1>Parabens! você acertou!!!</h1>"
        resultado_mensagem.classList.add("sucesso")
        resultado_mensagem.classList.remove("falha")
        resultado_mensagem.classList.remove("erro")
    }
    else if (tentativa_input.value > numero_aleatorio) {
        //alert("número e maior")
        resultado_mensagem.innerHTML= "<h1>O número e maior!!!</h1>"
        resultado_mensagem.classList.add("falha")
        resultado_mensagem.classList.remove("sucesso")
        resultado_mensagem.classList.remove("erro")
    }
    else if (tentativa_input.value < numero_aleatorio) {
        //alert("número e menor")
        resultado_mensagem.innerHTML= "<h1>O número e menor!!!</h1>"
        resultado_mensagem.classList.add("falha")
        resultado_mensagem.classList.remove("sucesso")
        resultado_mensagem.classList.remove("erro")
    }
})