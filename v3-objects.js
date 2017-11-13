// store the todos array on an object

// var todos = ['item 1', 'item 2', 'item 3'];

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },
// an addTodo method
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
// a changeTodo method
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
// a deleteTodo method
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}; 
