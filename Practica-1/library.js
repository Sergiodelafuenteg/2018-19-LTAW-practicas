
function PeticionJSON(params) {
    var www = new XMLHttpRequest();
    www.open("GET", "https://randomuser.me/api/?results=5", false);
    www.send()
    console.log(www.responseType);
    var people = JSON.parse(www.responseText);
    console.log(people);
    
    document.getElementById("prueba").innerHTML = people.results[2].email;
    
}