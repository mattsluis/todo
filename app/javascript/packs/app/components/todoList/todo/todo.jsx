import React, {Component} from 'react';

import Input from 'components/core/input/input';
import Button from 'components/core/button/button';

import Style from './style.scss';

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
                classNames: "btnSubmit",
                buttonText: "Update",
                onClick: this.handleEdit,
            },
            cancel: {
                classNames: "btnCancel",
                buttonText: "Cancel",
                onClick: this.handleCancel,
            },
            submit: {
                classNames: "btnSubmit",
                buttonText: "Submit",
                onClick: this.handleSubmit,
            },
            delete: {
                classNames: "btnDelete",
                buttonText: "Delete",
                onClick: this.props.handleDelete,
            },
        }

        return (
            <div className={Style.todoGroup}>
                <div className={Style.leftCol}>
                    {todo.editable ? <Input {...inputProps.title} /> : <span>{this.props.todo.title}</span>}
                    {todo.editable ? <Input {...inputProps.description} /> : <span>{this.props.todo.description}</span>}
                </div>
                <div className={Style.rightCol}>
                    {todo.editable ? <Button {...btnProps.cancel}/> : ''}
                    {todo.editable ? <Button {...btnProps.submit}/> : <Button {...btnProps.update}/>}
                    <Button {...btnProps.delete} />
                </div>
            </div>
        )
    }
}
