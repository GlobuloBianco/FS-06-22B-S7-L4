var elenco = [];
var elencoHTML = document.getElementById('elencoHTML');

window.addEventListener('DOMContentLoaded', init);

function init() {
    printData();
}

function printData() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data) => {
        elenco = data;
        if (elenco.length > 0) {
            elenco.map(function (element) {
                elencoHTML.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.website}</td></tr>`
            });
        }
    });
}