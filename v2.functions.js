var todos = ['item 1', 'item 2', 'item 3'];

// a function to display todos
function displayTodos() {
    console.log('My todos:', todos);
}

displayTodos();

// a function to add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo();

// a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(0, 1);

// a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(1);
