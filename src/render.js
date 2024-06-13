// module strictly for displaying elements
import { pageManager } from "./index.js";

const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderSidebar();
    }

    const createElement = function(tag, classAttribute, innerText){
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined) {
            const splitClassStringsArray = classAttribute.split(" ");
            for (let singleClass of splitClassStringsArray){
                createdElement.classList.add(singleClass);
            }
        };
        if (innerText !== undefined) {createdElement.innerText = innerText};
        return createdElement;
    }

    let baseBackground;
    const renderBaseBackground = function(){
        baseBackground = createElement("div", "content area");
        const body = document.querySelector("body");
        body.appendChild(baseBackground);
        return baseBackground;
    }

    let header;
    const renderHeader = function(){
        header = createElement("div", "header area");
        appendHeaderChildElements();
        baseBackground.appendChild(header);
        return header;
    }

    const appendHeaderChildElements = function(){
        const logo = createElement("h1","header logo","To Do List");
        const addProjectButton = createElement("button", "project button", "+");
        header.appendChild(logo);
        header.appendChild(addProjectButton);
    }

    let sidebar;
    const renderSidebar = function(){
        sidebar = createElement("div","sidebar area");
        const projectsAndTodosToDisplay = pageManager.getProjectsAndNakedTodos();
        const projectsArray = projectsAndTodosToDisplay.projects;
        const todosArray = projectsAndTodosToDisplay.todosWithoutProject;
        for (let project of projectsArray){
            appendProjectTab(project);
        }
        for (let todo of todosArray){
            appendTodoTab(todo);
        }
    }

    const appendProjectTab = function(projectToDisplay){
        const projectBarArea = createElement("div","project-bar area");
        const projectName = createElement("p","project name",projectToDisplay.name);
    }

    const appendTodoTab = function(todoToDisplay){
        const todoBarArea = createElement("div","todo-bar area");
        const todoName = createElement("p","todo name",todoToDisplay.name);
    }

    return {init};
}();



export {renderManager};