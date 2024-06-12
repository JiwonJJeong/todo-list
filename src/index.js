import {renderManager} from "./render.js";
import {createTodo, createChecklist} from "./todo.js";

const pageManager = function(){


}();

const testTodo = createTodo("Test Title","Test Description","Test Date",3);
renderManager.logTitle(testTodo);