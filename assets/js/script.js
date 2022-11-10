var elenco = [];
var elencoHTML = document.getElementById('elencoHTML');
var elencoCard = document.getElementById('elencoCard');

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
                elencoHTML.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.website}</td></tr>`;
                //------------------||custom Card||-----------------//
                let bold= 'style= "font-weight: bold;"'
                elencoCard.innerHTML += 
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title h3">${element.username}</h5>
                        <h6 class="card-text">${element.name}</h6>
                        <p class="card-text">I'm from ${element.address.city} and I work for ${element.company.name}.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><a href="#" ${bold}>${element.website}</a></li>
                        <li class="list-group-item"><a href="#" ${bold}>${element.phone}</a></li>
                        <li class="list-group-item"><a href="#" ${bold}>${element.email}</a></li>
                    </ul>
                </div>`;
            });//---------------------------------------------------//
        }
    });
}