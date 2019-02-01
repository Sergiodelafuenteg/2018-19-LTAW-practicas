
function PeticionJSON(gender) {
    // manejamos la peticion para la "tienda"
    // usamos el api randomuser por comodidad
    var request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/?results=50", false);
    request.send()
    console.log(request.responseType);
    var people = JSON.parse(request.responseText);
    console.log(people);
    // creamos dos subgrupos mujeres y hombres
    var gender_array = people.results.filter(person => person.gender == gender);
    console.log(gender_array);
    // Montamos el array de "productos"
    gender_array.forEach(user => {
        let prod = document.createElement("ul");
        let image = document.createElement("img");
        let name = document.createTextNode('  ' + user.name.first);
        // name.setAttribute("class","name");
        let price = document.createTextNode('  price: ' + user.dob.age + '€')
        image.src = user.picture.thumbnail;
        prod.appendChild(image);
        prod.appendChild(name);
        prod.appendChild(price);
        document.getElementById('prueba').appendChild(prod);    
    });
}