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


    const incrementPriority = function(){
        priority++;
    }

    const decrementPriority = function(){
        priority--;
    }

    const getChecklistArray = function () {
        return checklistArray;
    }

    const addChecklist = function (newChecklist) {
        checklistArray.push(newChecklist);
    }

    const removeChecklist = function (checklistToRemove) {
        checklistArray.pop(checklistToRemove);
    }


    return {
        name,
        description,
        dueDate,
        priority,
        isComplete,
        getChecklistArray,
        addChecklist,
        removeChecklist,
        ...completeToggleable(),
        incrementPriority,
        decrementPriority,
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
    return {
        toggleComplete: () => (this.isComplete = !this.isComplete),
    }
}

export {createTodo, createChecklist, completeToggleable};