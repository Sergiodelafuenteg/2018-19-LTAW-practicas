
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
    document.getElementById("prueba").innerHTML = "";
    // Montamos el array de "productos"
    gender_array.forEach(user => {
        let productos = document.createElement("ul");
        let prod = document.createElement("div");
        let image = document.createElement("img");
        let text_name = document.createElement("span");
        
        let text_price = document.createElement("span");
                
        let name = document.createTextNode('  ' + user.name.first);
        let price = document.createTextNode(user.dob.age + '€')
        text_name.appendChild(name);
        text_price.appendChild(price);
        image.src = user.picture.large;
        image.style.textAlign = "left";
        prod.appendChild(image);
        image.setAttribute("class", "image");
        text_name.setAttribute("class", "name");
        text_price.setAttribute("class", "price");
        prod.appendChild(text_name);
        prod.appendChild(text_price);
        prod.setAttribute("class", "prod")        
        productos.appendChild(prod);
        document.getElementById('prueba').appendChild(productos);    
    });
}