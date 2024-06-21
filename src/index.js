//module to call the other create or render functions based on inputs

import {renderManager} from "./render.js";
import {createTodo} from "./todo.js";
import {createProject} from "./project.js";

import "./styles.css";

const pageManager = function(){
    let projects = []
    let todosWithoutProject = [];

    const getProjectsAndNakedTodos = function(){
        return {projects,todosWithoutProject}
    }

    const moveProjectNodeUp = function(event, projectAndChildNode){
        const project = projectAndChildNode.project;
        const index = projects.indexOf(project);
        console.log("Move project up" + index);
        if (index >= 1){
            renderManager.swapNodeElements(projectAndChildNode, projectAndChildNode.previousElementSibling);
            swapArrayElements(projects, index-1, index);
        } else{
            console.log("This project is as high as it can be!");
        }
        event.stopPropagation();
    }

    const moveProjectNodeDown = function(event, projectAndChildNode){
        const project = projectAndChildNode.project;
        const index = projects.indexOf(project);
        console.log("Move project down" + index);
        console.log(projects.length);
        if (index < projects.length-1){
            renderManager.swapNodeElements(projectAndChildNode, projectAndChildNode.nextElementSibling);
            swapArrayElements(projects, index, index+1);
        } else{
            console.log("This project is as low as it can be!");
        }
        event.stopPropagation();
    }

    const swapArrayElements = function(array, index1, index2){
        const firstElementHolder = array[index1];
        delete array[index1];
        array[index1] = array[index2];
        array[index2] = firstElementHolder;
    }

    const sortNakedTodos = function(){
        todosWithoutProject.sort(comparePriority);
    }

    const comparePriority = function(a,b){
        return b.priority - a.priority;
    };

    const moveTodoToProject = function(project, todo){
        project.addTodo(todo);
    }

    const removeTodoFromProject = function(project, todo){
        project.removeTodo(todo);
        todosWithoutProject.push(todo);
    }

    const toggleOpenCloseProjectTab = function(projectAndChildTodosAreaNode){
        const projectObject = projectAndChildTodosAreaNode.project;
        const projectBar = projectAndChildTodosAreaNode.querySelector(".project.bar.area");
        console.log("You are trying to open/close the project: " + projectObject.name);
        projectObject.toggleShowTodos();
        if (projectObject.getIsTodosShown()){
            renderManager.appendProjectChildTodos(projectAndChildTodosAreaNode);
            const projectBarNode = projectAndChildTodosAreaNode.querySelector(".project.bar.area");
            renderManager.bindChildTodoBars(projectBarNode);
            projectBar.classList.add("open");
        } else{
            renderManager.clearProjectChildTodos(projectAndChildTodosAreaNode);
            projectBar.classList.remove("open");
        }
    }

    const processNewTodoFormSubmit = function(event, formElement){
        let isFormValid = formElement.checkValidity();
        if(!isFormValid){
            formElement.reportValidity();
        } else{
            event.preventDefault();
            const name = formElement.elements.name.value;
            const description = formElement.elements.description.value;
            const dueDate = formElement.elements.dueDate.value;
            const priority = formElement.elements.priority.value;
            const checklists = formElement.elements.checklist;
            const checklistsArray = [...checklists];
            const checklistValuesWithNoBlanks = checklistsArray
                        .map((checklist)=>checklist.value)
                        .filter((value) => value !== "");
            console.log(checklistValuesWithNoBlanks);
            const projectToAddToIndex = formElement.querySelector("select").selectedIndex-1;
            let projectToAddTo = null;
            if (projectToAddToIndex >=0){
                projectToAddTo = projects[projectToAddToIndex];
            }
            const newTodo = createAndAddTodo(projectToAddTo,name,description,dueDate,priority, ...checklistValuesWithNoBlanks);
            sortNakedTodos();
            if (projectToAddTo == null){
                const indexToAddTo = todosWithoutProject.indexOf(newTodo);
                const newTodoNode = renderManager.appendNewTodoAtIndex(newTodo, indexToAddTo);
                renderManager.bindTodoBar(newTodoNode);
            } else if (projectToAddTo.getIsTodosShown()) {
                const indexToAddTo = projectToAddTo.getTodoArray().indexOf(newTodo);
                const newTodoNode = renderManager.appendNewTodoAtIndex(newTodo, indexToAddTo, projectToAddToIndex);
                renderManager.bindTodoBar(newTodoNode);
            }
            renderManager.closeNewTodoFormDialog();
        }
    }

    const processNewProject = function(){
        const newProjectObject = createAndAddProject("New Project (rename me!)");
        const newNode = renderManager.renderAndBindNewProject(newProjectObject);
    }
    
    const processEditNameForm = function(event, formElement){
        event.preventDefault();
        const todoOrProjectObject = formElement.object;
        const name = formElement.elements.name.value;
        todoOrProjectObject.name = name;
        renderManager.closeEditNameForm();
    }

    const processDeleteFormSubmit = function(event, deleteForm){
        event.preventDefault();
        const indexOfProjectToRemove = deleteForm.querySelector(".project.selection").value;
        if (indexOfProjectToRemove >=0){
            const removedProject = projects.splice(indexOfProjectToRemove, 1);
            console.log(removedProject.name + " is deleted");
            renderManager.removeTab(indexOfProjectToRemove);
        }
        const todoSelectionNode = deleteForm.querySelector(".todo.selection");
        const projectAndTodoIndexOfTodoToRemove = todoSelectionNode.value.split(",");
        const indexOfOptgroupSelected = Number(projectAndTodoIndexOfTodoToRemove[0]);
        const indexOfTodoToRemove = Number(projectAndTodoIndexOfTodoToRemove[1]);
        console.log("Indexes for delete: " + indexOfOptgroupSelected + " " + indexOfTodoToRemove)
        if (indexOfOptgroupSelected !== -1 && indexOfTodoToRemove >=0 ){
            const projectToRemoveFrom = projects[indexOfOptgroupSelected];
            const removedTodo = projectToRemoveFrom.getTodoArray().splice(indexOfTodoToRemove, 1)[0];
            renderManager.removeTab(indexOfOptgroupSelected, indexOfTodoToRemove);
            console.log(`${removedTodo.name} from ${projectToRemoveFrom.name} is removed`);
        } else if (indexOfOptgroupSelected == -1 && indexOfTodoToRemove >=0 ){
            const removedTodo = todosWithoutProject.splice(indexOfTodoToRemove, 1)[0];
            renderManager.removeTab(null, indexOfTodoToRemove);
            console.log(`${removedTodo.name} from todos without projects is removed`);
        }
        renderManager.closeDeleteDialog();
    }

    // use parameter project = null if you want the todo to have no project
    const createAndAddTodo = function(project,title,description,dueDate,priority,...checklistArray){
        const todo = createTodo(title,description,dueDate,priority,...checklistArray);
        if (project !== null){
            if (!projects.includes(project)){
                alert("You are trying to add a todo to a nonexisting project");
            }
            moveTodoToProject(project, todo);
            project.sortTodos();
        } else{
            todosWithoutProject.push(todo);
        }
        return todo;
    }

    const createAndAddProject = function(name){
        const createdProject = createProject(name);
        projects.push(createdProject);
        return createdProject;
    }

    const addExampleTodosandProjects = function(){
        createAndAddTodo(null, "Drive mom to airport", "This todo has no project and is high priority!", "Test dueDate", 3, "Check-in for flight", "Pick up mom at 8:00 AM");
        createAndAddTodo(null, "Buy new camping gear", "This todo has no project and is low priority.", "Test dueDate", 1, "Buy new water bottle", "Buy more climbing rope", "Pack new stuff into camping bag");
        const testProject = createAndAddProject("TOP Todo List Project");
        createAndAddTodo(testProject, "Stylize with CSS", "This todo has a project.", "Test dueDate", 1, "Center elements", "Stylize form inputs", "Add icons", "Choose color palette");
        createAndAddTodo(testProject, "Add ability to edit existing todos", "This todo has a project.", "Test dueDate", 3, );
        const testProject2 = createAndAddProject("Woodworking Project");
        createAndAddTodo(testProject2,"Brainstorm something to make", "This todo has a project and should be shown on default", "Test dueDate", 3, "Research inspiration ideas", "Check my current supplies");
    }

    return {getProjectsAndNakedTodos, createAndAddTodo, createAndAddProject,
        moveTodoToProject, removeTodoFromProject, addExampleTodosandProjects, toggleOpenCloseProjectTab,
        processNewTodoFormSubmit, comparePriority, moveProjectNodeUp, moveProjectNodeDown,
        processNewProject, processEditNameForm, processDeleteFormSubmit,
    };

}();



pageManager.addExampleTodosandProjects();
renderManager.init();

console.log(pageManager.getProjectsAndNakedTodos());
console.log(pageManager.getProjectsAndNakedTodos().projects[0].getTodoArray());

export {pageManager};