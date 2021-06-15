//Random burger generator
//url: https://my-burger-api.herokuapp.com/burgers

const beerDisplay = document.querySelector('.name')
const button = document.querySelector('.button')

//GET
function getData(){
    fetch('https://my-burger-api.herokuapp.com/burgers')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const randomNumber = Math.random() * data.length
        const randomInteger = Math.floor(randomNumber)
        const name = data[randomInteger].name
        console.log(name)
        beerDisplay.innerHTML = name
    })
}

button.addEventListener('click', getData)

//POST
const data = {
    "id": 28,
    "name": "The Amigo Burger",
    "restaurant": "Amigos",
    "web": "www.amigos.mx",
    "description": "Mexican, Restaurant Bar",
    "ingredients": [
        "beef",
        "cheddar cheese",
        "avocado",
        "onion",
        "tomato",
        "bacon",
        "lettuce",
        "jalapeno"
    ],
    "addresses": [
        {
            "addressId": 0,
            "number": "11",
            "line1": "Mexico City",
            "line2": "Mexico",
            "postcode": "52 00",
            "country": "Mexico"
        }
    ]
}
function createData(){
    fetch('https://https://my-burger-api.herokuapp.com/burgers', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success', data)
    })
    .catch(error => {
        console.log('Error: ', error)
    })
}
//PUT edits/updates data resource
const data = {}

function editData() {
    fetch('https://https://my-burger-api.herokuapp.com/burgers/28', {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success', data)
    })
    .catch(error => {
        console.log('Error: ', error)
    })
}

//DELETE
function deleteData() {
    fetch('https://https://my-burger-api.herokuapp.com/burgers/280', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
        console.log('Success')
    })
    .catch(error => {
        console.log('Error: ', error)
    })
}

