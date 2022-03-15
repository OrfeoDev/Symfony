
let first = React.createElement('div', null, `Bonjour Alkas`, React.createElement('span', {className:'container-sm'}, `test`, ));
ReactDOM.render(first, document.getElementById('first'));


// Ici on se sert de la classe Number afin d'y rentrer un nombre et prompt permet d'afficher un pop up
let valPremiere = Number(prompt("Entrez la premiere valeur :"));

// On affiche uniquement la commande prompt
let operateur = prompt("operateur :");
let valSeconde = Number(prompt("Entrez la seconde valeur :"));
// Un switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes

let result=0;
let messageErreur='';

switch (operateur) {
    case '+':
        result=(valPremiere + valSeconde);
        break;

    case '-':
        result=(valPremiere - valSeconde);
        break;
    case '/':
        if(0 === valSeconde ){
            messageErreur="Division par 0 impossible"

            result=("Division par 0 impossible");
        }else if(dividende/diviseur == Infinity){
            messageErreur=
            result=("Division par 0 impossible");
        }
        result=(valPremiere / valSeconde);
        break;
    case '*':
        result=(valPremiere * valSeconde);
        break;
}
let oResult = <>{valPremiere} {operateur} {valSeconde} = {result ?? messageErreur}</>

// DOM en react

//
// let oMessageErreur = React.createElement('div', null, messageErreur);
// let oResult = React.createElement('div', null, result, oMessageErreur);

ReactDOM.render(oResult, document.getElementById('calculatriceResult'));


let bonjour = <h1 id="monId" className="gdgs">bonjour</h1>;

ReactDOM.render(bonjour, document.getElementById('bonjourSecond'));

let content = <React.Fragment>
    <h1>bonjour</h1>

    <div>image</div>
</React.Fragment>

// ReactDOM.render(content, document.getElementById('heure'));


let time = new Date().toLocaleTimeString();

let pasContent = <>


    <h1>Bonjour, </h1>

    <div > Il est : {time} </div>
</>

ReactDOM.render(pasContent, document.getElementById('heure'));