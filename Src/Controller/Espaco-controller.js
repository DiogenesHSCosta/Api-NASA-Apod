const descricao = document.querySelector("#descricao")
const dataInput = document.querySelector('#data')
const fundo = document.querySelector("#fundo")

//dia, ano e mes atual
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }
  
const Data = formatDate(new Date());
dataInput.setAttribute("max", `${Data}`)



dataInput.addEventListener("change", async () =>{
    console.log(dataInput.value)
   //fetch

    const query = `&date=${dataInput.value}`
    const api = await fetch(`https://api.nasa.gov/planetary/apod?api_key=MUBfu3uljTbDvHs4icZc1m6qoFMddOcquh6rwO8G${query}`)
    let dado = await api.json()
    console.log(dado)

    var espaco = new Espaco(dado)
    console.log(espaco)
   
    fundo.setAttribute("src", espaco.imagem)
    let titulo = espaco.titulo
    //informação da descrição
    descricao.innerHTML = `<div class='divisao'> <h1 class='titulo'>${titulo}</h1> </div> <div class='divisao'><p class='texto'>${espaco.descricao}</p></div>`

    
})

document.getElementsByTagName('figure')[0].addEventListener("click", () =>{
    
    if(descricao.style.opacity == 0){
        descricao.style.opacity = "0.7"
    }
    
})

descricao.addEventListener("click", () =>{
    descricao.style.opacity = "0"
})