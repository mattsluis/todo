import React, {Component} from 'react';

import Todo from 'components/todoList/todo/todo';

import Button from 'components/core/button/button';

import Api from 'middleware/api';

import Style from './style.scss';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete(postId) {
        console.log(`todo id ${postId}`);
        this.props.handleDelete(postId);
    }

    onUpdate = (data) => {
        console.log(`list.jsx ${data}`);
        this.props.handleUpdate(data);
    }

    generateList() {
        const { todos, todo } = this.props;

        const list = todos.map((todo) => {
            return (
                <li key={todo.id}>
                    <Todo
                        todo={todo}
                        handleDelete={(event) => this.onDelete(todo.id)}
                        handleUpdate={this.onUpdate}
                    />
                </li>
            )
        });
        return list;
    }

    handleDelete(postId) {
        console.log(`DESTROY ${postId}`);
        Api.destroyTodo(postId);
    }

    render() {
        return this.generateList();
    }

}
