/*console.log(navigator)
console.log(window)
console.log(document)

let json = {
    cle: "valeur",
    prenom: "Jason",
    nom: "Vorhees",

    getPrenom: function () {
        return this.prenom;
    }

}
console.log(json.getPrenom());
// Je peux ajouter une methode a ma "class" qui s'appelle json
json.getNom = function () {
    return this.nom
}

let tabJason = [
    {prenom: "test"},
    {prenom: "blabla"}
]
console.log(tabJason)
console.log(tabJason[0].prenom)
console.log(tabJason[1].prenom)

// Ici je cree un objet
//Defer:  différer l'exécution à la fin du chargement du document, il faut le rajouter dans la balise "script"
let div = document.createElement('div')
div.id = 'divCree'
div.innerText = " teste";
document.body.appendChild(div);


let li = document.createElement('li');
li.title = "C'est mon titre qui ne devait pas marcher";
li.className = "liClass";
li.innerText = "Bonjour , C'est Mon Li cree en Js";
console.log(document.getElementById('ul'));
// supprimer
//document.body.removeChild('ul');





 */

//exo

function changeListe() {
// let ulListOne = document.getElementById('ulListOne');
let ulListOne = document.querySelector('#ulListOne');
// let items = ulListOne.getElementsByTagName('li');
let items = ulListOne.querySelectorAll('li');

// ulListOne.setAttribute('type', 'circle');
ulListOne.style.listStyleType = 'upper-roman';
// en css list-style-type : 'upper-roman'

for (let i = 0; i < items.length; i++) {

    // items[i].setAttribute('onClick', "alert('item : '+(i+1))");
    items[i].addEventListener('click', function () {
        alert('item : '+(i+1));
    })

    items[i].innerText = "Blabla " + (i + 1);
}
}