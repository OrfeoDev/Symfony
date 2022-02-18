// Ici on se sert de la classe Number afin d'y rentrer un nombre et prompt permet d'afficher un pop up
let valPremiere = Number(prompt("Entrez la premiere valeur :"));
// On affiche uniquement la commande prompt
let operateur = prompt("operateur :");
let valSeconde = Number(prompt("Entrez la seconde valeur :"));
 // Un switch case permet de calculer la valeur
switch (operateur) {
    case '+':
        alert(valPremiere + valSeconde);
        break;

    case '-':
        alert(valPremiere - valSeconde);
        break;
    case '/':
        if(0 === valSeconde ){
            alert("Division par 0 impossible");
        }

        if(dividende/diviseur == Infinity){
            alert("Division par 0 impossible");
        }
        alert(valPremiere / valSeconde);
        break;
    case '*':
        alert(valPremiere * valSeconde);
        break;
}