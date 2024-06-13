// module for project that (can) hold todos //

function createProject (name,...todoArray){

    let name = name;
    let isComplete = false;
    let todoArray = todoArray;

    const getName = function(){
        return name;
    }
    
    const setName = function(newName){
        name = newName;
    }

    const getTodoArray = function(){
        return todoArray;
    }

    const addTodo = function(newTodo){
        todoArray.push(newTodo);
    }

    const removeTodo = function(todoToRemove){
        todoArray.pop(todoToRemove);
    }

    // sort by priority only with 3 being highest, 1 being lowest
    const sortTodos = function(){
        
    }

    const updateComplete = function (boolean){
        if (boolean === undefined){
            isComplete = isAllTodosComplete();
        } else {
            isComplete = boolean;
        }
    }

    const isAllTodosComplete = function(){
        for (todo of todoArray){
            if (todo.isComplete === false){
                return false;
            }
        }
        return true;
    }

    return {
        getName,
        setName,
        updateComplete,
    }
}