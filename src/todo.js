// module for todo and checklist//

function createTodo (name,description,dueDate,priority,...checklistDescriptions){
    let isComplete = false;

    // IIFE to initialize checklist array when todo is created
    let checklistArray = [];
    const initChecklist = function(){
        for (let description of checklistDescriptions){
            checklistArray.push(createChecklist(description));
        }
    }();

    const methods = todoMethodDelegate();


    return {
        name,
        description,
        dueDate,
        priority,
        isComplete,
        checklistArray,
        ...methods,
    }
}

const todoMethodDelegate = function(){

    const getChecklistArray = function () {
        return this.checklistArray;
    }

    const addChecklist = function (newChecklist) {
        this.checklistArray.push(newChecklist);
    }

    const removeChecklist = function (checklistToRemove) {
        this.checklistArray.pop(checklistToRemove);
    }

    return {
        getChecklistArray,
        addChecklist,
        removeChecklist,
        ...completeToggleable(),
    }
}

const attachTodoMethods = function(partial){
    const methods = todoMethodDelegate();
    
    return {
        ...methods,
        ...partial,
    }
}

function createChecklist(description) {
    let isComplete = false;

    return {
        isComplete,
        ...completeToggleable(),
        description,
    }
}

function completeToggleable() {

    const toggleComplete = function(){
        this.isComplete = !this.isComplete;
        console.log("Toggled complete status to " + this.isComplete);
        console.log(this);
    }

    return {
        toggleComplete,
    }
}

const attachChecklistMethods = function(partial){

    return {
        ...completeToggleable(),
        ...partial,
    }
}

export {createTodo, createChecklist, completeToggleable, attachTodoMethods, attachChecklistMethods};