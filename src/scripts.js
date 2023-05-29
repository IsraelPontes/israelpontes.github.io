let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarnatela(dados){
    // console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".tempomax").innerHTML = "Máxima " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".tempomin").innerHTML = "Mínima " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".unidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" + 
    "&units=metric")
    .then(resposta => resposta.json())
    colocarnatela(dados)
}

 function cliqueiNoBotao (){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
 }
