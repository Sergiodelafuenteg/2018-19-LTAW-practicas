
var Cesta = [];

function PeticionJSON(Categor) {
    // manejamos la peticion para la "tienda"
    // usamos el api randomuser por comodidad
    document.getElementById('box').style.display = 'inline-block';
    find();
    var request = new XMLHttpRequest();
    request.open("GET", "products.json", false);
    request.send()
    console.log(request.responseType);
    var results = JSON.parse(request.responseText);
    console.log(Object.keys(results)[2]);
    // creamos dos subgrupos mujeres y hombres
    var Categor_array = results[Categor]
    console.log(Categor_array);
    document.getElementById("visor").innerHTML = ""
    // añadimos handler para caja de busqueda
    function find() {
        var box = document.getElementById('box');
        box.addEventListener('keydown', (event) => {
            var presskey = event.key;
            console.log(presskey);
            Categor_array = results.filter(obj => obj.name[0] == presskey);
            console.log(Categor_array);
        })
    }
    // Montamos el array de "productos"
    Categor_array.forEach(user => {
        // Creamos los elementos
        let productos = document.createElement("ul");
        let prod = document.createElement("div");
        let image = document.createElement("img");
        let text_name = document.createElement("span");        
        let text_price = document.createElement("span");        
        let butt_add = document.createElement("button");                
        let name = document.createTextNode('  ' + user.name);
        let price = document.createTextNode(user.price + '€')
        butt_add.innerHTML = "+";
        // Los incorporamos en el DOM
        text_name.appendChild(name);
        text_price.appendChild(price);
        image.src = user.image;
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
            name : user.name,
            image : user.image,
            precio : user.price
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
    var hu = 'Bicicletas'
    var request2 = new XMLHttpRequest();
    request2.open("GET", "products.json", false);
    request2.send()
    console.log(request2.responseType);
    var results2 = JSON.parse(request2.responseText);
    console.log(results2[hu]);
}

function finder() {
    
}
