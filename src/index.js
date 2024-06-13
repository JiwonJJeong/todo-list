//module to call the other create or render functions based on inputs

import {renderManager} from "./render.js";
import {createTodo, createChecklist} from "./todo.js";
import {createProject} from "./project.js";

const pageManager = function(){


}();

const testTodo = createTodo("Test Title","Test Description","Test Date",3);
renderManager.init();