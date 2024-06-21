// this module is for working with localStorage to store data //
import { pageManager } from "./index.js";
import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const storageManager = function () {
    let projects = [];
    let todos = [];

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

    const checkStorageAvailable = function () {
        return Boolean(storageAvailable("localStorage"));
    }

    const getProjectsAndTodosFromStorage = function () {
        return { projects, todos };
        const partialProjectsAndTodos = getPartialProjectsAndTodos();
        for (let partialProject of partialProjectsAndTodos.partialProjects){
            //projects.push(createProject(partialProject.))
        }
        return { projects, todos };
    }

    const getPartialProjectsAndTodos = function () {
        let partialProjects = [];
        let partialTodos = [];
        if (!checkStorageAvailable) {
            return;
        }
        let i = 0;
        let projectFromStorage = localStorage.getItem(`project${i}`);
        while (projectFromStorage !== null) {
            partialProjects.push(JSON.parse(projectFromStorage));
        }
        i = 0;
        let todoFromStorage = localStorage.getItem(`todo${i}`);
        while (todoFromStorage !== null) {
            partialTodos.push(JSON.parse(todoFromStorage));
        }
        return {partialProjects, partialTodos}
    }

    const setAllProjectsAndTodos = function () {
        if (!checkStorageAvailable) {
            return;
        }
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        for (let project of projects) {
            setProjectOrTodo(project);
        }
        for (let todo of todos) {
            setProjectOrTodo(todo);
        }
    }

    const setProjectOrTodo = function (object) {
        if (!checkStorageAvailable) {
            return;
        }
        let finalJSON;
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1) {
            finalJSON = stringifyProject(object);
            localStorage.setItem(`project${projectIndex}`, finalJSON);
        } else {
            finalJSON = stringifyTodo(object);
            localStorage.setItem(`todo${todoIndex}`, finalJSON);
        }
    }

    const stringifyProject = function(projectObject){
        let projectJSON = JSON.stringify(projectObject);
        for (let todo of projectObject.getTodoArray()){
            const todoJSON = stringifyTodo(todo);
            projectJSON = insertTodoJSON(todoJSON, projectJSON);
        }
        return projectJSON;
    }

    const stringifyTodo = function(todoObject){
        const initialJSON = JSON.stringify(todoObject);
        const checklistJSON = stringifyChecklist(todoObject);
        const finalTodoJSON = insertChecklistJSON(checklistJSON, initialJSON);
        return finalTodoJSON;
    }

    const stringifyChecklist = function(todoObject){
        let JSONstring = "";
        const checklistArray = todoObject.getChecklistArray();
        console.log(checklistArray);
        for (let checklist of checklistArray){
            JSONstring += JSON.stringify(checklist) +", ";
        }
        if (JSONstring.length > 0){
            JSONstring.slice(-2);
        }
        return JSONstring;
    }

    const insertTodoJSON = function(todoJSON, initialJSON){
        const indexOfTodoArrayKey = initialJSON.indexOf("todoArray");
        const indexToAddTo = indexOfTodoArrayKey + ('todoArray":[');
        const insertedJSON = initialJSON.substring(0,indexToAddTo)
                        + todoJSON
                        + initialJSON.substring(indexToAddTo);
        return insertedJSON;
    }

    const insertChecklistJSON = function(checklistArrayJSON, initialJSON){
        const indexOfChecklistArrayKey = initialJSON.indexOf("checklistArray");
        const indexToAddTo = indexOfChecklistArrayKey + ('checklistArray":[').length;
        const insertedJSON = initialJSON.substring(0,indexToAddTo)
                        + checklistArrayJSON
                        + initialJSON.substring(indexToAddTo);
        return insertedJSON;
    }

    const removeProjectOrTodo = function (object) {
        if (!checkStorageAvailable) {
            return;
        }
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const projectIndex = projects.indexOf(object);
        const todoIndex = todos.indexOf(object);
        if (projectIndex !== -1) {
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

export { storageManager };