// Information du navigateur
/*console.log(navigator)

//Information sur la fenetre de notre navigigateur
console.log(window)
// exemple recupere la page html cahrgee tous les enfants du body



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
//creation d'un DOM d'un element div
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
/*
//exo

function changeListe() {
// let ulListOne = document.getElementById('ulListOne');
    // querySelector Permet de recuperer un element comme je le ferai en css .
    // dans  cet exemple je recupere l'element de ma page
    let ulListOne = document.querySelector('#ulListOne');
// let items = ulListOne.getElementsByTagName('li');
    // querySelectorAll permet de recuperer un ensemble d'element
    let items = ulListOne.querySelectorAll('li');

// ulListOne.setAttribute('type', 'circle');
    ulListOne.style.listStyleType = 'upper-roman';
// en css list-style-type : 'upper-roman'

    for (let i = 0; i < items.length; i++) {

        // items[i].setAttribute('onClick', "alert('item : '+(i+1))");
        items[i].addEventListener('click', function () {
            alert('item : ' + (i + 1));
        })

        items[i].innerText = "Blabla " + (i + 1);
    }
}

 */
// d'abord je crée tous les elements dont j'ai besoin
// un container qui sera un div dont je vais mettre un autre div qui va contenir un champ de type input text, puis j'ajoute un boutton
// une fois que j'ai ajouter les attributs de chaque élémenent alors j'insére dans le body le container

let container = document.createElement('div');

let divChoix = document.createElement('div')
// je cree l'input
let choix = document.createElement("input");
// je cree bouton
let valide = document.createElement("button");

let resultat = document.createElement('div');

let score = document

container.innerHTML = '<h1> Jeu du Chifoumi</h1>'

container.className = 'container-sm';

divChoix.className = "col-sm-3";

choix.id = "choix";
choix.type = "text";
choix.className = "form-control";

valide.id = "valide";
valide.type = "text";
valide.textContent = "valider"
valide.className = "btn btn-primary";
valide.addEventListener('click', function () {
    afficheScore + (choix.value)
});

let score = [0, 0];
let possibilite = ['pierre', 'feuille', 'ciseaux'];
let resultatTab = ['egalite', 'perd', 'gagne'];

//console.log(valide)

// l'étape suivante sera d'ajouter un évenement sur le bouton qui va me permettre de lire la valeur de mon champ

divChoix.appendChild(choix);

container.appendChild(divChoix);

container.appendChild(valide);

container.appendChild(resultat);

container.appendChild(score);

// ici je valide et  cree dans mon body mon input ci-dessus
document.body.appendChild(container);

// lorsqu'on veut rajouter quelque chose ,On rajoute toujours le nom de l'element avant
/*
cette fonction va me permettre de calculer ce que va jouer l'ordi
 */
function ordi() {
    //Ici je fais un arrondi et je retourne un chiffre indefini et je multiplie par 2 qui correspond au nombre de personne dans mon tableau
    return Math.round(Math.random() * 2);
}

function analyse(choixPersonne, choixOrdi) {
    let result = -1;
    if (choixPersonne !== choixOrdi) {
        result = 0;

        switch (choixPersonne) {
            case 0 : //pierre
                if (1 === choixOrdi) {
                    result = 1;
                }
                break;
            case 1: // feuille
                if(2 === choixOrdi) {
                    result = 1;
                }
                break;
            case 2: //ciseaux
                if(0 === choixOrdi) {
                    result = 1;
                }
        }
    }
    return result;
}

function personne(choix)
{
    let result = 0;

    for(let i = 0; i < possibilite.length; i++) {
        if(choix === possibilite[i]) {
            result = i;
            break;
        }
    }

    return result;
}

function afficheScore(choixJoeur) {
    let choixOrdi = ordi();
    let choixPersonne = personne(choixJoeur);
    let resultatAnalyse = analyse(choixPersonne, choixOrdi);

    if(1 === resultatAnalyse) {
        score[0]++;
    } else if(0 === resultatAnalyse) {
        score[1]++;
    }

    resultat.innerHTML = `Le choix de l'ordi : ${possibilite[choixOrdi]} vs le choix de Guy : ${possibilite[choixPersonne]} ${resultatTab[resultatAnalyse+1]}`;
    score.innerHTML = `score de l'ordi : ${score[0]} vs Guyyyy : ${score[1]}`;

    if(score[0] > 2) {
        score.innerText = "TU as perdu espece de naze ! ";
    } else if(score[1] > 2) {
        score.textContent = "I WIN";
    }
}