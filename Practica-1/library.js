
function PeticionJSON(gender) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/?results=5", false);
    request.send()
    console.log(request.responseType);
    var people = JSON.parse(request.responseText);
    console.log(people);
    var gender_array = people.results.filter(person => person.gender == gender);
    console.log(gender_array);
    document.getElementById("prueba").innerHTML = gender_array;
    
}