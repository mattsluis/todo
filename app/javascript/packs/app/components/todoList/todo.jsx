import React, {Component} from 'react';

import Input from '../core/input/input';
import Button from '../core/button/button';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: "",
                title: "",
                description: "",
                finished: "",
                editable: false,
            }
        }
    }

    handleChange(val) {
        this.setState({
            todo: Object.assign({}, this.state.todo, val)
        });
    }

    handleEdit = () => {
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                editable: !this.state.editable,
            },
        }));
        console.log(`editable ${this.state.todo.editable}`)
    }

    handleSubmit = () => {
        const { todo } = this.state;
        const id = this.props.todo.id

        const data = {
            id: id,
            title: todo.title,
            description: todo.description,
        }
        console.log(data);
        this.props.handleUpdate(data);

        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                editable: false,
            },
        }));
        console.log(`todo.jsx ${this.state.todo.editable}`);

    }

    handleCancel = () => {
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                editable: false,
            },
        }));
        console.log(`editable ${this.state.todo.editable}`)

    }



    render() {
        const { todo } = this.state;

        const inputProps = {
            title: {
                placeholder: "Code.",
                inputChange: (event) => {this.handleChange({title: event.target.value})},
            },
            description: {
                placeholder: "Write code and write more code.",
                inputChange: (event) => {this.handleChange({description: event.target.value})},
            }
        };

        const btnProps = {
            update: {
                classNames: "Update",
                buttonText: "Update",
                onClick: this.handleEdit,
            },
            cancel: {
                classNames: "Cancel",
                buttonText: "Cancel",
                onClick: this.handleCancel,
            },
            submit: {
                classNames: "Submit",
                buttonText: "Submit",
                onClick: this.handleSubmit,
            },
            delete: {
                classNames: "Delete",
                buttonText: "Delete",
                onClick: this.props.handleDelete,
            },
        }

        return (
            <div className="todoGroup">
                {todo.editable ? <Input {...inputProps.title} /> : <h4>{this.props.todo.title}</h4>}
                {todo.editable ? <Input {...inputProps.description} /> : <p>{this.props.todo.description}</p>}
                {todo.editable ? <Button {...btnProps.cancel}/> : ''}
                {todo.editable ? <Button {...btnProps.submit}/> : <Button {...btnProps.update}/>}
                <Button {...btnProps.delete} />
            </div>
        )
    }
}
