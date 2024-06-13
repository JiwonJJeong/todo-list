// module for project that (can) hold todos //
import {completeToggleable} from "./todo.js";

function createProject(name, ...todoArray) {

    let name = name;
    let isComplete = false;
    let todoArray = todoArray;

    const getTodoArray = function () {
        return todoArray;
    }

    const addTodo = function (newTodo) {
        todoArray.push(newTodo);
    }

    const removeTodo = function (todoToRemove) {
        todoArray.pop(todoToRemove);
    }

    // sort by priority only with 3 being highest, 1 being lowest
    const sortTodos = function () {
        todoArray.prototype.sort(comparePriority(a, b));
    }
    const comparePriority = function(a,b){
        const priorityA = a.priority;
        const priorityB = b.priority;
        if (priorityA > priorityB) {
            return -1;
        } else if (priorityA < priorityB) {
            return 1;
        } else {
            return 0;
        }
    };

    const updateComplete = function (boolean) {
        if (boolean === undefined) {
            isComplete = isAllTodosComplete();
        } else {
            isComplete = boolean;
        }
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
        updateComplete,
        sortTodos,
        addTodo,
        removeTodo,
        getTodoArray,
        ...completeToggleable,
    }
}

export {createProject};