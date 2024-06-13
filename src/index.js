//module to call the other create or render functions based on inputs

import {renderManager} from "./render.js";
import {createTodo, createChecklist} from "./todo.js";
import {createProject} from "./project.js";

const pageManager = function(){
    let projects = []
    let todosWithoutProject = [];

    const getProjectsAndNakedTodos = function(){
        return {projects,todosWithoutProject}
    }

    const moveTodoToProject = function(project, todo){
        project.addTodo(todo);
    }

    const removeTodoFromProject = function(project, todo){
        project.removeTodo(todo);
        todosWithoutProject.push(todo);
    }

    // use parameter project = null if you want the todo to have no project
    const addTodo = function(project,title,description,dueDate,priority,...checklistArray){
        const todo = createTodo(title,description,dueDate,priority,...checklistArray);
        if (project !== null){
            if (!projects.includes(project)){
                alert("You are trying to add a todo to a nonexisting project");
            }
            moveTodoToProject(project, todo);
        } else{
            todosWithoutProject.push(todo);
        }
    }

    const addProject = function(name){
        projects.push(createProject(name));
    }

    const addExampleTodosandProjects = function(){
        addTodo(null, "Test Todo1", "This todo has no project", "Test dueDate", 3, "Test check list 1", "Test check list 2");
        const testProject = addProject("Test Project1");
        addTodo(testProject, "Test Todo2", "This todo has a project", "Test dueDate", 3, "Test check list 1", "Test check list 2");
    }

    return {getProjectsAndNakedTodos, addTodo, addProject, moveTodoToProject, removeTodoFromProject, addExampleTodosandProjects};

}();



pageManager.addExampleTodosandProjects();
renderManager.init();

export {pageManager};