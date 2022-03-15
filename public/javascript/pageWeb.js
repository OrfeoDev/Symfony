function MonHeader() {

    return <>
        <header >
           <nav style = {{ backgroundColor:'yellow'}}>
               <ul>
                   <li><a href="/aideMemo.md"> aide memo</a></li>
                   <li><a href="/aideMemo.md"> aide memo</a></li>
                   <li><a href="/aideMemo.md"> aide memo</a></li>
               </ul>
           </nav>
        </header>

    </>;
}


function MonMain({titre,children}) {
    return <main>
        <article>
            <h1>{titre}</h1>
            <div> {children}</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa delectus, doloremque earum ex illum iusto laborum magni modi, molestiae odio odit optio porro quae quas quod ullam voluptas voluptatum.}</div>
        </article>
    </main>;
}

 function MonFooter() {
     return<footer> foooter</footer>
 }
function MaPage() {

    return <>
        <MonHeader/>
        <MonMain titre ="ce qu'il ya dans mon titre"> trop blabala papi</MonMain>
        <MonFooter/>
    </>





}
ReactDOM.render(<MaPage/>,
    document.getElementById('composantFonction'));




// function MonAutreComposant({maPropriete, children})
// {
//     return <>
//         <h1>
//             {maPropriete}
//         </h1>
//
//         <span>{children}</span>  {/* le children est le contenu du composant */}
//     </>;
// }
//
// function PetitComposant({val})
// {
//     return <div>{val}</div>;
// }
//
// function MonComposant()
// {
//     return <>
//         <MonAutreComposant maPropriete="Bonjour le monde en ligne">
//             le children est le contenu du composant MonAutreComposant
//         </MonAutreComposant>
//
//         <PetitComposant val="valeur de mon petit composant" />
//
//         <br />
//         <input type="text" name="cequelonveut" placeholder="tape qqch" />
//     </>;
// }
//
// ReactDOM.render(<MonComposant />,
//     document.getElementById('composantFonction'));