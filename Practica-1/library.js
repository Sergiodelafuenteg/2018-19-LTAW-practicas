
function PeticionJSON(params) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/?results=5", false);
    request.send()
    console.log(request.responseType);
    var people = JSON.parse(request.responseText);
    console.log(people);
    
    document.getElementById("prueba").innerHTML = people.results[2].email;
    
}