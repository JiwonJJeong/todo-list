// module for project that (can) hold todos //
import {pageManager} from "./index.js";

function createProject(name) {
    const methods = projectMethodDelegate();

    let isComplete = false;
    let todoArray = [];
    let isTodosShown = false;

    return {
        ...methods,
        name,
        todoArray,
        isTodosShown,
    }
}

const projectMethodDelegate = function(){

    const getTodoArray = function () {
        return this.todoArray;
    }

    const getTodo = function(index){
        return this.todoArray[index];
    }

    const addTodo = function (newTodo) {
        this.todoArray.push(newTodo);
    }

    const removeTodo = function (todoToRemove) {
        this.todoArray.pop(todoToRemove);
    }

    // sort by priority only with 3 being highest (and first), 1 being lowest
    const sortTodos = function () {
        this.todoArray.sort(pageManager.comparePriority);
    }

    const toggleShowTodos = function(){
        this.isTodosShown = !this.isTodosShown;
    }

    const getIsTodosShown = function(){
        return this.isTodosShown;
    }

    return{
        sortTodos,
        getTodo,
        addTodo,
        removeTodo,
        getTodoArray,
        toggleShowTodos,
        getIsTodosShown,
    }
}

const attachProjectMethods = function(partial){
    const methods = projectMethodDelegate();

    return {
        ...methods,
        ...partial,
    }
}

export {createProject, attachProjectMethods};