// module for todo and checklist//

function createTodo (title,description,dueDate,priority,...checklistArray){
    let isComplete = false;

    const incrementPriority = function(){
        priority++;
    }

    const decrementPriority = function(){
        priority--;
    }

    return {
        title,
        description,
        dueDate,
        priority,
        isComplete,
        checklistArray,
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