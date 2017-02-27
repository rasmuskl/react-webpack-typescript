import * as $ from 'jquery';

export default class Api {
    static getTodos(): JQueryPromise<TodoItem[]> {
        return $.get('/api/todo/gettodos');
    }

    static addTodo(title: string): JQueryPromise<TodoItem> {
        return $.post('/api/todo/addtodo', {title});
    }

    static toggleCompletion(id: number, completed: boolean): JQueryPromise<boolean> {
        return $.post('/api/todo/togglecompletion', { id, completed });
    }

    static clearCompleted(): JQueryPromise<TodoItem[]> {
        return $.post('/api/todo/clearcompleted');
    }
}
