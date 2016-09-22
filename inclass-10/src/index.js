//
// Inclass React ToDo Exercise
// ============================
//
// Using the views as described in our previous exercise
// re-implement the ToDo App using React.
// 
// Below you will transpile the h() function calls
// into JSX and implement ToDos.addTodo()
//
;(function() {

'use strict'

class ToDoItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            done: false
        }
    }

    render() { return (
        <li id="task${_taskId++}">
            <i className="check glyphicon glyphicon-check" onClick={(e) => this.setState({done: !this.state.done})}></i>
            <span className={this.state.done ? "completed" :""}>
                {this.props.text}
            </span>
            <i className="destroy glyphicon glyphicon-remove" onClick={() => this.props.remove()}></i>
        </li>
        /*

        h("li", { id: `task${_taskId++}`}, [
            h("i", { className: "check glyphicon glyphicon-check", onClick: toggleDone }, []),
            h("span", { done: false  // not an attribute //}, typeof(text) === "string" ? text : ""),
        ])
        */
    )}
}

class ToDos extends React.Component {

    constructor(props) {
        super(props)
        this.nextId = 2;
        this.state = {
            todoItems: [
                {id:0, text:"This is an item"},
                {id:1, text:"Another item" }
            ]
        }

    }

    addTodo() {
        // IMPLEMENT ME!
        const text = this.newTODO.value;

        // this.setState({
        //     todoItems: this.state.todoItems.push({id:this.nextId++, text})
        // })

        this.setState({ todoItems: [
                ...this.state.todoItems,
                {id:this.nextId++, text}
            ]
        })

        console.log(text);
    }

    removeTodo(removeId) {

        this.setState({ 
            todoItems: this.state.todoItems.filter( ({id, text}) => id != removeId)
        })
    }

    render() { return (
        <div>
            <input type="text" placeholder="To Do" ref={ (node) => this.newTODO = node }></input>
            <button onClick={() => this.addTodo()}>Add Item</button>
            <span className="submit">
                <a href="https://webdev-rice.herokuapp.com" target="_blank">"Submit your exercise"</a>
            </span>
            <ul className="todo">

                {this.state.todoItems.map(({id, text}) => <ToDoItem
                    key={id}
                    text={text}
                    remove={() => this.removeTodo(id)} />)}
            </ul>
        </div>

        // h("div", { },
        //     h("input", { id: "newTODO", type: "text", placeholder: "To Do"}),
        //     h("button", { onClick: addItem }, "Add Item"),
        //     h("span", { className: "submit" }, [
        //         h("a", { href: "https://webdev-rice.herokuapp.com",
        //              target: "_blank" }, "Submit your exercise"),
        //     ]),
        //     h("ul", { className: "todo" }, listItems)
        // )

    )}
}

ReactDOM.render(<ToDos/>, document.getElementById('app'));

})()
