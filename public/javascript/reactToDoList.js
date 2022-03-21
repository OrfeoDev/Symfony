class ToDoList extends React.Component {


    constructor(props)
    {
        super(props);

        this.state = {
            todoField: '',
            liste: [],
            listeFaite: []
        };
    }

 addSubmit=(e)=>{
        e.preventDefault();
 }

 changeToDoField=(e)=>{

        this.state({todoField: e.traget})
 }
    removeTask = (liste, index) => liste.filter((val, i) => i != index);

    removeTaskBt = (e) =>
    {
let tmp =this.state.liste.slice()
    }



    render()
    {
        return <>
            <form action="" method="post" onSubmit={this.addSubmit}>
                <input name="todo" value={this.state.todoField} onChange={this.changeTodoField} />

                <button type="submit">Ajouter</button>
            </form>

            <p>{this.state.liste.length ? "Tache à faire" : ""}</p>
            <ul>
                <List remove={this.removeTaskBt} completed={this.completedTask} info="todo" data={this.state.liste}/>
            </ul>

            <p>{this.state.listeFaite.length ? "Tache faite" : ""}</p>
            <ul>
                <List remove={this.removeTaskBt} completed={this.completedTask} info="fait" data={this.state.listeFaite}/>
            </ul>
        </>
    }
}




ReactDOM.render(<ToDoList/>, document.getElementById('todolist'));