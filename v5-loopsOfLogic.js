
 var todoList = {
    todos: [],
    displayTodos: function() {
        // if this.todos.length is equal to 0
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!')
        } else {
            // print todos as normal
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                // console.log(this.todos[i].todoText);
                // check if .completed is true
                if (this.todos[i].completed === true) {
                // print with (x)
                console.log('(x)', this.todos[i].todoText);
                // else
                } else {
                // print with ( )
                console.log('( )', this.todos[i].todoText);
                }
            }
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