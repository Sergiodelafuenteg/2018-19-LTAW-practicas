
var Cesta = [];

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
    document.getElementById("visor").innerHTML = ""
    // Montamos el array de "productos"
    
    gender_array.forEach(user => {
        // Creamos los elementos
        let productos = document.createElement("ul");
        let prod = document.createElement("div");
        let image = document.createElement("img");
        let text_name = document.createElement("span");        
        let text_price = document.createElement("span");        
        let butt_add = document.createElement("button");                
        let name = document.createTextNode('  ' + user.name.first);
        let price = document.createTextNode(user.dob.age + '€')
        butt_add.innerHTML = "+";
        // Los incorporamos en el DOM
        text_name.appendChild(name);
        text_price.appendChild(price);
        image.src = user.picture.large;
        // image.style.textAlign = "left";
        prod.appendChild(image);
        image.setAttribute("class", "image");
        text_name.setAttribute("class", "name");
        text_price.setAttribute("class", "price");
        butt_add.setAttribute("class", "butt_add");
        butt_add.setAttribute("onclick", "Abrircesta()");
        prod.appendChild(text_name);
        prod.appendChild(text_price);
        prod.appendChild(butt_add);
        prod.setAttribute("class", "prod")        
        productos.appendChild(prod);
        document.getElementById('visor').appendChild(productos);
        // Creamos un objeto producto para el array
        var prod_cesta = {
            name : user.name.first,
            image : user.picture.large,
            precio : user.dob.age
        }
        Cesta.push(prod_cesta)
    });
}
function Abrircesta() {
    console.log(Cesta);
    
    var image = document.getElementById('cesta_icon')
    image.src = "cesta1.png";

}
function CargarJsonLocal(params) {
    var request2 = new XMLHttpRequest();
    request2.open("GET", "products.json", false);
    request2.send()
    console.log(request2.responseType);
    var people2 = JSON.parse(request2.responseText);
    console.log(people2);
}