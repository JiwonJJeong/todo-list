// module strictly for displaying elements
import { pageManager } from "./index.js";
import upIcon from "./images/menu-up.svg"
import downIcon from "./images/menu-down.svg"

const renderManager = function () {

    const init = function () {
        renderBaseBackground();
        renderHeader();
        renderHelpButton();
        renderSidebar();
        renderDefaultContent();
        prerenderDialogs();
        bindAllEvents();
        prerenderEditNameForm();
    }

    // helper functions to easily create DOM elements

    const createElement = function (tag, classAttribute, innerText) {
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined && classAttribute !== null) {
            const splitClassStringsArray = classAttribute.split(" ");
            for (let singleClass of splitClassStringsArray) {
                createdElement.classList.add(singleClass);
            }
        };
        if (innerText !== undefined) { createdElement.innerText = innerText };
        return createdElement;
    }

    const createLabelAndInput = function (id, type = "text", labelText, value, requiredBoolean, maxlength) {
        const label = document.createElement("label");
        label.innerText = labelText;
        label.for = id;
        let input;
        if (type === "textarea"){
            input = document.createElement("textarea");
        } else{
            input = document.createElement("input");
            input.type = type;
        }
        input.id = id;
        input.name = id;
        if (value !== undefined && value !== null) {
            input.value = value;
        }
        if (requiredBoolean === true) {
            input.setAttribute("required", "");
        }
        if (maxlength !== undefined){
            input.setAttribute("maxlength",maxlength);
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
        image.style.width = "29px";
        return image;
    }

    // functions related to displaying and rendering
    const renderHelpButton = function(){
        const helpButton = createElement("button","help button","?");
        header.appendChild(helpButton);
    }

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
        const dropdownButton = createElement("button", "new-dropdown button", "Menu Options");
        const newButtonContainer = prerenderNewButtons();
        return { dropdownButton, newButtonContainer }
    }

    const prerenderNewButtons = function () {
        const container = createElement("div", "new-button container");
        const newProjectButton = createElement("button", "new project button", "New Project");
        const newTodoButton = createElement("button", "new todo button", "New Todo");
        const deleteButton = createElement("button", "delete button", "Remove Project or Todo");
        container.appendChild(newProjectButton);
        container.appendChild(newTodoButton);
        container.appendChild(deleteButton);
        toggleShowHideElement(container);
        return container;
    }

    const toggleShowHideElement = function (element) {
        const currentDisplayState = element.style.display;
        if (currentDisplayState !== "none") {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
        const dropdownButton = sidebar.querySelector(".new-dropdown.button");
        if (dropdownButton !== null){
            if (dropdownButton.classList.contains("pressed")){
                dropdownButton.classList.remove("pressed");
            } else {
                dropdownButton.classList.add("pressed");
            }
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

    const appendNewTodoAtIndex = function(todoObject, index, projectIndex){
        const todoTabNode = composeTodoTab(todoObject);
        let todoNodeList;
        if (projectIndex == undefined){
            todoNodeList = document.querySelectorAll(".sidebar.area > .todo.bar.area");
        } else {
            const projectList = sidebar.querySelectorAll(".project-and-child-todo");
            todoNodeList = projectList[projectIndex].querySelectorAll(".todo.bar.area");
        }
        const todoNodeToInsertBefore = todoNodeList[index];
        if (todoNodeToInsertBefore !== undefined){
            todoNodeToInsertBefore.parentNode.insertBefore(todoTabNode, todoNodeToInsertBefore);
        } else {
            let todoNodeToInsertAfter = todoNodeList[index-1];
            todoNodeToInsertAfter.after(todoTabNode);
        }
        console.log(todoNodeToInsertBefore, todoNodeList, index);
        return todoTabNode;
    }

    const renderMoveProjectImages = function (projectBarAndTodoArea) {
        const container = createElement("div","icon container");
        const upIconElement = createImage(upIcon, "up icon", "move project up icon");
        const downIconElement = createImage(downIcon, "down icon", "move project down icon");
        upIconElement.projectAndChildNode = projectBarAndTodoArea;
        downIconElement.projectAndChildNode = projectBarAndTodoArea;
        const projectBar = projectBarAndTodoArea.querySelector(".project.bar.area");
        container.append(upIconElement, downIconElement);
        projectBar.appendChild(container);
    }

    const hideIcons = function(projectBarAndTodoArea){
        const icons = projectBarAndTodoArea.querySelectorAll("img.icon");
        for (let icon of icons){
            icon.style.display = "none";
        }
    }

    const displayIcons = function(projectBarAndTodoArea){
        const icons = projectBarAndTodoArea.querySelectorAll("img.icon");
        for (let icon of icons){
            icon.style.display = "inline";
        }
    }

    const removeTab = function(indexOfProject, indexOfTodo){
        let projectNodeToSearch;
        // find the project to delete from if there is a project specified
        if (indexOfProject !== null){
            projectNodeToSearch = sidebar.querySelectorAll(".project-and-child-todo.area")[indexOfProject];
            console.log(projectNodeToSearch);
        }
        // if projectIndex specified AND todoIndex specified AND the project is open, delete the todo of the project
        if (indexOfProject !== null && indexOfTodo !== undefined && projectNodeToSearch.project.getIsTodosShown()){
            const todoToRemove = projectNodeToSearch.querySelectorAll(":scope > .todo.bar.area")[indexOfTodo];
            todoToRemove.parentNode.removeChild(todoToRemove);
        } 
        // else if projectIndex not specified AND todoIndex specified, delete the naked todo
        else if (indexOfProject == null && indexOfTodo !== undefined){
            const todoToRemove = sidebar.querySelectorAll(":scope > .todo.bar.area")[indexOfTodo];
            todoToRemove.parentNode.removeChild(todoToRemove);
        }
        // else if no index for todo is specified, delete the entire project specified
        else if (indexOfProject !== null && indexOfTodo == undefined){
            projectNodeToSearch.parentNode.removeChild(projectNodeToSearch);
        }
    }

    // prerenderEditNameForm, able to be moved around as needed
    let prerenderedEditNameForm;
    const prerenderEditNameForm = function(){
        prerenderedEditNameForm = createElement("form","edit name form");
        const input = createElement("input");
        input.name = "name";
        input.setAttribute("maxlength",40);
        const submitButton = createElement("submit","submit button", "Save");
        bindEditNameFormSubmit(submitButton, input);
        prerenderedEditNameForm.appendChild(input);
        prerenderedEditNameForm.appendChild(submitButton);
        prerenderedEditNameForm.isActive = false;
    };

    // form will submit on both clicking the submit OR enter button
    const bindEditNameFormSubmit = function(buttonNode, inputNode){
        buttonNode.addEventListener("click", (e) => pageManager.processEditNameForm(e, prerenderedEditNameForm));
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
        content = composeDefaultContent();
        baseBackground.appendChild(content);
    }

    const composeDefaultContent = function(){
        const contentArea = createElement("div", "content area");
        const defaultText = createElement("p", "default text", "Let's get started! Choose a todo.");
        const defaultAddTodoButton = createElement("button", "add-todo button", "Or create one!");
        const defaultHelplistHeader = createElement("p","help header","Need help? Check out these functions: ");
        const defaultHelpList = composeHelpList();
        contentArea.appendChild(defaultText);
        contentArea.appendChild(defaultAddTodoButton);
        contentArea.append(defaultHelplistHeader, defaultHelpList);
        return contentArea;
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
        for (let i=0; i<checklistArray.length; i++) {
            const checklist = checklistArray[i];
            const checkfield = createLabelAndInput("checklist " + i,"checkbox", checklist.description);
            if (checklist.isComplete){
                checkfield.input.setAttribute("checked","");
            }
            checklistArea.append(checkfield.input, checkfield.label);
        }
        return checklistArea;
    }

    const composeHelpList = function(){
        const list = createElement("ul","help list");
        const helpFunction1 = createElement("li",null,"Click the + button on the sidebar to dropdown options.");
        const helpFunction2 = createElement("li",null,"Click on a project tab to open or close its todos.");
        const helpFunction3 = createElement("li",null,"Move projects with the up/down icons.");
        const helpFunction4 = createElement("li",null,"Secondary click on any side tab to rename it.");
        const helpFunction5 = createElement("li",null,"Checkmark any tasks within todos to save it as complete.");
        list.append(helpFunction1, helpFunction2, helpFunction3, helpFunction4, helpFunction5);
        return list;
    }

    const clearContentArea = function () {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    // codes for dialogs. Use dialogs for new todo forms

    let newTodoFormDialog;
    let deleteDialog;
    const prerenderDialogs = function () {
        newTodoFormDialog = composeNewTodoFormDialog();
        deleteDialog = composeDeleteDialog();
        baseBackground.append(newTodoFormDialog, deleteDialog);
    }

    const showNewTodoFormDialog = function () {
        rerenderProjectSelection();
        newTodoFormDialog.showModal();
    }

    const closeNewTodoFormDialog = function () {
        newTodoFormDialog.querySelector("form").reset();
        resetChecklistFieldsToOne();
        resetSizeOfTextarea();
        newTodoFormDialog.close();
    }

    const composeNewTodoFormDialog = function () {
        const todoFormDialog = createElement("dialog", "new todo dialog");
        const todoForm = document.createElement("form");
        const todoFormElementsArray = Object.values(composeTodoFormElements());
        for (let element of todoFormElementsArray) {
            todoForm.appendChild(element);
        }
        const buttonContainer = createElement("div","button container");
        const submitButton = createElement("input", "submit button", "Submit");
        submitButton.type = "submit";
        const cancelButton = createElement("button" ,"cancel button", "Cancel");
        cancelButton.type = "button";
        buttonContainer.append(cancelButton,submitButton);
        todoForm.appendChild(buttonContainer);
        todoFormDialog.appendChild(todoForm);
        return todoFormDialog;
    }

    const composeTodoFormElements = function () {
        const nameFields = composeContainedFieldElement(createLabelAndInput("name", "text", "Title*:", null, true, 40));
        const descriptionFields = composeContainedFieldElement(createLabelAndInput("description", "textarea", "Description:"));
        const dueDateFields = composeContainedFieldElement(createLabelAndInput("dueDate", "date", "Due Date:"));
        const priorityQuestion = composePriorityRadioInput();
        const projectFieldQuestion = composeProjectSelectInput();
        const checklistQuestion = composeChecklistInputArea();
        return { nameFields, dueDateFields, priorityQuestion, projectFieldQuestion, descriptionFields, checklistQuestion };
    }

    const composePriorityRadioInput = function () {
        const priorityQuestionContainer = createElement("div", "priority question area");
        const priorityRadioQuestionText = createElement("p", "priority text", "Priority*:");
        const radioContainer = createElement("div","container");
        const priorityHighRadioFields = createLabelAndInput("priority", "radio", "High", 3, true);
        const priorityMediumRadioFields = createLabelAndInput("priority", "radio", "Medium", 2);
        const priorityLowRadioFields = createLabelAndInput("priority", "radio", "Low", 1);
        radioContainer.append(priorityHighRadioFields.input, priorityHighRadioFields.label,
            priorityMediumRadioFields.input, priorityMediumRadioFields.label,
            priorityLowRadioFields.input, priorityLowRadioFields.label);
        priorityQuestionContainer.append(priorityRadioQuestionText,radioContainer);
        return priorityQuestionContainer;
    }

    const composeProjectSelectInput = function(){
        const container = createElement("div","project question area");
        const questionText = createElement("p","project text","Add to project: ");
        const selectElement = composeProjectSelection();
        container.append(questionText, selectElement);
        return container;
    }

    const composeProjectSelection = function(){
        const selectElement = createElement("select", "project selection");
        const projectNames = pageManager.getProjectsAndNakedTodos().projects.map((project)=>(project.name));
        projectNames.unshift("(no project)");
        for (let i=0; i < projectNames.length ; i++){
            const option = document.createElement("option");
            option.value = i-1;
            option.innerText = projectNames[i];
            selectElement.appendChild(option);
        }
        return selectElement;
    }

    const rerenderProjectSelection = function(){
        console.log("project selection for new todo form rerendered")
        const selectElement = newTodoFormDialog.querySelector("select");
        const newSelect = composeProjectSelection();
        selectElement.parentNode.replaceChild(newSelect,selectElement);
    }

    const composeChecklistInputArea = function(){
        const container = createElement("div","checklist question area");
        const questionText = createElement("p","checklist text","Make checklist: ");
        const field = composeContainedFieldElement(createLabelAndInput("checklist", "text", "Task 1", null, false));
        const addAnotherFieldButton = createElement("button","add checklist button","+");
        addAnotherFieldButton.type = "button";
        container.append(questionText, field, addAnotherFieldButton);
        return container;
    }

    let checklistCount = 2;
    const addAnotherChecklistField = function(){
        const field = composeContainedFieldElement(createLabelAndInput("checklist", "text", "Task " + checklistCount, null, false));
        checklistCount++;
        const nodeToAppendBefore = newTodoFormDialog.querySelector(".add.checklist.button");
        nodeToAppendBefore.parentNode.insertBefore(field, nodeToAppendBefore);
    }

    const resetChecklistFieldsToOne = function(){
        checklistCount = 1;
        const checklistArea = newTodoFormDialog.querySelector(".checklist.question.area");
        const checklists = checklistArea.querySelectorAll("div.checklist");
        console.log(checklists);
        for (let i = 1; i<checklists.length; i++){
            checklistArea.removeChild(checklists[i]);
        }
    }

    const resetSizeOfTextarea = function(){
        const textarea = newTodoFormDialog.querySelector("textarea");
        textarea.style.width = "374px";
        textarea.style.height = "123px";
    }

    // code for delete dialog

    const showDeleteDialog = function(){
        deleteDialog.showModal();
        updateDeleteFormSelection();
    }

    const closeDeleteDialog = function(){
        deleteDialog.close();
        deleteDialog.querySelector("form").reset();
    }

    const composeDeleteDialog = function(){
        deleteDialog = createElement("dialog","delete dialog");
        const deleteForm = composeDeleteForm();
        deleteDialog.appendChild(deleteForm);
        return deleteDialog;
    }

    const updateDeleteFormSelection = function(){
        const oldDeleteForm = deleteDialog.querySelector(".delete.form");
        const newDeleteForm = composeDeleteForm();
        oldDeleteForm.parentNode.replaceChild(newDeleteForm, oldDeleteForm);
        bindDeleteFormDialogArea();
    }

    const composeDeleteForm = function(){
        const deleteProjectPrompt = createElement("label", "delete project label", "Delete an entire project: ");
        const projectSelection = composeProjectSelection();
        const deleteTodoPrompt = createElement("label", "delete todo label", "Delete todo: ");
        const todoSelection = composeTodoSelection();
        const buttonContainer = createElement("div","button container");
        const submitButton = createElement("input","submit button", "Submit");
        submitButton.type = "submit";
        const cancelButton = createElement("button", "cancel button" ,"Cancel");
        cancelButton.type = "button";
        buttonContainer.append(cancelButton, submitButton);
        const form = createElement ("form","delete form");
        form.append(deleteProjectPrompt, projectSelection, deleteTodoPrompt, todoSelection, buttonContainer);
        return form;
    }

    const composeTodoSelection = function(){
        const selectElement = createElement("select","todo selection");
        const projects = pageManager.getProjectsAndNakedTodos().projects;
        const nakedTodos = pageManager.getProjectsAndNakedTodos().todosWithoutProject;
        const noSelectOption = document.createElement("option")
        noSelectOption.innerText = "(no todo)";
        noSelectOption.value = -1;
        selectElement.appendChild(noSelectOption);
        for (let project of projects){
            const optgroup = document.createElement("optgroup");
            const projectIndex = projects.indexOf(project);
            optgroup.label = project.name;
            const todos = project.getTodoArray();
            for (let todo of todos){
                const selection = document.createElement("option");
                selection.value = [projectIndex, todos.indexOf(todo)];
                selection.innerText = todo.name;
                optgroup.appendChild(selection);
            }
            selectElement.appendChild(optgroup);
        }
        for (let todo of nakedTodos){
            const selection = document.createElement("option");
            selection.value = [-1,nakedTodos.indexOf(todo)];
            selection.innerText = todo.name;
            selectElement.appendChild(selection);
        }
        return selectElement;
    }

    // most binding event listerner functions

    const bindAllEvents = function () {
        bindHelpButton();
        bindSidebarArea();
        bindContentArea();
        bindTodoFormDialogArea();
        bindDeleteFormDialogArea();
    }

    const bindHelpButton = function(){
        const helpButton = document.querySelector(".help.button");
        helpButton.addEventListener("click", function (){
            clearContentArea();
            const newContent = composeDefaultContent();
            baseBackground.replaceChild(newContent, content);
            content = newContent;
            bindContentArea();
    })};

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
        const deleteButton = newButtonContainer.querySelector(".delete.button");
        deleteButton.addEventListener("click", () => showDeleteDialog());
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
        projectBarNode.addEventListener("auxclick", function() {
            renderEditNameFormAtBar(projectBarNode);
            hideIcons(projectAndChildTodosNode);
        });
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

    const bindDeleteFormDialogArea = function(){
        const submitButton = deleteDialog.querySelector(".submit.button");
        const cancelButton = deleteDialog.querySelector(".cancel.button");
        submitButton.addEventListener("click", (e) => pageManager.processDeleteFormSubmit(e, deleteDialog.querySelector("form")));
        cancelButton.addEventListener("click", closeDeleteDialog);
    }

    // content binding

    const rerenderContentArea = function (todoObject) {
        clearContentArea();
        renderTodoContent(todoObject);
        bindContentArea(todoObject);
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

    const bindContentArea = function (todoObject) {
        const addTodoButton = content.querySelector(".add-todo.button");
        if (todoObject == undefined ){
            addTodoButton.addEventListener("click", () => showNewTodoFormDialog());
        } else{
            const checklistInputs = content.querySelectorAll("input");
            const todoChecklists = todoObject.getChecklistArray();
            console.log(checklistInputs);
            console.log(todoChecklists);
            for (let i = 0; i < checklistInputs.length ; i++){
                checklistInputs[i].addEventListener("click", ()=>(todoChecklists[i].toggleComplete()));
            }
        }
    }

    const bindTodoFormDialogArea = function () {
        const submitButton = newTodoFormDialog.querySelector(".submit.button");
        const cancelButton = newTodoFormDialog.querySelector(".cancel.button");
        const addAnotherFieldButton = newTodoFormDialog.querySelector(".add.checklist.button");
        const todoForm = newTodoFormDialog.querySelector("form");
        submitButton.addEventListener("click", (e) => pageManager.processNewTodoFormSubmit(e, todoForm));
        cancelButton.addEventListener("click", closeNewTodoFormDialog);
        addAnotherFieldButton.addEventListener("click", addAnotherChecklistField)
    }

    return { init, swapNodeElements,
        appendProjectChildTodos, clearProjectChildTodos,
        renderAndBindNewProject, appendNewTodoAtIndex,
        closeNewTodoFormDialog, bindChildTodoBars,
        bindTodoBar, closeEditNameForm,
        removeTab, closeDeleteDialog, displayIcons,
     };
}();



export { renderManager };