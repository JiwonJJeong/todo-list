// this module is for working with localStorage to store data //
import { pageManager } from "./index.js";
import { createProject } from "./project.js";
import { createChecklist, createTodo } from "./todo.js";

const storageManager = function () {
    let projects = [];
    let todos = [];
    let isStorageAvailable;

    const storageAvailable = function () {
        let test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            console.log("local storage available");
            return true;
        } catch (e) {
            console.log("local storage unavailable");
            return false;
        }
    }

    const turnStorageOn = function () {
        isStorageAvailable = checkStorageAvailable();
    }

    const checkStorageAvailable = function () {
        return Boolean(storageAvailable("localStorage"));
    }

    turnStorageOn();

    const getProjectsAndTodosFromStorage = function () {
        const partialProjectsAndTodos = getPartialProjectsAndTodos();
        if (partialProjectsAndTodos == undefined) {
            alert("No projects or todos obtained from storage")
            return undefined;
        }
        const partialProjects = partialProjectsAndTodos.partialProjects;
        const partialTodos = partialProjectsAndTodos.partialTodos
        for (let partialProject of partialProjectsAndTodos.partialProjects) {
            reattachProjectMethods(partialProject);
        }
        for (let partialTodos of partialProjectsAndTodos.partialTodos) {
            reattachTodoMethods(partialTodos);
        }
        return { partialProjects, partialTodos };
    }

    let originalProject = createProject("original");
    let originalTodo = createTodo("original");
    let originalChecklist = createChecklist("original");
    const reattachProjectMethods = function (partial) {
        partial.prototype = originalProject.prototype;
        for (let todo of partial.getTodoArray()) {
            reattachTodoMethods(todo);
        }
    }

    const reattachTodoMethods = function (partial) {
        partial.prototype = originalTodo.prototype;
        for (let checklist of partial.getChecklistArray()) {
            reattachChecklistMethods(checklist);
        }
    }

    const reattachChecklistMethods = function (partial) {
        partial.prototype = originalChecklist.prototype;
    }

    const getPartialProjectsAndTodos = function () {
        let partialProjects = [];
        let partialTodos = [];
        if (!isStorageAvailable) {
            return;
        }
        let i = 0;
        let projectFromStorage = localStorage.getItem(`project${i}`);
        while (projectFromStorage !== null) {
            partialProjects.push(JSON.parse(projectFromStorage));
            i++;
            projectFromStorage = localStorage.getItem(`project${i}`);
        }
        i = 0;
        let todoFromStorage = localStorage.getItem(`todo${i}`);
        while (todoFromStorage !== null) {
            partialTodos.push(JSON.parse(todoFromStorage));
            i++;
            todoFromStorage = localStorage.getItem(`todo${i}`);
        }
        return { partialProjects, partialTodos }
    }

    const setAllProjectsAndTodos = function () {
        if (!isStorageAvailable) {
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
        if (!isStorageAvailable) {
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

    const stringifyProject = function (projectObject) {
        let projectJSON = JSON.stringify(projectObject);
        return projectJSON;
    }

    const stringifyTodo = function (todoObject) {
        const initialJSON = JSON.stringify(todoObject);
        const checklistJSON = stringifyChecklist(todoObject);
        const finalTodoJSON = insertChecklistJSON(checklistJSON, initialJSON);
        return finalTodoJSON;
    }

    const stringifyChecklist = function (todoObject) {
        let JSONstring = "";
        const checklistArray = todoObject.getChecklistArray();
        console.log(checklistArray);
        for (let checklist of checklistArray) {
            JSONstring += JSON.stringify(checklist) + ", ";
        }
        if (JSONstring.length > 0) {
            JSONstring.slice(-2);
        }
        return JSONstring;
    }

    const insertTodoJSON = function (todoJSON, initialJSON) {
        const indexOfTodoArrayKey = initialJSON.indexOf("todoArray");
        const indexToAddTo = indexOfTodoArrayKey + ('todoArray":[');
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + todoJSON
            + initialJSON.substring(indexToAddTo);
        return insertedJSON;
    }

    const insertChecklistJSON = function (checklistArrayJSON, initialJSON) {
        const indexOfChecklistArrayKey = initialJSON.indexOf("checklistArray");
        const indexToAddTo = indexOfChecklistArrayKey + ('checklistArray":[').length;
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + checklistArrayJSON
            + initialJSON.substring(indexToAddTo);
        return insertedJSON;
    }

    const removeProjectOrTodo = function (object) {
        if (!isStorageAvailable) {
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
        getProjectsAndTodosFromStorage, removeProjectOrTodo,
    }


}();

export { storageManager };