import React from "react";

function List({remove, completed, info, data})
{
    return <>{data.map((todo, key) => {
        return <li key={key} >{todo}
            <button key={key + '_remove'} data-key={key} data-info={info} onClick={remove}>supprime</button>
            <button key={key + '_completed'} data-key={key} data-info={info} onClick={completed}>{info === 'todo' ? "fait" : "à faire"}</button>
        </li>;
    })
    }
    </>;
}

export default class todoList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            todoField: '',
            liste: ['test', 'blabl', 'rtet'],
            listeFaite: ["c'est fait"]
        };
    }

    removeTask = (liste, index) => liste.filter((val, i) => i != index);

    removeTaskBt = (e) =>
    {

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

