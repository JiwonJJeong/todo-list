// module for project that (can) hold todos //
import {completeToggleable} from "./todo.js";

function createProject(name) {

    let isComplete = false;
    let todoArray = [];

    const getTodoArray = function () {
        return todoArray;
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

    return {
        name,
        updateCompleteBasedOnTodos,
        sortTodos,
        addTodo,
        removeTodo,
        getTodoArray,
        ...completeToggleable,
    }
}

export {createProject};