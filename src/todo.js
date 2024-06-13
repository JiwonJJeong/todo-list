// module for todo and checklist//

function createTodo (title,description,dueDate,priority,...checklistArray){
    let isComplete = false;

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
        todoArray.push(newChecklist);
    }

    const removeChecklist = function (checklistToRemove) {
        todoArray.pop(checklistToRemove);
    }


    return {
        title,
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
    }
}

function completeToggleable() {
    return {
        toggleComplete: () => (this.isComplete = !this.isComplete),
    }
}

export {createTodo, createChecklist, completeToggleable};