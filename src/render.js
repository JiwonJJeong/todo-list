// module strictly for displaying elements
import { pageManager } from "./index.js";

const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderSidebar();
        renderDefaultContent();
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
        baseBackground.appendChild(sidebar);
    }

    const appendProjectTab = function(projectToDisplay){
        const projectBarArea = createElement("div","project-bar area");
        const projectName = createElement("p","project name",projectToDisplay.name);
        projectBarArea.appendChild(projectName);
        sidebar.appendChild(projectBarArea);
    }

    const appendTodoTab = function(todoToDisplay){
        const todoBarArea = createElement("div","todo-bar area");
        const todoName = createElement("p","todo name",todoToDisplay.name);
        todoBarArea.appendChild(todoName);
        sidebar.appendChild(todoBarArea);
    }

    let content;
    const renderDefaultContent = function(){
        content = createElement("div","content area");
        const defaultText = createElement("p","default text","Let's get started! Choose a todo.");
        const defaultSubText = createElement("p","default-sub text","Or create one!");
        const defaultAddTodoButton = createElement("button","add-todo button","+");
        content.appendChild(defaultText);
        content.appendChild(defaultSubText);
        content.appendChild(defaultAddTodoButton);
        baseBackground.appendChild(content);
    }

    return {init};
}();



export {renderManager};