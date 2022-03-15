let oForm = document.querySelector('form');

oForm.addEventListener('submit', checkBeforeSubmit);

function checkBeforeSubmit(e)
{
    e.preventDefault(); // annule le comportement par défaut

    let oBiere = document.getElementById('biere');

    document.getElementById('biereResult').innerHTML = `Biere = ${oBiere.value}<br>index selectionné : ${oBiere.selectedIndex}`;


    let oCocktail = document.getElementById('cocktail');

    let test = '';
    Array.from(oCocktail.options).map((e) => {
        if(e.selected) {
            test += e.value;
        }
    });

    document.getElementById('cocktailResult').innerHTML = `cocktail = ${test}`;
}