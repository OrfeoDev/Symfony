// let container = document.createElement('span');
//
//
//
//
//
// bouton.classList.add("btn");
//
//
// const url ='https://randomuser.me/api/?results=100';
//
// async function recuperePersonne(){
//     const requete = await fetch(url,{
//         method:'GET'
//     });
//
//     if (!requete.ok){
//         alert('Un probleme est survenu.');
//     }else {
//         let donnees = await requete.json();
//         // console.log(donnees)
//
//          for (let i = 0;i<donnees.results.length; i++){
//              // console.log(donnees)
//              document.querySelector('span').textContent = donnees.results;
//              console.log(donnees.results)
//          }
//     }}
// recuperePersonne();




//
// axios.get(url).then(function (donnees){
//     // console.log(donnees);
//     document.querySelector('span').textContent=donnees;
// })
//     .catch(function (erreur){
//         alert('un probleme est survenue')
//     });
// recuperePersonne();
//
//  setInterval('recupererPersonne',2000);



// const form =document.querySelector("form");
// const inp = document.querySelector('input');
//
//  form.addEventListener('submit',function (e) {
//      e.preventDefault();
//
//
//      if(pseudo && (!pseudo.value || pseudo && pseudo.value.length < 3)) {
//          pseudo.style.backgroundColor = "red";
//      } else {
//
//          pseudo.style.backgroundColor = "transparent";
// // donc on peut voir que dd c'est rouge et ddd c'est transparent
//
//      }
//
//      if(nom && (!nom.value || nom && nom.value.length < 3)) {
//          nom.style.backgroundColor = "red";
//      } else {
//
//          nom.style.backgroundColor = "transparent";
//
//      }
//
//      if(prenom && (!prenom.value || prenom && prenom.value.length < 3)) {
//          prenom.style.backgroundColor = "red";
//      } else {
//
//          email.style.backgroundColor = "transparent";
//
//      }
//
//      if(email && (!email.value || email && email.value.length < 3)) {
//          email.style.backgroundColor = "red";
//      } else {
//
//          email.style.backgroundColor = "transparent";
//
//      }
//
//      if(password && (!password.value || password && password.value.length < 8)) {
//          password.style.backgroundColor = "red";
//      } else {
//
//          password.style.backgroundColor = "transparent";
//
//      }


   // console.log(inp.value);
 // })
// inp.addEventListener('submit',(e)=>{
//     const pseudo = document.getElementById('pseudo').value;
//     console.log('pseudo')
// })


let form = document.querySelector('form');

form.addEventListener('submit', checkBeforeSubmit);

function checkBeforeSubmit(e)
{
    e.preventDefault(); // annule le comportement par défaut

    let messageDErreur = '';
    let erreurCouleur = "#fedede";
// ici je recupere ma variable id
    let nom = document.getElementById("nom");

    // Je verifie que les infos sont bien inscrites en alertant avec des couleurs le user

    if (nom) {
        if (!nom.value) {
            nom.style.backgroundColor = erreurCouleur;
            messageDErreur += messageErreur(`Veuillez saisir le nom !`);
        } else if (nom.value.length < 3) {
            nom.style.backgroundColor = erreurCouleur;
            messageDErreur += minMessageErreur('nom');
        } else {
            nom.style.backgroundColor = "transparent";
        }
    }
    // gestionMessageErreur("nom", "nom");

    let prenom = document.getElementById("prenom");
    if (prenom) {
        if (!prenom.value) {
            prenom.style.backgroundColor = erreurCouleur;
            messageDErreur += messageErreur(`Veuillez saisir le prénom !`);
        } else if (prenom.value.length < 3) {
            nom.style.backgroundColor = erreurCouleur;
            messageDErreur += minMessageErreur('prénom');
        } else {
            prenom.style.backgroundColor = "transparent";
        }
    }

    messageDErreur += gestionMessageErreur('email', 'email');
    messageDErreur += gestionMessageErreur('tel', 'tel');
    messageDErreur += gestionMessageErreur('pseudo', 'pseudo', 8);
    messageDErreur += gestionMessageErreur('password', 'password', 8);

    if (messageDErreur.length > 0) {
        document.getElementById("messageErreur").innerHTML = messageDErreur;
    } else {
        document.getElementById("messageErreur").textContent = "Vous êtes des génies les gars sauf Eric";
        e.target.submit();
    }
}

function minMessageErreur(nom, taille = 3)
{
    return `Le ${nom} doit suppérieur à ${taille}<br>`;
}

function messageErreur(message)
{
    return message + '<br>';
}

function gestionMessageErreur(id, nom, tailleMin = 3)
{
    let messageDErreur = '';
    let el = document.getElementById(id);
    let erreurCouleur = "#fedede";

    if (el) {
        if (!el.value) {
            el.style.backgroundColor = erreurCouleur;
            messageDErreur += `Veuillez saisir le ${nom} !<br>`;
        } else if (el.value.length < tailleMin) {
            el.style.backgroundColor = erreurCouleur;
            messageDErreur += `Le ${nom} doit suppérieur à ${tailleMin}<br>`;
        } else {
            el.style.backgroundColor = "transparent";
        }
    }

    return messageDErreur;
}