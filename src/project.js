// module for project that (can) hold todos //
import {completeToggleable} from "./todo.js";

function createProject(name) {

    let isComplete = false;
    let todoArray = [];
    let isTodosShown = false;

    const getTodoArray = function () {
        return todoArray;
    }

    const getTodo = function(index){
        return todoArray[index];
    }

    const addTodo = function (newTodo) {
        todoArray.push(newTodo);
    }

    const removeTodo = function (todoToRemove) {
        todoArray.pop(todoToRemove);
    }

    // sort by priority only with 3 being highest (and first), 1 being lowest
    const sortTodos = function () {
        todoArray.prototype.sort(comparePriority(a, b));
    }
    const comparePriority = function(a,b){
        return b.priority - a.priority;
    };

    const updateCompleteBasedOnTodos = function (boolean) {
        isComplete = isAllTodosComplete();
    }

    const isAllTodosComplete = function () {
        for (todo of todoArray) {
            if (todo.isComplete === false) {
                return false;
            }
        }
        return true;
    }

    const toggleShowTodos = function(){
        isTodosShown = !isTodosShown;
    }

    const getIsTodosShown = function(){
        return isTodosShown;
    }

    return {
        name,
        updateCompleteBasedOnTodos,
        sortTodos,
        getTodo,
        addTodo,
        removeTodo,
        getTodoArray,
        ...completeToggleable,
        toggleShowTodos,
        getIsTodosShown,
    }
}

export {createProject};