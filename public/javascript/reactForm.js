class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Guillaume'
        }

        this.changeNameFormOldSchool = this.changeNameFormOldSchool.bind(this);
    }

    changeNameFormOldSchool(e) {
        this.setState({
            name: e.target.value
        });
    }

    changeNameForm = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return <div>
            <form action="" method="post">
                <input type="text" name="name" value={this.state.name} onChange={this.changeNameForm}/>

                <input type="text" name="cloneName" defaultValue={this.state.name}/>
            </form>
        </div>
    }
}


class Formulaire extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            biere: '',
            cocktail: '',
            checked: true,

        }

        this.changeNameFormOldSchool = this.changeNameFormOldSchool.bind(this);
    }

    methodeALaCon(e) {

        // console.log(document.querySelectorAll('form'));
        let oForm = document.querySelector('form');
        let oSexe = document.getElementsByName('sexe');
        oSexe[0].checked = true;

        oForm.addEventListener('submit', checkBeforeSubmit);

        function checkBeforeSubmit(e) {
            e.preventDefault(); // annule le comportement par défaut

            let oBiere = document.getElementById('biere');
            // oBiere.selectedIndex = 2;
            // for(let i = 0; i < oBiere.length; i++) {
            //     if("leffe" === oBiere.options[i].value) {
            //         oBiere.options[i].selected = true;
            //         break;
            //     }
            // }

            for (let i in oBiere) {
                if ("leffe" === oBiere.options[i].value) {
                    oBiere.options[i].selected = true;
                    break;
                }
            }

            oBiere.selectedIndex = 2;

            // document.getElementById('biereResult').innerHTML = `Biere = ${oBiere.value}<br>index selectionné : ${oBiere.selectedIndex}`;


            let oCocktail = document.getElementById('cocktail');

            // let cocktail = '';
            // for(let i = 0; i < oCocktail.length; i++) {
            //     if(oCocktail.options[i].selected) {
            //         oCocktail.options[i].selected = false;
            //     } else {
            //         oCocktail.options[i].selected = true;
            //     }
            // }
            Array.from(oCocktail.options).map((el) => {
                // if (true === el.selected) {
                //     el.selected = false
                // } else {
                //     el.selected = true;
                // }

                el.selected = !el.selected;
            });

            // document.getElementById('cocktailResult').innerHTML = `cocktail = ${cocktail}`;

            // let tmp = '';
            let oSexe = document.getElementsByName('sexe');
            // oSexe[0].checked = true;

            if (oSexe[0].checked) { // homme
                oSexe[1].checked = true;
            } else { // femme
                oSexe[0].checked = true;
            }

            // document.getElementById('choixSexe').innerHTML = `sexe = ${tmp}`;

            // tmp = '';
            let oVehicule = document.getElementsByName('vehicule[]');
            Array.from(oVehicule).map((el) => {
                el.checked = el.checked ? false : true;
            });

            // document.getElementById('choixVehicule').innerHTML = `vehicule = ${tmp}`;

            ajax();
        }

        function ajax() {
            var oFormData = new FormData(oForm);
            oFormData.append('test', 'formulaire de test');

            fetch("/jj/traiteajax", {
                method: 'post',
                body: oFormData
            }).then((reponse) => { // on vérifie la réponse donnée du site
                if (reponse.ok) {
                    reponse.json().then((monJson) => {
                        document.getElementById("messageErreur").innerHTML = monJson;
                        console.log(monJson);
                    });// on recupere les données au format json si tout va bien
                }
            }).catch((e) => { // en cas d'une erreur interne
                alert(e.message);
            });
        }


    }

    changeNameFormOldSchool(e) {
        this.setState({
            name: e.target.value
        });
    }

    changeNameForm = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    changeOnsubmit(e) {

        this.state.value;

    }

    render() {
        return <div>
            <form method="post" action="" noValidate>
                <label htmlFor="nom">Entrez le nom</label>
                <input type="text" name="nom" id="nom" minLength="3" maxLength="10" value={this.state.name}
                       onChange={this.changeNameForm}/>
                {/*<input type="text" name="cloneName" defaultValue={this.state.name}*/}


                <select value={this.state.biere} name="biere">
                    <option value="">Choisissez votre bière</option>
                    <option value="adel">adelscott</option>
                    <option value="leffe">Leffe</option>
                    <option value="IPA" selected>Leffe IPA</option>
                    <option value="jesaispas">aucune idée</option>
                </select>

                <select id="cocktail" name="cocktail[]" multiple>
                    <option value="fraise" selected>fraise</option>
                    <option value="carotte">carotte</option>
                    <option value="gingembre" selected>gingembre</option>
                    <option value="tabasco">tabasco</option>
                </select>

                <label htmlFor="homme">homme</label>
                <input type="radio" name="sexe" id="homme" value="homme" required/>
                <label htmlFor="femme">femme</label>
                <input type="radio" name="sexe" id="femme" value="femme" required/>

                <label htmlFor="voiture">voiture</label>
                <input type="checkbox" id="voiture" name="vehicule[]" value="voiture" required/>
                <label htmlFor="velo">velo</label>
                <input type="checkbox" id="velo" name="vehicule[]" checked value="velo" required/>
                <label htmlFor="trotinette">trotinette</label>
                <input type="checkbox" id="trotinette" name="vehicule[]" value="trotinette" required/>

                <button type="submit" onClick={this.methodeALaCon}>Envoyez</button>

            </form>
            {JSON.stringify(this.state)}
            <span id="messageErreur"></span>
        </div>

    }
}

console.log(JSON)
ReactDOM.render(<Formulaire/>, document.getElementById('reactForm'));

