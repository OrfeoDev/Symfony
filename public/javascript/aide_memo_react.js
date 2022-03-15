



// <> = React.Fragment
// accolade = code js

let message = 'bonjour';
let oResult = <>
    <h1>
    {message} = {message ?? 'aurevoir'}
</h1>
    <span> bientot la pause</span>
</>;

ReactDOM.render(oResult,document.getElementById('idPage'));


/// Component
function MonComposant(maPropriete,children){
    return <>
        <h1>
            {maPropriete} = {message ?? 'aurevoir'}
        </h1>
        <span> bientot la pause</span>

    </>
}