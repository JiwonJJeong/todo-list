// module strictly for displaying elements
const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderNewButtons();
    }

    const createElement = function(tag, classAttribute, innerText){
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined) {createdElement.classList.add(classAttribute)};
        if (innerText !== undefined) {createdElement.innerText = innerText};
        return createdElement;
    }

    const renderBaseBackground = function(){
        const baseBackground = createElement("div", "content area");
        document.appendChild(baseBackground);
        return baseBackground;
    }

    const renderHeader = function(){
        const header = createElement("div", "header area");
        const headerChildElements = createHeaderChildElements();
        for (let element of headerChildElements){
            header.appendchild(element);
        }
        baseBackground.appendChild(header);
        return header;
    }

    const createHeaderChildElements = function(){
        const logo = createElement("h1","header logo","To Do List");
        const addProjectButton = createElements("button", "project button", "+");
        return {logo, addProjectButton};
    }
}();



export {renderManager};