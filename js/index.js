// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        console.log(data)
        return renderizarDadosUsuario(data)
    })
    .catch((err) => {
        console.log(err);
    });

     
function renderizarDadosUsuario(dados) {

    // submit our first object to variabel
    let results = dados.results

    results.map(item=>{
     // Select element
     console.log(item)
    let card = document.querySelector('.card')
    // create Elements
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let img = document.createElement('img')
    let title = document.createElement('h2')
    let email = document.createElement('p')
    let button = document.createElement('button')

    // link our children to parent element
    card.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(title)
    li.appendChild(email)
    li.appendChild(button)
    // add data to our elements
    button.innerHTML = "Pedir random"
    img.src = item.picture.medium;
    title.innerHTML =`${item.name.title}. ${item.name.first} ${item.name.last}`
    email.innerHTML = `${item.email}`

    // add style to our emelents
    ul.classList.add('list')

    // function to change the data
    button.onclick = ()=>{
        document.location.reload(true)
    }
    })
 
    console.log(dados)
}


