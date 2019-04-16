
var Cesta = [];

function CargarJsonLocal(file) {
  let request = new XMLHttpRequest();
  request.open("GET", file, false);
  request.send();
  console.log(request.responseType);
  let JSON_results = JSON.parse(request.responseText);
  return JSON_results;
}

// funcion para cargar los productos categorizados
function Load_Prod(Categor) {
 
    
    // creamos dos subgrupos mujeres y hombres
    var results = CargarJsonLocal("assets/products.json")
    var Categor_array = results[Categor]
    console.log(Categor_array);
    // ponemos visor en blanco. Listo para insertar
    document.getElementById("visor").innerHTML = ""

    // Montamos el array de "productos"
    Categor_array.forEach(item => {
        // Creamos los elementos
        Push_Product(item);
        // Creamos un objeto producto para el array
        var prod_cesta = {
            name : item.name,
            image : item.image,
            precio : item.price
        }
        Cesta.push(prod_cesta)
    });
}

// funcion para insertar los elementos en el DOM
function Push_Product(item) {
    let productos = document.createElement("ul");
    let prod = document.createElement("div");
    let image = document.createElement("img");
    let text_name = document.createElement("span");
    let text_price = document.createElement("span");
    let butt_add = document.createElement("button");
    let name = document.createTextNode("  " + item.name);
    let price = document.createTextNode(item.price + "€");
    butt_add.innerHTML = "+";
    // Los incorporamos en el DOM
    text_name.appendChild(name);
    text_price.appendChild(price);
    image.src = item.image;
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
    prod.setAttribute("class", "prod");
    productos.appendChild(prod);
    document.getElementById("visor").appendChild(productos);
}


function Abrircesta() {
    console.log(Cesta);
    
    var image = document.getElementById('cesta_icon')
    image.src = "assets/cesta1.png";

}

function finder() {
    var dataList = document.getElementById("productos");
    var input = document.getElementById("productos");
    var results = CargarJsonLocal("assets/products.json")
    var filtered_array = [];
    
    for (const result in results) {        
        results[result].forEach(element => {
            filtered_array.push(element.name)
            // Create a new <option> element.
            var option = document.createElement('option');
            option.value = element.name;
            option.onclick = "huhu()";
            dataList.appendChild(option);
        });
        
        // if (results.hasOwnProperty(result)) {
        //     filtered_array.push(results.filter(obj => obj.name[0] == presskey))
        // }
    }
    console.log(filtered_array);
}
