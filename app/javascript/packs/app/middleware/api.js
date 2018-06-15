import * as api from './api_helper'

export default class Api {

    static getTodos() {
        const url = 'api/v1/todos.json';
        return api.get(url);
    }

    static postTodo(data) {
        const url = 'api/v1/todos.json';
        return api.post(url, data);
    }

    static updateTodo(todo) {
        console.log(todo);
        const url = `/api/v1/todos/${todo.id}.json`;
        return api.put(url, todo)
    }

    static destroyTodo(postId) {
        const url = `/api/v1/todos/${postId}.json`;
        return api.destroy(url);
    }
}
