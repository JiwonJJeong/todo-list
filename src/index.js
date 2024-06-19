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
        console.log("Move project up" + index)
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
        console.log("Move project down")
        if (index <= projects.length){
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
        console.log("You are trying to open/close the project: " + projectObject.name);
        projectObject.toggleShowTodos();
        if (projectObject.getIsTodosShown()){
            renderManager.appendProjectChildTodos(projectAndChildTodosAreaNode);
            const projectBarNode = projectAndChildTodosAreaNode.querySelector(".project.bar.area");
            renderManager.bindChildTodoBars(projectBarNode);
        } else{
            renderManager.clearProjectChildTodos(projectAndChildTodosAreaNode);
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
            const newTodo = createAndAddTodo(null,name,description,dueDate,priority);
            sortNakedTodos();
            const indexToAddTo = todosWithoutProject.indexOf(newTodo);
            const newTodoNode = renderManager.appendNewTodoAtIndex(newTodo, indexToAddTo);
            renderManager.bindTodoBar(newTodoNode);
            renderManager.closeNewTodoFormDialog();
        }
    }

    const processNewProject = function(){
        const newProjectObject = createAndAddProject("New Project (rename me!)");
        const newNode = renderManager.renderAndBindNewProject(newProjectObject);
    }
    
    const processEditNameForm = function(event){
        event.preventDefault();
        console.log("hi");
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
        testProject2.toggleShowTodos();
    }

    return {getProjectsAndNakedTodos, createAndAddTodo, createAndAddProject,
        moveTodoToProject, removeTodoFromProject, addExampleTodosandProjects, toggleOpenCloseProjectTab,
        processNewTodoFormSubmit, comparePriority, moveProjectNodeUp, moveProjectNodeDown,
        processNewProject, processEditNameForm,
    };

}();



pageManager.addExampleTodosandProjects();
renderManager.init();

console.log(pageManager.getProjectsAndNakedTodos());
console.log(pageManager.getProjectsAndNakedTodos().projects[0].getTodoArray());

export {pageManager};