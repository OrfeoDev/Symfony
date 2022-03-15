// // // d'abord je crée tous les elements dont j'ai besoin
// // // un container qui sera un div dont je vais mettre un autre div qui va contenir un champ de type input text, puis j'ajoute un boutton
// // // une fois que j'ai ajouter les attributs de chaque élémenent alors j'insére dans le body le container
// //
// // let container = document.createElement('div');
// //
// // let divChoix = document.createElement('div')
// // // je cree l'input
// // let choix = document.createElement("input");
// // // je cree bouton
// // let valide = document.createElement("button");
// //
// // let resultat = document.createElement('div');
// //
// // let scores = document.createElement('div');
// //
// // container.innerHTML = '<h1> Jeu du Chifoumi</h1>'
// //
// // container.className = 'container-sm';
// //
// // divChoix.className = "col-sm-3";
// //
// // choix.id = "choix";
// // choix.type = "text";
// // choix.className = "form-control";
// //
// // valide.id = "valide";
// // valide.type = "text";
// // valide.textContent = "valider"
// // valide.className = "btn btn-primary";
// // valide.addEventListener('click', function () {
// //     afficheScore + (choix.value)
// // });
// //
// // let score = [0, 0];
// // let possibilite = ['pierre', 'feuille', 'ciseaux'];
// // let resultatTab = ['egalite', 'perd', 'gagne'];
// //
// // //console.log(valide)
// //
// // // l'étape suivante sera d'ajouter un évenement sur le bouton qui va me permettre de lire la valeur de mon champ
// //
// // divChoix.appendChild(choix);
// //
// // container.appendChild(divChoix);
// //
// // container.appendChild(valide);
// //
// // container.appendChild(resultat);
// //
// // container.appendChild(score);
// //
// // // ici je valide et  cree dans mon body mon input ci-dessus
// // document.body.appendChild(container);
// //
// // // lorsqu'on veut rajouter quelque chose ,On rajoute toujours le nom de l'element avant
// // /*
// // cette fonction va me permettre de calculer ce que va jouer l'ordi
// //  */
// // function ordi() {
// //     //Ici je fais un arrondi et je retourne un chiffre indefini et je multiplie par 2 qui correspond au nombre de personne dans mon tableau
// //     return Math.round(Math.random() * 2);
// // }
// //
// // function analyse(choixPersonne, choixOrdi) {
// //     let result = -1;
// //     if (choixPersonne !== choixOrdi) {
// //         result = 0;
// //
// //         switch (choixPersonne) {
// //             case 0 : //pierre
// //                 if (1 === choixOrdi) {
// //                     result = 1;
// //                 }
// //                 break;
// //             case 1: // feuille
// //                 if(2 === choixOrdi) {
// //                     result = 1;
// //                 }
// //                 break;
// //             case 2: //ciseaux
// //                 if(0 === choixOrdi) {
// //                     result = 1;
// //                 }
// //         }
// //     }
// //     return result;
// // }
// //
// // function personne(choix)
// // {
// //     let result = 0;
// //
// //     for(let i = 0; i < possibilite.length; i++) {
// //         if(choix === possibilite[i]) {
// //             result = i;
// //             break;
// //         }
// //     }
// //
// //     return result;
// // }
// //
// // function afficheScore(choixJoeur) {
// //     let choixOrdi = ordi();
// //     let choixPersonne = personne(choixJoeur);
// //     let resultatAnalyse = analyse(choixPersonne, choixOrdi);
// //
// //     if(1 === resultatAnalyse) {
// //         score[0]++;
// //     } else if(0 === resultatAnalyse) {
// //         score[1]++;
// //     }
// //
// //     resultat.innerHTML = `Le choix de l'ordi : ${possibilite[choixOrdi]} vs le choix de Guy : ${possibilite[choixPersonne]} ${resultatTab[resultatAnalyse+1]}`;
// //     score.innerHTML = `score de l'ordi : ${score[0]} vs Guyyyy : ${score[1]}`;
// //
// //     if(score[0] > 2) {
// //         scores.innerText = "TU as perdu espece de naze ! ";
// //     } else if(scores[1] > 2) {
// //         scores.textContent = "I WIN";
// //     }
// // }
//
//
// }


// d'abord je crée tous les elements dont j'ai besoin
// un container qui sera un div dont je vais mettre un autre div qui va contenir un champ de type input text, puis j'ajoute un boutton
// une fois que j'ai ajouté les attributs de chaque élément alors j'insére dans le body le container
let oContainer = document.createElement('div');
let oDivChoix = document.createElement('div');
let oChoix = document.createElement('input');
let oValid = document.createElement('button');
let oResultat = document.createElement('div');
let oScore = document.createElement('div');

oContainer.innerHTML = '<h1>Jeu de chifoumi</h1>';
oContainer.className = 'container-sm';

oDivChoix.className = "col-sm-3";

oChoix.id = "choix";
oChoix.type = "text";
oChoix.className = "form-control";

oValid.id = "valid";
oValid.textContent = "Joue";
oValid.className = "btn btn-primary";
oValid.addEventListener('click', function() {afficheScore(oChoix.value)});

let score = [0, 0];
let possibilite = ['pierre', 'feuille', 'ciseaux'];
let resultatTab = ['égalité', 'perd', 'gagne'];

oDivChoix.appendChild(oChoix);
oContainer.appendChild(oDivChoix);
oContainer.appendChild(oValid);
oContainer.appendChild(oResultat);
oContainer.appendChild(oScore);
document.body.appendChild(oContainer);

// l'étape suivante sera d'ajouter un évenement sur le bouton qui va me permettre de lire la valeur de mon champ

/**
 * Calcul aléatoire de ce que va jouer l'ordinateur
 */
function ordi() {
    return Math.round(Math.random() * 2);
}

function analyse(choixPersonne, choixOrdi) {
    let result = -1;

    if(choixPersonne !== choixOrdi) {
        result = 0;

        switch (choixPersonne) {
            case 0: // pierre
                if(1 === choixOrdi) {
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

    oResultat.innerHTML = `Le choix de l'ordi : ${possibilite[choixOrdi]} vs le choix de Guy : ${possibilite[choixPersonne]} ${resultatTab[resultatAnalyse+1]}`;
    oScore.innerHTML = `score de l'ordi : ${score[0]} vs Guyyyy : ${score[1]}`;

    if(score[0] > 2) {
        oScore.innerText = "TU as perdu espece de naze ! ";
    } else if(score[1] > 2) {
        oScore.textContent = "I WIN";
    }
}
