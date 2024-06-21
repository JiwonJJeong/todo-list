// this module is for working with localStorage to store data //
import {pageManager} from "./index.js";

const storageManager = function () {
    let projects;
    let todos;

    const storageAvailable = function (type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    const checkStorageAvailable = function(){
        return Boolean(storageAvailable("localStorage"));
    }

    const getProjectsAndTodosFromStorage = function(){
        if (!checkStorageAvailable){
            return;
        }
        let i = 0;
        let projectFromStorage = localStorage.getItem(`project${i}`);
        while (projectFromStorage !== null){
            projects.push(JSON.parse(projectFromStorage));
        }
        i = 0;
        let todoFromStorage = localStorage.getItem(`todo${i}`);
        while (todoFromStorage !== null){
            todos.push(JSON.parse(todoFromStorage));
        }
        return {projects, todos};
    }

    const reassignMethodsToObjectsFromStorage = function(){
        for (let project of projects){

        }
        for (let todo of todos){

        }
    }

    const setAllProjectsAndTodos = function(){
        if (!checkStorageAvailable){
            return;
        }
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        for (let project of projects){
            setProjectOrTodo(project);
        }
        for (let todo of todos){
            setProjectOrTodo(todo);
        }
    }

    const setProjectOrTodo = function(object){
        if (!checkStorageAvailable){
            return;
        }
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1){
            localStorage.setItem(`project${projectIndex}`, JSON.stringify(object));
        } else {
            localStorage.setItem(`todo${todoIndex}`, JSON.stringify(object));
        }
    }

    const removeProjectOrTodo = function(object){
        if (!checkStorageAvailable){
            return;
        }
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1){
            localStorage.removeItem(`project${projectIndex}`);
        } else {
            localStorage.removeItem(`todo${todoIndex}`);
        }
    }

    return {
        setAllProjectsAndTodos, setProjectOrTodo,
        getProjectsAndTodosFromStorage, removeProjectOrTodo
    }


}();

export {storageManager};