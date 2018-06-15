import React, {Component} from 'react';

import NewTodo from 'components/todoList/new_todo/new_todo';
import List from 'components/todoList/list/list';

import Api from 'middleware/api';

import Style from './style.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        Api.getTodos().then(( response ) => {
            const todos = response;
            this.setState({todos});
        });
    }

    onSubmit = (data) => {
        const newState = this.state.todos.concat(data.todo);
        this.setState({
            todos: newState
        });
    }

    onDelete = (postId) => {
        const { todos } = this.state;

        Api.destroyTodo(postId).then( () => {
            const newState = todos.filter(todo => {
                return todo.id !== postId;
            });
            this.setState({
                todos: newState,
            });
        });
    }

    onUpdate = (data) => {
        const { todos } = this.state;
        console.log("home.jsx", data);
        Api.updateTodo(data).then( () => {
            const concatted = this.state.todos.concat(data);
            const newState = concatted.filter(todo => {
                return todo.id !== data.id;
            });
            this.setState({
                todos: newState,
            });
        });
    }


    render() {
        const listProps = {
            todos: this.state.todos,
            handleDelete: this.onDelete,
            handleUpdate: this.onUpdate,
        }

        return (
            <div className={Style.home}>
                <div className={Style.notepadHeader}></div>
                <div className={Style.vert}></div>
                <ul className={Style.todoList}>
                    <NewTodo handleSubmit={this.onSubmit} />
                    <NewTodo handleSubmit={this.onSubmit} />
                    <NewTodo handleSubmit={this.onSubmit} />
                    <List {...listProps} />
                </ul>
            </div>
        )
    }
}
