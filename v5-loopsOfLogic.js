
 var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
            // this.todos.length has 3 items
            // i = 0
            // i = 1
            // i = 2
            console.log(this.todos[i].todoText);
        }
    },
    // an addTodo method
    addTodo: function(todoText) {
        // todoList.addTodo should add objects
        this.todos.push({ 
            todoText: todoText, 
            completed: false
        });
        this.displayTodos();
    },
    // a changeTodo method
    changeTodo: function(position, todoText) {
        // todoList.changeTodo should change the todoText property
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    // a deleteTodo method
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    // todoList.toggleCompleted should flip the completed property
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
}; 