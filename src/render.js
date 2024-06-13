// module strictly for displaying elements
import { pageManager } from "./index.js";

const renderManager = function (){

    const init = function(){
        renderBaseBackground();
        renderHeader();
        renderSidebar();
        renderDefaultContent();
    }

    const createElement = function(tag, classAttribute, innerText){
        const createdElement = document.createElement(tag);
        if (classAttribute !== undefined) {
            const splitClassStringsArray = classAttribute.split(" ");
            for (let singleClass of splitClassStringsArray){
                createdElement.classList.add(singleClass);
            }
        };
        if (innerText !== undefined) {createdElement.innerText = innerText};
        return createdElement;
    }

    let baseBackground;
    const renderBaseBackground = function(){
        baseBackground = createElement("div", "content area");
        const body = document.querySelector("body");
        body.appendChild(baseBackground);
        return baseBackground;
    }

    let header;
    const renderHeader = function(){
        header = createElement("div", "header area");
        const headerChildElements = Object.values(createHeaderChildElements());
        for (let element of headerChildElements){
            header.appendChild(element);
        }
        baseBackground.appendChild(header);
        return header;
    }

    const createHeaderChildElements = function(){
        const logo = createElement("h1","header logo","To Do List");
        const addProjectButton = createElement("button", "project button", "+");
        return {logo, addProjectButton};
    }

    const renderSidebar = function(){

    }

    return {init};
}();



export {renderManager};