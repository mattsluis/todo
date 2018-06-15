import React, {Component} from 'react';

import Input from '../core/input/input';
import Button from '../core/button/button';

import Api from 'middleware/api';

export default class newTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: {
                title: "",
                description: "",
                finished: false,
                created_at: "",
                id: "",
            }
        }
    }
    handleChange(val) {
        this.setState({
            newTodo: Object.assign({}, this.state.newTodo, val)
        });
    }

    onSubmit = (event) => {
        const { newTodo } = this.state;
        const data = {
            todo: {
                title: newTodo.title,
                description: newTodo.description,
                finished: false,
            }
        }
        Api.postTodo(data).then( () => {
            this.props.handleSubmit(data);
        });

    }

    render() {
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

        const addBtnProps = {
            classNames: "add",
            buttonText: "add",
            onClick: this.onSubmit,
        }

        return (
            <li>
                <div className="inputGroup">
                    <Input {...inputProps.title}/>
                    <Input {...inputProps.description}/>
                    <Button {...addBtnProps}/>
                </div>
            </li>
        )
    }
}
