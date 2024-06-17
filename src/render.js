// module strictly for displaying elements
import { pageManager } from "./index.js";

const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderSidebar();
        renderDefaultContent();
        bindAllEvents();
    }

    // functions related to displaying and rendering

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
        baseBackground = createElement("div", "base area");
        const body = document.querySelector("body");
        body.appendChild(baseBackground);
    }

    let header;
    const renderHeader = function(){
        header = createElement("div", "header area");
        const logo = createElement("h1","header logo","To Do List");
        header.appendChild(logo);
        baseBackground.appendChild(header);
    }

    let sidebar;
    const renderSidebar = function(){
        sidebar = createElement("div","sidebar area");
        const projectsAndTodosToDisplay = pageManager.getProjectsAndNakedTodos();
        const projectsArray = projectsAndTodosToDisplay.projects;
        const todosArray = projectsAndTodosToDisplay.todosWithoutProject;
        for (let project of projectsArray){
            const projectTab = composeProjectTab(project);
            sidebar.appendChild(projectTab);
        }
        for (let todo of todosArray){
            const todoTab = composeTodoTab(todo);
            sidebar.appendChild(todoTab);
        }
        baseBackground.appendChild(sidebar);
    }

    const composeProjectTab = function(projectToDisplay){
        const projectBarAndTodoArea = createElement("div","project-and-child-todo area");
        const projectBarArea = createElement("div","project bar area");
        const projectName = createElement("p","project name",projectToDisplay.name);
        projectBarArea.appendChild(projectName);
        projectBarAndTodoArea.appendChild(projectBarArea);
        // make sure to render todos of the project, if the project should be open
        if (projectToDisplay.getIsTodosShown()){
            const todosArray = projectToDisplay.getTodoArray();
            for (let todo of todosArray){
                const todoTab = composeTodoTab(todo);
                todoTab.project = projectToDisplay;
                projectBarAndTodoArea.appendChild(todoTab);
            }
        }
        projectBarArea.project = projectToDisplay;
        return projectBarAndTodoArea;
    }

    const composeTodoTab = function(todoToDisplay){
        const todoBarArea = createElement("div","todo bar area");
        const todoName = createElement("p","todo name",todoToDisplay.name);
        todoBarArea.appendChild(todoName);
        todoBarArea.object = todoToDisplay;
        return todoBarArea;
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

    const renderTodoContent = function(todo){
        clearContentArea();
        const todoTitle = createElement("h2","content title",todo.name);
        const todoDate = createElement("p","content date",todo.dueDate);
        const todoDescription = createElement("p","content description",todo.description);
        const todoChecklist = composeChecklistElements(todo.getChecklistArray());
    }

    const composeChecklistElements = function(checklistArray){
        const checklistArea = createElement("div","checklist area");
        for (let checklist of checklistArray){
            const checkIcon = createElement("div");
            const checkText = createElement("p","checklist text",checklist.description);
            checklistArea.appendChild(checkIcon);
            checklistArea.appendChild(checkText);
        }
        return checklistArea;
    }

    const clearContentArea = function(){
        while(content.firstChild()){
            content.removeChild(content.firstchild());
        }
    }

    // all binding event listerner functions

    const bindAllEvents = function(){
        bindSidebarArea();
        //bindContentArea();
    }

    const bindSidebarArea = function(){
        const projectBars = sidebar.querySelectorAll(".project.bar.area");
        for (let projectBar of projectBars){
            bindProjectBar(projectBar,projectBar.project);
        }
        const nakedTodoBars = sidebar.querySelectorAll(".sidebar.area > .todo.bar.area");
        for (let todoBar of nakedTodoBars){
            bindNakedTodoBar(todoBar,todoBar.object);
        }
    }

    const bindProjectBar = function(projectBar, projectObject){
        projectBar.addEventListener("click", () => toggleOpenCloseProject(projectBar,projectObject));
        if (projectObject.getIsTodosShown()){
            const childTodos = projectObject.getTodoArray();
            let childBar = projectBar.nextSibling;
            console.log(childTodos);
            for (let i = 0; i<childTodos.length;i++){
                const childTodoObject = projectObject.getTodo(i);
                bindChildTodoBar(childBar,childTodoObject,projectObject);
                childBar = childBar.nextSibling;
            }
        }
    }

    const toggleOpenCloseProject = function(projectBar, projectObject){
        console.log("You are trying to open/close the project " + projectObject.name);
        const projectBarAndTodoAreaToBeReplaced = projectBar.parentNode;
        console.log(projectBarAndTodoAreaToBeReplaced);
        projectObject.toggleShowTodos();
        const newProjectBarAndTodoArea = composeProjectTab(projectObject);
        sidebar.replaceChild(newProjectBarAndTodoArea, projectBarAndTodoAreaToBeReplaced);
        const newProjectBar = newProjectBarAndTodoArea.querySelector(".project.bar.area");
        bindProjectBar(newProjectBar, projectObject);
    }

    const bindChildTodoBar = function(todoBarNode, childTodoObject, projectObject){
        todoBarNode.addEventListener("click", () =>renderTodoContent(childTodoObject));
    }

    const bindNakedTodoBar = function(todoBar,todoObject){
        todoBar.addEventListener("click", () => renderTodoContent(todoObject));
    }

    return {init};
}();



export {renderManager};