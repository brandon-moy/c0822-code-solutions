import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const response = await fetch('/api/todos');
      if (response.ok) {
        const todos = await response.json();
        this.setState({ todos });
      }
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    // fetch('/api/todos')
    //   .then(response => response.json())
    //   .then(todos => this.setState({ todos }))
    //   .catch(err => console.error(err));
    this.fetchData();
  }

  async addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    *   - create a shallow copy of the todos array from state
    *   - add the todo received from the server to the copied array
    *   - replace the old todos array in state with the new one
    *
    * DO NOT MUTATE the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    const method = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    try {
      const response = await fetch('/api/todos', method);
      if (response.ok) {
        const newTodo = await response.json();
        const updateTodos = this.state.todos.concat(newTodo);
        this.setState({ todos: updateTodos });
      }
    } catch (err) {
      console.error(err);
    }
    // fetch('/api/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newTodo)
    // })
    //   .then(response => response.json())
    //   .then(newTodo => {
    //     const updateTodos = this.state.todos.concat(newTodo);
    //     this.setState({ todos: updateTodos });
    //   })
    //   .catch(err => console.error(err));
  }

  async toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const position = this.state.todos.findIndex(todo => todo.todoId === todoId);
    const isCompleted = this.state.todos[position].isCompleted;
    const toggle = !isCompleted;
    const toggleTodo = { isCompleted: toggle };
    // fetch(`/api/todos/${todoId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(toggleTodo)
    // })
    //   .then(response => response.json())
    //   .then(toggledTodo => {
    //     const updateTodos = [...this.state.todos];
    //     updateTodos[position] = toggledTodo;
    //     this.setState({ todos: updateTodos });
    //   })
    //   .catch(err => console.error(err));
    const method = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(toggleTodo)
    };
    try {
      const response = await fetch(`/api/todos/${todoId}`, method);
      if (response.ok) {
        const toggledTodo = await response.json();
        const updateTodos = [...this.state.todos];
        updateTodos[position] = toggledTodo;
        this.setState({ todos: updateTodos });
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
