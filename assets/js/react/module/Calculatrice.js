import React, {useState} from 'react';


export default function Calculatrice()
{
    // Ici on cree les valeurs
    let [valeurPremiere, setValeurPremiere] = useState(0);
    let [operateur, setOperateur] = useState('-')
    let [valeurSeconde, setValeurSeconde] = useState(0);
    let [result,  setResult] = useState(0);

    //Ici on attribut les valeurs dans les fonctions
    let changeValeurPremiere = (el) =>
    {
        setValeurPremiere(el.target.value);
    }

    let changeOperateur = (el) =>
    {
        setOperateur(el.target.value);
    }

    let changeValeurSeconde = (el) =>
    {
        setValeurSeconde(el.target.value);
    }
// Ici on cree la fonction
    let calc = (valPrems, operateur, valSec) =>
    {
        let result;

        switch (operateur) {
            case '+':
                result = Number(valPrems) + Number(valSec);
                break;

            case '-':
                result = Number(valPrems) - Number(valSec);
                break;

            case '/':
                let toutca;

                if(0 === Number(valSec) || Infinity === ( toutca = (Number(valPrems) / Number(valSec)))) {
                    throw("Division par 0 impossible");
                } else {
                    result = toutca;
                }

                break;

            case '*':
                result = Number(valPrems) * Number(valSec);
                break;
        }

        return result;
    }
// Ici on fait un prevent default pour ne pas que l'action par defaut se fasse en l'occurence l'envoie
    let envoie = (e)=>
    {
        e.preventDefault();
        // e.target.submit();

        let resultat = calc(valeurPremiere, operateur, valeurSeconde);

        setResult(resultat);
    }

    return <>
        {/*Ici on cree le rendu*/}
        <form action="" method="post" onSubmit={envoie}>
            <input type="number" name="valeurPremiere" value={valeurPremiere} onChange={changeValeurPremiere}/>

            <select name="operateur" value={operateur} onChange={changeOperateur}>
                <option value="+">+</option>
                <option value="-" >-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="number" name="valeurSeconde" value={valeurSeconde} onChange={changeValeurSeconde} />

            <button type="submit">Fait moi le calcul</button>

        </form>

        {result}

    </>;
}