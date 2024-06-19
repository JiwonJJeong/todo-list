// module strictly for displaying elements
import { pageManager } from "./index.js";
import upIcon from "./images/menu-up.svg"
import downIcon from "./images/menu-down.svg"

const renderManager = function () {

    const init = function () {
        renderBaseBackground();
        renderHeader();
        renderSidebar();
        renderDefaultContent();
        prerenderDialogs();
        bindAllEvents();
        prerenderEditNameForm();
    }

    // helper functions to easily create DOM elements

    const createElement = function (tag, classAttribute, innerText) {
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined) {
            const splitClassStringsArray = classAttribute.split(" ");
            for (let singleClass of splitClassStringsArray) {
                createdElement.classList.add(singleClass);
            }
        };
        if (innerText !== undefined) { createdElement.innerText = innerText };
        return createdElement;
    }

    const createLabelAndInput = function (id, type = "text", labelText, value, requiredBoolean) {
        const label = document.createElement("label");
        label.innerText = labelText;
        label.for = id;
        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = id;
        if (value !== undefined && value !== null) {
            input.value = value;
        }
        if (requiredBoolean === true) {
            input.setAttribute("required", "");
        }
        return { label, input };
    }

    const composeContainedFieldElement = function ({ label, input }) {
        const containerDiv = createElement("div", input.name);
        containerDiv.append(label, input);
        return containerDiv;
    }

    const createImage = function (src, classString, altText) {
        const image = createElement("img", classString);
        image.src = src;
        image.alt = altText;
        image.style.width = "30px";
        return image;
    }

    // functions related to displaying and rendering

    let baseBackground;
    const renderBaseBackground = function () {
        baseBackground = createElement("div", "base area");
        const body = document.querySelector("body");
        body.appendChild(baseBackground);
    }

    let header;
    const renderHeader = function () {
        header = createElement("div", "header area");
        const logo = createElement("h1", "header logo", "To Do List");
        header.appendChild(logo);
        baseBackground.appendChild(header);
    }

    // displaying and rendering sidebar

    let sidebar;
    const renderSidebar = function () {
        sidebar = createElement("div", "sidebar area");
        const newDropdown = composeNewDropdown();
        sidebar.appendChild(newDropdown.dropdownButton);
        sidebar.appendChild(newDropdown.newButtonContainer);
        const projectsAndTodosToDisplay = pageManager.getProjectsAndNakedTodos();
        const projectsArray = projectsAndTodosToDisplay.projects;
        const todosArray = projectsAndTodosToDisplay.todosWithoutProject;
        for (let project of projectsArray) {
            const projectTab = composeProjectAndChildTodosTab(project);
            sidebar.appendChild(projectTab);
        }
        for (let todo of todosArray) {
            const todoTab = composeTodoTab(todo);
            sidebar.appendChild(todoTab);
        }
        baseBackground.appendChild(sidebar);
    }

    const composeNewDropdown = function () {
        const dropdownButton = createElement("button", "new-dropdown button", "+");
        const newButtonContainer = prerenderNewButtons();
        return { dropdownButton, newButtonContainer }
    }

    const prerenderNewButtons = function () {
        const container = createElement("div", "new-button container");
        const newProjectButton = createElement("button", "new project button", "New Project");
        const newTodoButton = createElement("button", "new todo button", "New Todo");
        container.appendChild(newProjectButton);
        container.appendChild(newTodoButton);
        toggleShowHideElement(container);
        return container;
    }

    const toggleShowHideElement = function (element) {
        const currentDisplayState = element.style.display;
        if (currentDisplayState !== "none") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }

    const composeProjectAndChildTodosTab = function (projectToDisplay) {
        const projectBarAndTodoArea = createElement("div", "project-and-child-todo area");
        const projectBarArea = createElement("div", "project bar area");
        projectBarAndTodoArea.project = projectToDisplay;
        projectBarAndTodoArea.object = projectToDisplay;
        projectBarArea.project = projectToDisplay;
        projectBarArea.object = projectToDisplay;
        const projectName = createElement("p", "project name", projectToDisplay.name);
        projectBarArea.appendChild(projectName);
        projectBarAndTodoArea.appendChild(projectBarArea);
        renderMoveProjectImages(projectBarAndTodoArea);
        // make sure to render todos of the project, if the project should be open
        if (projectToDisplay.getIsTodosShown()) {
            appendProjectChildTodos(projectBarAndTodoArea);
        }
        return projectBarAndTodoArea;
    }

    const renderAndBindNewProject = function(projectToDisplay){
        const projectBarNode = composeProjectAndChildTodosTab(projectToDisplay);
        const projectAndChildTodoNodes = sidebar.querySelectorAll(".project-and-child-todo.area");
        const lastProjectBarNodeToAppendAfter = projectAndChildTodoNodes[projectAndChildTodoNodes.length-1];
        lastProjectBarNodeToAppendAfter.after(projectBarNode);
        bindProjectAndChildTodosBar(projectBarNode);
        bindUpDownIcons(projectBarNode)
    }

    const appendProjectChildTodos = function(projectBarAndTodoArea){
        const todosArray = projectBarAndTodoArea.project.getTodoArray();
        for (let todo of todosArray) {
            const todoTab = composeTodoTab(todo);
            todoTab.project = projectBarAndTodoArea.project;
            projectBarAndTodoArea.appendChild(todoTab);
        }
    }

    const clearProjectChildTodos = function(projectBarAndTodoArea){
        const todoBarNodes = projectBarAndTodoArea.querySelectorAll(".todo.bar.area");
        for (let node of todoBarNodes){
            projectBarAndTodoArea.removeChild(node);
        }
    }

    const composeTodoTab = function (todoToDisplay) {
        const todoBarArea = createElement("div", "todo bar area");
        const todoName = createElement("p", "todo name", todoToDisplay.name);
        todoBarArea.appendChild(todoName);
        todoBarArea.object = todoToDisplay;
        return todoBarArea;
    }

    const appendNewTodoAtIndex = function(todoObject, index){
        const todoTabNode = composeTodoTab(todoObject);
        const nakedTodoNodeList = document.querySelectorAll(".sidebar.area > .todo.bar.area");
        const todoNodeToInsertBefore = nakedTodoNodeList[index];
        sidebar.insertBefore(todoTabNode, todoNodeToInsertBefore);
        console.log(todoNodeToInsertBefore, nakedTodoNodeList, index);
        return todoTabNode;
    }

    const renderMoveProjectImages = function (projectBarAndTodoArea) {
        const upIconElement = createImage(upIcon, "up icon", "move project up icon");
        const downIconElement = createImage(downIcon, "down icon", "move project down icon");
        upIconElement.projectAndChildNode = projectBarAndTodoArea;
        downIconElement.projectAndChildNode = projectBarAndTodoArea;
        const projectBar = projectBarAndTodoArea.querySelector(".project.bar.area");
        projectBar.appendChild(upIconElement);
        projectBar.appendChild(downIconElement);
    }

    // prerenderEditNameForm, able to be moved around as needed
    let prerenderedEditNameForm;
    const prerenderEditNameForm = function(){
        prerenderedEditNameForm = createElement("form","edit name form");
        const input = createElement("input");
        input.name = "name";
        const submitButton = createElement("submit");
        bindEditNameFormSubmit(submitButton, input);
        prerenderedEditNameForm.appendChild(input);
        prerenderedEditNameForm.appendChild(submitButton);
        prerenderedEditNameForm.isActive = false;
    };

    // form will submit on both clicking the submit OR enter button
    const bindEditNameFormSubmit = function(buttonNode, inputNode){
        buttonNode.addEventListener("click", () => pageManager.processEditNameForm(e, prerenderedEditNameForm));
        inputNode.addEventListener("keydown", function(e){
            if (e.code == "Enter"){
                pageManager.processEditNameForm(e, prerenderedEditNameForm);
            }
        })
    }

    const renderEditNameFormAtBar = function(barNode){
        if (!prerenderedEditNameForm.isActive){
            const barTextNode = barNode.querySelector(".name");
            barNode.replaceChild(prerenderedEditNameForm, barTextNode);
            prerenderedEditNameForm.holdOldNodeContent = document.createElement("div");
            prerenderedEditNameForm.holdOldNodeContent = barTextNode;
            const input = prerenderedEditNameForm.querySelector("input");
            input.value = barNode.object.name;
            prerenderedEditNameForm.isActive = true;
            prerenderedEditNameForm.object = barNode.object;
        } else{
            alert("Please submit previous edit name.");
            return;
        }
    }

    const closeEditNameForm = function(){
        const textNodeToAddBack = prerenderedEditNameForm.holdOldNodeContent;
        prerenderedEditNameForm.isActive = false;
        prerenderedEditNameForm.parentNode.replaceChild(textNodeToAddBack, prerenderedEditNameForm);
        textNodeToAddBack.innerText = textNodeToAddBack.parentNode.object.name;
    }

    // displaying content

    let content;
    const renderDefaultContent = function () {
        content = createElement("div", "content area");
        const defaultText = createElement("p", "default text", "Let's get started! Choose a todo.");
        const defaultSubText = createElement("p", "default-sub text", "Or create one!");
        const defaultAddTodoButton = createElement("button", "add-todo button", "+");
        content.appendChild(defaultText);
        content.appendChild(defaultSubText);
        content.appendChild(defaultAddTodoButton);
        baseBackground.appendChild(content);
    }

    const renderTodoContent = function (todo) {
        const todoTitle = createElement("h2", "content title", todo.name);
        const todoDate = createElement("p", "content date", todo.dueDate);
        const todoDescription = createElement("p", "content description", todo.description);
        const todoChecklist = composeChecklistElements(todo.getChecklistArray());
        content.appendChild(todoTitle);
        content.appendChild(todoDate);
        content.appendChild(todoDescription);
        content.appendChild(todoChecklist);
    }

    const composeChecklistElements = function (checklistArray) {
        const checklistArea = createElement("div", "checklist area");
        for (let checklist of checklistArray) {
            const checkIcon = createElement("div");
            const checkText = createElement("p", "checklist text", checklist.description);
            checklistArea.appendChild(checkIcon);
            checklistArea.appendChild(checkText);
        }
        return checklistArea;
    }

    const clearContentArea = function () {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    // codes for dialogs. Use dialogs for new todo forms

    let newTodoFormDialog;
    const prerenderDialogs = function () {
        newTodoFormDialog = composeNewTodoFormDialog();
        baseBackground.appendChild(newTodoFormDialog);
    }

    const showNewTodoFormDialog = function () {
        newTodoFormDialog.showModal();
    }

    const closeNewTodoFormDialog = function () {
        newTodoFormDialog.close();
    }

    const composeNewTodoFormDialog = function () {
        const todoFormDialog = document.createElement("dialog");
        const todoForm = document.createElement("form");
        const todoFormElementsArray = Object.values(composeTodoFormElements());
        for (let element of todoFormElementsArray) {
            todoForm.appendChild(element);
        }
        const submitButton = createElement("input", "submit button", "Submit");
        submitButton.type = "submit";
        todoForm.appendChild(submitButton);
        todoFormDialog.appendChild(todoForm);
        return todoFormDialog;
    }

    const composeTodoFormElements = function () {
        const nameFields = composeContainedFieldElement(createLabelAndInput("name", "text", "Title*", null, true));
        const descriptionFields = composeContainedFieldElement(createLabelAndInput("description", "text", "Description"));
        const dueDateFields = composeContainedFieldElement(createLabelAndInput("dueDate", "date", "Due Date"));
        const priorityQuestion = composePriorityRadioInput();
        return { nameFields, descriptionFields, dueDateFields, priorityQuestion };
    }

    const composePriorityRadioInput = function () {
        const priorityQuestionContainer = createElement("div", "priority question area");
        const priorityRadioQuestionText = createElement("p", "priority text", "Priority*");
        const priorityHighRadioFields = createLabelAndInput("priority", "radio", "High", 3, true);
        const priorityMediumRadioFields = createLabelAndInput("priority", "radio", "Medium", 2);
        const priorityLowRadioFields = createLabelAndInput("priority", "radio", "Low", 1);
        priorityQuestionContainer.append(priorityRadioQuestionText,
            priorityHighRadioFields.input, priorityHighRadioFields.label,
            priorityMediumRadioFields.input, priorityMediumRadioFields.label,
            priorityLowRadioFields.input, priorityLowRadioFields.label);
        return priorityQuestionContainer;
    }

    // most binding event listerner functions

    const bindAllEvents = function () {
        bindSidebarArea();
        bindContentArea();
        bindTodoFormDialogArea();
    }

    const bindSidebarArea = function () {
        bindDropdownArea();
        bindAllProjectsAndAnyChildTodos();
        bindAllNakedTodos();
        bindUpDownIcons();
    }

    const bindDropdownArea = function () {
        const dropdownButton = sidebar.querySelector(".new-dropdown.button");
        const newButtonContainer = sidebar.querySelector(".new-button.container");
        dropdownButton.addEventListener("click", () => toggleShowHideElement(newButtonContainer));
        const newProjectButton = newButtonContainer.querySelector(".new.project.button");
        newProjectButton.addEventListener("click", () => pageManager.processNewProject());
        const newTodoButton = newButtonContainer.querySelector(".new.todo.button");
        newTodoButton.addEventListener("click", () => showNewTodoFormDialog());
    }

    const bindAllProjectsAndAnyChildTodos = function () {
        const projectAndChildTodoBars = sidebar.querySelectorAll(".project-and-child-todo.area");
        for (let projectAndChildTodoBar of projectAndChildTodoBars) {
            bindProjectAndChildTodosBar(projectAndChildTodoBar);
        }
    }

    const bindAllNakedTodos = function () {
        const nakedTodoBars = sidebar.querySelectorAll(".sidebar.area > .todo.bar.area");
        for (let todoBar of nakedTodoBars) {
            bindTodoBar(todoBar);
        }
    }

    const bindProjectAndChildTodosBar = function (projectAndChildTodosNode) {
        const projectBarNode = projectAndChildTodosNode.querySelector(".project.bar.area");
        projectBarNode.addEventListener("click", () => pageManager.toggleOpenCloseProjectTab(projectAndChildTodosNode));
        projectBarNode.addEventListener("auxclick", () => renderEditNameFormAtBar(projectBarNode));
        bindChildTodoBars(projectBarNode);
    }

    const bindChildTodoBars = function(projectBarNode){
        if (projectBarNode.project.getIsTodosShown()) {
            let childBarNode = projectBarNode.nextSibling;
            while (childBarNode !== null) {
                bindTodoBar(childBarNode);
                childBarNode = childBarNode.nextSibling;
            }
        }
    }

    const bindTodoBar = function (todoBar) {
        todoBar.addEventListener("click", () => rerenderContentArea(todoBar.object));
        todoBar.addEventListener("auxclick", () => renderEditNameFormAtBar(todoBar));
    }

    const bindUpDownIcons = function (projectBarNode) {
        let upIcons;
        let downIcons;
        // if a project bar node is NOT specified, bind to all icons
        if (projectBarNode === undefined){
            upIcons = sidebar.querySelectorAll(".up.icon");
            downIcons = sidebar.querySelectorAll(".down.icon");
        } else{
            upIcons = [projectBarNode.querySelector(".up.icon")];
            downIcons = [projectBarNode.querySelector(".down.icon")];
        }
        for (let upIconElement of upIcons){
            upIconElement.addEventListener("click", (e)=>pageManager.moveProjectNodeUp(e,upIconElement.projectAndChildNode));
        }
        for (let downIconElement of downIcons){
            downIconElement.addEventListener("click", (e)=>pageManager.moveProjectNodeDown(e,downIconElement.projectAndChildNode));
        }
    }

    // content binding

    const rerenderContentArea = function (todoObject) {
        clearContentArea();
        renderTodoContent(todoObject);
    }

    const swapNodeElements = function(obj1, obj2) {
        // create marker element and insert it where obj1 is
        var temp = document.createElement("div");
        obj1.parentNode.insertBefore(temp, obj1);
        // move obj1 to right before obj2
        obj2.parentNode.insertBefore(obj1, obj2);
        // move obj2 to right before where obj1 used to be
        temp.parentNode.insertBefore(obj2, temp);
        // remove temporary marker node
        temp.parentNode.removeChild(temp);
    }

    const bindContentArea = function () {
        const addTodoButton = content.querySelector(".add-todo.button");
        addTodoButton.addEventListener("click", () => showNewTodoFormDialog());
    }

    const bindTodoFormDialogArea = function () {
        const submitButton = newTodoFormDialog.querySelector(".submit.button");
        const todoForm = newTodoFormDialog.querySelector("form");
        submitButton.addEventListener("click", (e) => pageManager.processNewTodoFormSubmit(e, todoForm));
    }

    return { init, swapNodeElements,
        appendProjectChildTodos, clearProjectChildTodos,
        renderAndBindNewProject, appendNewTodoAtIndex,
        closeNewTodoFormDialog, bindChildTodoBars,
        bindTodoBar, closeEditNameForm,
     };
}();



export { renderManager };