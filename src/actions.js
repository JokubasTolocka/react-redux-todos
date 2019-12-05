const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(task){
    return {
        type: ADD_TODO,
        task
    }
}
