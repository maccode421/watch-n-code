item 1, item 2, item 3

'item 1', 'item 2', 'item 3'

['item 1', 'item 2', 'item 3']

// 
var todos = ['item 1', 'item 2', 'item 3']
console.log(todos)

console.log('My todos: ', todos)

// .push adds an item to an array
todos.push('item 4') 

['item 1', 'item 2', 'item 3', 'item 4']

todos.push('item 5')

['item 1', 'item 2', 'item 3', 'item 4', 'item 5']

// returns first item in array
todos[0]

// returns second item in array
todos[1]

// returns third item in array
todos[2]

// returns fourth item in array
todos[3]

// returns fifth item in array
todos[4]

// returns undefined
todos[5]

// change or update an existing todo
todos[0] = 'item 1 updated'

['item 1 updated', 'item 2', 'item 3', 'item 4', 'item 5']

// call the index add new value
todos[0] = 'new value'

// delete a todo
todos
['item 1 updated', 'item 2', 'item 3', 'item 4', 'item 5']
// you pass index and number of items to delete 
todos.splice(0, 1)
['item 2', 'item 3', 'item 4', 'item 5']

todos.splice(3, 1)
['item 5']
['item 2', 'item 3', 'item 4']

// returns empty bracket
todos.splice(3, 1)
[]