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
        ...completeTogglable(),
        incrementPriority,
        decrementPriority,
    }
}

function createChecklist(description) {
    isComplete = false;

    return {
        isComplete,
        ...completeTogglable(),
    }
}

function completeTogglable() {
    return {
        toggleComplete: () => (this.isComplete = !this.isComplete),
    }
}

export {createTodo, createChecklist};