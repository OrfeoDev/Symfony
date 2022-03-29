import React, {useState} from "react";


export default function Hook() {
// useState renvoi toujours un tableau

    //la premiere valeur récupère automatiquement, la deuxième est une fonction
    let [isToggleLight, setLight] = useState(true);

    let [monTableau, setMonTableau] = useState(['laurent', 'nicolas']);

    let [monInput, setMonInput] = useState("test");



let recupere =(e)=>{
        e.preventDefault()

}

    // On ecrit avec une fonction fléchée
    let changeMonInput = (e) => {
        setMonInput(e.target.value);
    }
// On peut le faire aussi sans fonction fléchée

    // function changeMonInput (e) {
    //     setMonInput(e.target.value);
    // }




    //setLight(false);

    if (false === isToggleLight) {
        alert()
    }
    let light = useState(true);


    return <>
        <form action="" method="post" onSubmit={recupere}>

            <input  type="number" name="monChiffre1" value="monChiffre1" onChange={changeValeurPremiere}/>

            <select name="calcul" onChange={changeCalcul}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>

            </select>

            {/*<input type="number" value={monChiffre2} onChange={}/>*/}


            <button type="submit" onClick={calculator}> Calculatrice </button>

        </form>

        <h1>bonjour Hooook</h1>


        Lumiere est: {isToggleLight ? 'allumer' : 'eteint'}


        <p>{monTableau[1]}</p>

        <p><input type="text" value={monInput} onChange={changeMonInput}/></p>
    </>;


}

