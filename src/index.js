//module to call the other create or render functions based on inputs

import { renderManager } from "./render.js";
import { createTodo } from "./todo.js";
import { createProject } from "./project.js";
import { storageManager } from "./storage.js";

import "./styles.css";


const pageManager = (function () {
  let projects = [];
  let todosWithoutProject = [];

  const getProjectsAndNakedTodos = function () {
    return { projects, todosWithoutProject };
  };

  const moveProjectNodeUp = function (event, projectAndChildNode) {
    const project = projectAndChildNode.project;
    const index = projects.indexOf(project);
    console.log("Move project up" + index);
    if (index >= 1) {
      renderManager.swapNodeElements(
        projectAndChildNode,
        projectAndChildNode.previousElementSibling,
      );
      swapArrayElements(projects, index - 1, index);
      storageManager.setProjectOrTodo(projects[index]);
      storageManager.setProjectOrTodo(projects[index - 1]);
    } else {
      console.log("This project is as high as it can be!");
    }
    event.stopPropagation();
  };

  const moveProjectNodeDown = function (event, projectAndChildNode) {
    const project = projectAndChildNode.project;
    const index = projects.indexOf(project);
    console.log("Move project down" + index);
    console.log(projects.length);
    if (index < projects.length - 1) {
      renderManager.swapNodeElements(
        projectAndChildNode,
        projectAndChildNode.nextElementSibling,
      );
      swapArrayElements(projects, index, index + 1);
      storageManager.setProjectOrTodo(projects[index]);
      storageManager.setProjectOrTodo(projects[index + 1]);
    } else {
      console.log("This project is as low as it can be!");
    }
    event.stopPropagation();
  };

  const swapArrayElements = function (array, index1, index2) {
    const firstElementHolder = array[index1];
    delete array[index1];
    array[index1] = array[index2];
    array[index2] = firstElementHolder;
  };

  const sortNakedTodos = function () {
    todosWithoutProject.sort(comparePriority);
  };

  const comparePriority = function (a, b) {
    return b.priority - a.priority;
  };

  const moveTodoToProject = function (project, todo) {
    project.addTodo(todo);
  };

  const removeTodoFromProject = function (project, todo) {
    project.removeTodo(todo);
    todosWithoutProject.push(todo);
    storageManager.setProjectOrTodo(project);
  };

  const toggleOpenCloseProjectTab = function (projectAndChildTodosAreaNode) {
    const projectObject = projectAndChildTodosAreaNode.project;
    const projectBar =
      projectAndChildTodosAreaNode.querySelector(".project.bar.area");
    console.log(
      "You are trying to open/close the project: " + projectObject.name,
    );
    projectObject.toggleShowTodos();
    if (projectObject.getIsTodosShown()) {
      renderManager.appendProjectChildTodos(projectAndChildTodosAreaNode);
      const projectBarNode =
        projectAndChildTodosAreaNode.querySelector(".project.bar.area");
      renderManager.bindChildTodoBars(projectBarNode);
      projectBar.classList.add("open");
    } else {
      renderManager.clearProjectChildTodos(projectAndChildTodosAreaNode);
      projectBar.classList.remove("open");
    }
    storageManager.setProjectOrTodo(projectObject);
  };

  const processNewTodoFormSubmit = function (event, formElement) {
    let isFormValid = formElement.checkValidity();
    if (!isFormValid) {
      formElement.reportValidity();
    } else {
      event.preventDefault();
      const name = formElement.elements.name.value;
      const description = formElement.elements.description.value;
      const dueDate = formElement.elements.dueDate.value;
      const priority = formElement.elements.priority.value;
      let checklist = formElement.elements.checklist;
      let checklistValuesWithNoBlanks;
      if (checklist.length > 1) {
        const checklistArray = (checklist = Array.from(checklist));
        checklistValuesWithNoBlanks = checklistArray
          .map((checklist) => checklist.value)
          .filter((value) => value !== "");
      } else {
        checklistValuesWithNoBlanks = [checklist.value];
      }
      const projectToAddToIndex =
        formElement.querySelector("select").selectedIndex - 1;
      let projectToAddTo = null;
      if (projectToAddToIndex >= 0) {
        projectToAddTo = projects[projectToAddToIndex];
      }
      const newTodo = createAndAddTodo(
        projectToAddTo,
        name,
        description,
        dueDate,
        priority,
        ...checklistValuesWithNoBlanks,
      );
      if (projectToAddTo == null) {
        sortNakedTodos();
        const indexToAddTo = todosWithoutProject.indexOf(newTodo);
        const newTodoNode = renderManager.appendNewTodoAtIndex(
          newTodo,
          indexToAddTo,
        );
        renderManager.bindTodoBar(newTodoNode);
      } else if (projectToAddTo.getIsTodosShown()) {
        const indexToAddTo = projectToAddTo.getTodoArray().indexOf(newTodo);
        const newTodoNode = renderManager.appendNewTodoAtIndex(
          newTodo,
          indexToAddTo,
          projectToAddToIndex,
        );
        renderManager.bindTodoBar(newTodoNode);
      }
      renderManager.closeNewTodoFormDialog();
    }
  };

  const processNewProject = function () {
    const newProjectObject = createAndAddProject("New Project (rename me!)");
    const newNode = renderManager.renderAndBindNewProject(newProjectObject);
    storageManager.setProjectOrTodo(newProjectObject);
  };

  const processEditNameForm = function (event, formElement) {
    event.preventDefault();
    event.stopPropagation();
    const todoOrProjectObject = formElement.object;
    const name = formElement.elements.name.value;
    todoOrProjectObject.name = name;
    renderManager.displayIcons(formElement.parentNode.parentNode);
    renderManager.closeEditNameForm();
    storageManager.setProjectOrTodo(todoOrProjectObject);
  };

  const processDeleteFormSubmit = function (event, deleteForm) {
    event.preventDefault();
    const indexOfProjectToRemove =
      deleteForm.querySelector(".project.selection").value;
    let removedObject;
    if (indexOfProjectToRemove >= 0) {
      removedObject = projects.splice(indexOfProjectToRemove, 1)[0];
      console.log(removedObject.name + " is deleted");
      renderManager.removeTab(indexOfProjectToRemove);
      storageManager.removeProjectOrTodo(indexOfProjectToRemove);
      renderManager.closeDeleteDialog();
      return;
    }
    const todoSelectionNode = deleteForm.querySelector(".todo.selection");
    const projectAndTodoIndexOfTodoToRemove =
      todoSelectionNode.value.split(",");
    const indexOfOptgroupSelected = Number(
      projectAndTodoIndexOfTodoToRemove[0],
    );
    const indexOfTodoToRemove = Number(projectAndTodoIndexOfTodoToRemove[1]);
    console.log(
      "Indexes for delete: " +
        indexOfOptgroupSelected +
        " " +
        indexOfTodoToRemove,
    );
    // the todo to remove is part of a project
    if (indexOfOptgroupSelected !== -1 && indexOfTodoToRemove >= 0) {
      const projectToRemoveFrom = projects[indexOfOptgroupSelected];
      removedObject = projectToRemoveFrom
        .getTodoArray()
        .splice(indexOfTodoToRemove, 1)[0];
      renderManager.removeTab(indexOfOptgroupSelected, indexOfTodoToRemove);
      console.log(
        `${removedObject.name} from ${projectToRemoveFrom.name} is removed`,
      );
      storageManager.removeProjectOrTodo(indexOfOptgroupSelected);
    }
    // the todo to remove is not part of a project
    else if (indexOfOptgroupSelected == -1 && indexOfTodoToRemove >= 0) {
      removedObject = todosWithoutProject.splice(indexOfTodoToRemove, 1)[0];
      renderManager.removeTab(null, indexOfTodoToRemove);
      console.log(
        `${removedObject.name} from todos without projects is removed`,
      );
      storageManager.removeProjectOrTodo(indexOfTodoToRemove);
    }
    renderManager.closeDeleteDialog();
  };

  const processChecklistToggle = function (checklistObject, todoObject) {
    checklistObject.toggleComplete();
    storageManager.setProjectOrTodo(todoObject);
  };

  // use parameter project = null if you want the todo to have no project
  const createAndAddTodo = function (
    project,
    title,
    description,
    dueDate,
    priority,
    ...checklistArray
  ) {
    const todo = createTodo(
      title,
      description,
      dueDate,
      priority,
      ...checklistArray,
    );
    if (project !== null) {
      if (!projects.includes(project)) {
        alert("You are trying to add a todo to a nonexisting project");
      }
      moveTodoToProject(project, todo);
      project.sortTodos();
      storageManager.setProjectOrTodo(project);
    } else {
      todosWithoutProject.push(todo);
      storageManager.setProjectOrTodo(todo);
    }

    return todo;
  };

  const createAndAddProject = function (name) {
    const createdProject = createProject(name);
    projects.push(createdProject);
    storageManager.setProjectOrTodo(createdProject);
    return createdProject;
  };

  const init = function () {
    const projectsAndTodos = storageManager.getProjectsAndTodosFromStorage();
    console.log(projectsAndTodos);
    if (
      projectsAndTodos.projects.length !== 0 ||
      projectsAndTodos.todos.length !== 0
    ) {
      projects = projectsAndTodos.projects;
      todosWithoutProject = projectsAndTodos.todos;
    } else {
      addExampleTodosandProjects();
      console.log("No data detected in localStorage. Added examples!");
    }
    renderManager.init();
    storageManager.setAllProjectsAndTodos();
  };

  const addExampleTodosandProjects = function () {
    projects = [];
    todosWithoutProject = [];
    createAndAddTodo(
      null,
      "Drive mom to airport",
      "This is a high priority task! Make sure to drop mom off at ABC airport Terminal 1.",
      "2024-07-10",
      3,
      "Check-in for flight",
      "Pick up mom at 8:00 AM",
    );
    createAndAddTodo(
      null,
      "Buy new camping gear",
      "This is a low priority task. Prepare extra supplies for Mount Awesome hiking trip with the boys.",
      "2024-11-27",
      1,
      "Buy new water bottle",
      "Buy more climbing rope",
      "Pack new stuff into camping bag",
    );
    const testProject = createAndAddProject("TOP Todo List Project");
    createAndAddTodo(
      testProject,
      "Stylize with CSS",
      "Use flexbox and grid to layout elements! Also mess with some pseudoclasses to make some interactive buttons! After having a good layout, everything else like color or font is for fun!",
      "2024-06-29",
      1,
      "Center elements",
      "Stylize buttons and pseudoclasses",
      "Stylize form inputs",
      "Add icons",
      "Choose color palette",
    );
    createAndAddTodo(
      testProject,
      "Add ability to edit existing todos",
      "Existing todos should be able to be deleted. Their names and checklist status should also be able to be edited. All of this information should be properly stored, not just rendered on the DOM directly.",
      "2024-06-23",
      3,
    );
    const testProject2 = createAndAddProject("Woodworking Project");
    createAndAddTodo(
      testProject2,
      "Brainstorm something to make",
      "Try to create a basic concept sketch of the next project to make. Concept sketch should have multiple perspectives and some close-up diagrams of any key mechanical parts.",
      "2024-07-04",
      3,
      "Research inspiration ideas",
      "Check my current supplies",
    );
  };

  return {
    getProjectsAndNakedTodos,
    createAndAddTodo,
    createAndAddProject,
    moveTodoToProject,
    removeTodoFromProject,
    addExampleTodosandProjects,
    toggleOpenCloseProjectTab,
    processNewTodoFormSubmit,
    comparePriority,
    moveProjectNodeUp,
    moveProjectNodeDown,
    processNewProject,
    processEditNameForm,
    processDeleteFormSubmit,
    init,
    processChecklistToggle,
  };
})();

pageManager.init();

export { pageManager };
