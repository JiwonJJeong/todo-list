// this module is for working with localStorage to store data //
import { pageManager } from "./index.js";
import { attachProjectMethods,  } from "./project.js";
import { attachTodoMethods, attachChecklistMethods } from "./todo.js";

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
            console.log(localStorage);
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
        const partialTodos = partialProjectsAndTodos.partialTodos;
        let projects = [];
        let todos = [];
        for (let partialProject of partialProjects) {
            projects.push(reattachProjectMethods(partialProject));
        }
        for (let partialTodo of partialTodos) {
            todos.push(reattachTodoMethods(partialTodo));
        }

        return { projects, todos };
    }

    const reattachProjectMethods = function (partial) {
        partial = attachProjectMethods(partial);
        for (let i=0; i< partial.getTodoArray().length; i++) {
            const todo = partial.getTodoArray()[i];
            partial.todoArray[i] = reattachTodoMethods(todo);
        }
        return partial;
    }

    const reattachTodoMethods = function (partial) {
        partial = attachTodoMethods(partial);
        for (let i=0; i< partial.getChecklistArray().length; i++) {
            const checklist = partial.getChecklistArray()[i];
            partial.checklistArray[i] = reattachChecklistMethods(checklist);
        }
        return partial;
    }

    const reattachChecklistMethods = function (partial) {
        partial = attachChecklistMethods(partial);
        return partial;
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
        setAllProjects();
        setAllTodos();
    }

    const setAllProjects = function(){
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        for (let project of projects) {
            setProjectOrTodo(project);
        }
    }

    const setAllTodos = function(){
        const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
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
        const projectIndex = projects.indexOf(object);
        if (projectIndex !== -1) {
            finalJSON = stringifyProject(object);
            localStorage.setItem(`project${projectIndex}`, finalJSON);
            console.log(`Local storage updated project${projectIndex}`)
        } else {
            const todos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
            const todoIndex = todos.indexOf(object);
            finalJSON = stringifyTodo(object);
            localStorage.setItem(`todo${todoIndex}`, finalJSON);
            console.log(`Local storage updated project${projectIndex}`)
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
        for (let checklist of checklistArray) {
            JSONstring += JSON.stringify(checklist) + ", ";
        }
        if (JSONstring.length > 0) {
            JSONstring = JSONstring.slice(0, -2);
        }
        return JSONstring;
    }

    const insertTodoJSON = function (todoJSON, initialJSON) {
        const indexOfTodoArrayKey = initialJSON.indexOf("todoArray");
        const indexToAddTo = indexOfTodoArrayKey + ('todoArray":[');
        const indexToRemoveUpTo = initialJSON.indexOf("]",indexToAddTo);
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + todoJSON
            + initialJSON.substring(indexToRemoveUpTo);
        return insertedJSON;
    }

    const insertChecklistJSON = function (checklistArrayJSON, initialJSON) {
        const indexOfChecklistArrayKey = initialJSON.indexOf("checklistArray");
        const indexToAddTo = indexOfChecklistArrayKey + ('checklistArray":[').length;
        const indexToRemoveUpTo = initialJSON.indexOf("]",indexToAddTo);
        const insertedJSON = initialJSON.substring(0, indexToAddTo)
            + checklistArrayJSON
            + initialJSON.substring(indexToRemoveUpTo);
        return insertedJSON;
    }

    const removeProjectOrTodo = function (objectIndex) {
        if (!isStorageAvailable) {
            return;
        }
        console.log(`trying to remove ${objectIndex}`);
        localStorage.clear();
        setAllProjectsAndTodos();
        console.log(`StorageManager has updated to ${localStorage}`);
        console.log(localStorage);
    }

    return {
        setAllProjectsAndTodos, setProjectOrTodo,
        getProjectsAndTodosFromStorage, removeProjectOrTodo,
    }


}();

export { storageManager };