function PetitComposant({val})
{
    return <div>{val}</div>;
}

class MonComposant extends React.Component
{
    constructor(props) // cycle de vie 1
    {
        super(props);
        this.maPropriete = "rien";

        this.state = {
            heure : new Date().toLocaleTimeString(),
            chiffreAleatoire : 0
        }
    }

    render() // 2
    {
        return <>
            <h1>L'heure est : {this.state.heure}</h1>

            <PetitComposant val="test" />
            <p>{this.props.proprieteDuCoup} {this.maPropriete}</p>
            <p>{this.props.children}</p>

            <p>{this.state.chiffreAleatoire}</p>
            <button onClick="allumer"> </button>

            {/*<button onClick="">ici je veux afficher allumer / eteint</button>*/}
        </>;
    }

    componentDidMount() // 3
    {
        setInterval(() => {
            this.changeLHeure();
            this.calcRand();
        }, 1000);
    }

    calcRand()
    {
        this.setState({
            chiffreAleatoire :  Math.floor(Math.random() * 30)
        })
    }

    changeLHeure()
    {
        this.setState({
            heure : new Date().toLocaleTimeString()
        });
    }
}

ReactDOM.render(<MonComposant proprieteDuCoup="qu'est ce que je suis con des fois mais je ne suis pas le seul" >je lui met un contenu</MonComposant>,
    document.getElementById('composantClass'));