let cadastarAluno = document.querySelector(".cadastrar-aluno") 
cadastarAluno.innerHTML = "OIII"

//cor carinha
let carinha = document.querySelector('.texto')
carinha.style.backgroundColor = "yellow"


//atividade 1

let animal = document.querySelector(".animal")

animal.style.backgroundColor = "black"
animal.style.color = "white"
animal.style.width = "300px"

//atividade 2 evoluir planta

let dinossauro = document.querySelector(".dino")

dinossauro.addEventListener('mouseover', ()=>{
    if(dinossauro.innerText == "🥚"){
        dinossauro.innerText = "🦕"
    }else if (dinossauro.innerText == "🦕"){
        dinossauro.innerText = "🎇"
    }else if (dinossauro.innerText == "🎇"){
        dinossauro.innerText = "💀"
    }else if (dinossauro.innerText == "💀"){
        dinossauro.innerText = "🥚"
    }

})