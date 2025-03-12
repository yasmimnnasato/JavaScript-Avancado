const axios = require('axios')


// axios.get("https://viacep.com.br/ws/8906823/json/")
// .then(response =>{
//     let dados = response.data
//     console.log(dados.estado)
//     console.log(dados.ddd)
// }).catch(err => {
//     console.log(err)
// }).finally(f =>{
//     console.log("ACABOU")
// })


axios.get("https://fakestoreapi.com/products/6")
.then(response =>{
    let dados = response.data
    console.log("O titulo é:"+dados.title)
    console.log("O preço é:"+dados.price)
})