import './style.css'
import { pageVeiwController } from './pageManager.js'
import { projectModule } from "./projectModule.js";
import { todoModule } from './todoModule';

// link to <div id="content-wrapper"></div>
const contentWrapper = document.querySelector('#content-wrapper')

// init the app interface
pageVeiwController.displayAppInterface(contentWrapper);

// // Add functionality to New Project button
const newProjectButton = document.querySelector('button.new-project-button')
newProjectButton.addEventListener('click', () => {
    projectModule.addNewProject()
    projectModule.updateProjectListArea()
    todoModule.buildTodoList()
})
