// module strictly for displaying elements
import { pageManager } from "./index.js";

const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderSidebar();
        renderDefaultContent();
        prerenderDialogs();
        bindAllEvents();
    }

    // helper functions to easily create DOM elements

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

    const createLabelAndInput = function(id, type = "text", labelText){
        const label = document.createElement("label");
        label.innerText = labelText;
        label.for = id;
        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = id;
        return {label, input};
    }

    const composeContainedFieldElement = function({label,input}){
        const containerDiv = createElement("div",input.name);
        containerDiv.append(label, input);
        return containerDiv;
    }

    // functions related to displaying and rendering

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
            const projectTab = composeProjectAndChildTodosTab(project);
            sidebar.appendChild(projectTab);
        }
        for (let todo of todosArray){
            const todoTab = composeTodoTab(todo);
            sidebar.appendChild(todoTab);
        }
        baseBackground.appendChild(sidebar);
    }

    const composeProjectAndChildTodosTab = function(projectToDisplay){
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
        projectBarAndTodoArea.project = projectToDisplay;
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
        const todoTitle = createElement("h2","content title",todo.name);
        const todoDate = createElement("p","content date",todo.dueDate);
        const todoDescription = createElement("p","content description",todo.description);
        const todoChecklist = composeChecklistElements(todo.getChecklistArray());
        content.appendChild(todoTitle);
        content.appendChild(todoDate);
        content.appendChild(todoDescription);
        content.appendChild(todoChecklist);
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
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
    }

    // codes for dialogs. Use dialogs for new todo forms

    const prerenderDialogs = function(){
        const newTodoFormDialog = composeNewTodoFormDialog();
        baseBackground.appendChild(newTodoFormDialog);
    }

    const composeNewTodoFormDialog = function(){
        const todoFormDialog = document.createElement("dialog");
        const todoForm = document.createElement("form");
        const todoFormElementsArray = Object.values(composeTodoFormElements());
        for (let element of todoFormElementsArray){
            todoForm.appendChild(element);
        }
        todoFormDialog.appendChild(todoForm);
        return todoFormDialog;
    }

    const composeTodoFormElements = function(){
        const nameFields = composeContainedFieldElement(createLabelAndInput("name","text","Title"));
        const descriptionFields = composeContainedFieldElement(createLabelAndInput("description","text","Description"));
        const dueDateFields = composeContainedFieldElement(createLabelAndInput("dueDate","date","Due Date"));
        const priorityQuestion = composePriorityRadioInput();
        return {nameFields, descriptionFields, dueDateFields, priorityQuestion};
    }

    const composePriorityRadioInput = function(){
        const priorityQuestionContainer = createElement("div","priority question area");
        const priorityRadioQuestionText = createElement("p","priority text","Priority");
        const priorityHighRadioFields = createLabelAndInput("priorityHigh","radio", "High");
        const priorityMediumRadioFields = createLabelAndInput("priorityMedium","radio","Medium");
        const priorityLowRadioFields = createLabelAndInput("priorityLow","radio","Low");
        priorityQuestionContainer.append(priorityRadioQuestionText,
            priorityHighRadioFields.input, priorityHighRadioFields.label,
            priorityMediumRadioFields.input, priorityMediumRadioFields.label,
            priorityLowRadioFields.input, priorityLowRadioFields.label);
        return priorityQuestionContainer;
    }

    // all binding event listerner functions

    const bindAllEvents = function(){
        bindSidebarArea();
        bindContentArea();
    }

    const bindSidebarArea = function(){
        const projectAndChildTodoBars = sidebar.querySelectorAll(".project-and-child-todo.area");
        for (let projectAndChildTodoBar of projectAndChildTodoBars){
            bindProjectAndChildTodosBar(projectAndChildTodoBar);
        }
        const nakedTodoBars = sidebar.querySelectorAll(".sidebar.area > .todo.bar.area");
        for (let todoBar of nakedTodoBars){
            bindTodoBar(todoBar);
        }
    }

    const bindProjectAndChildTodosBar = function(projectAndChildTodosNode){
        const projectBarNode = projectAndChildTodosNode.querySelector(".project.bar.area");
        projectBarNode.addEventListener("click", () => pageManager.toggleOpenCloseProjectTab(projectAndChildTodosNode));
        if (projectBarNode.project.getIsTodosShown()){
            let childBarNode = projectBarNode.nextSibling;
            while (childBarNode !== null){
                bindTodoBar(childBarNode);
                childBarNode = childBarNode.nextSibling;
            }
        }
    }

    const bindTodoBar = function(todoBar){
        todoBar.addEventListener("click", () =>rerenderContentArea(todoBar.object));
    }

    const rerenderContentArea = function(todoObject){
        clearContentArea();
        renderTodoContent(todoObject);
    }

    const rerenderProjectAndChildTodosArea = function (projectAndChildTodosAreaNode){
        const newNode = composeProjectAndChildTodosTab(projectAndChildTodosAreaNode.project);
        sidebar.replaceChild(newNode, projectAndChildTodosAreaNode);
        bindProjectAndChildTodosBar(newNode);
    }

    const bindContentArea = function(){
        const addTodoButton = content.querySelector(".add-todo.button");
        addTodoButton.addEventListener("click", () => renderNewTodoForm());
    }

    return {init, rerenderProjectAndChildTodosArea};
}();



export {renderManager};