import { todoModule } from "./todoModule";

// API to manage projects
const projectModule = (() => {
    var projectListHolder = []
    
    function addNewProject() {
        var newProject = {}
        newProject.name = prompt("What is the project name?")
        newProject.todoList = []
        projectListHolder.unshift(newProject)
    }

    function updateProjectListArea() {
        var projectListArea = document.querySelector('#project-list-area')
        
        _clearProjectListArea(projectListArea)
        _displayProjectListArea(projectListArea)
    }

        function _clearProjectListArea(projectListArea) {
            while (projectListArea.firstChild) {
                projectListArea.removeChild(projectListArea.firstChild)
            }
        }

        function _displayProjectListArea(projectListArea) {            
            var currentProjects = getProjectList()
            currentProjects.forEach((project) => {
                // create project-block
                var projectBlock = _createProjectBlock(project)
                // add new project-block to project-list-area
                projectListArea.appendChild(projectBlock)
            })
        }

    function getProjectList() {
        return projectListHolder
    }
            
            function _createProjectBlock(project) {
                var projectBlock = document.createElement('div')
                projectBlock.id = project.name
                projectBlock.classList.add('project-block')
                // create project block element
                var projectHeader = _createProjectHeader(project)
                var todoHeader = todoModule.createTodoHeader()
                var todoForm = todoModule.createTodoForm(project)
                var todoList = todoModule.createTodoList(project)
                // create project-block
                projectBlock.appendChild(projectHeader)
                projectBlock.appendChild(todoHeader)
                projectBlock.appendChild(todoForm)
                projectBlock.appendChild(todoList)
        
                return projectBlock
            }             
        
                function _createProjectHeader(project) {
                    var projectHeader = document.createElement('div')
                    projectHeader.classList.add('project-header')
                    // create <h2 class="project-title">Title
                    var projectTitle = _createProjectTitle(project)
                    // create <button class="delete-project-button">Delete Project
                    var deleteProjectButton = _createDeleteProjectButton(project)
                    
                    // build project-header
                    projectHeader.appendChild(projectTitle)
                    projectHeader.appendChild(deleteProjectButton)
                    
                    return projectHeader
                }
        
                    function _createProjectTitle(project) {
                        var projectTitle = document.createElement('h2')
                        projectTitle.classList.add('project-title')
                        projectTitle.textContent = project.name
        
                        return projectTitle
                    }
        
                    function _createDeleteProjectButton(project) {
                        var deleteProjectButton = document.createElement('button')
                        deleteProjectButton.classList.add('delete-project-button')
                        deleteProjectButton.textContent = 'Delete Project'
                        deleteProjectButton.addEventListener('click', () => {
                            _deleteProject(project)
                            updateProjectListArea()
                        })
        
                        return deleteProjectButton
                    }

                        function _deleteProject(project) {
                            var indexNum = projectListHolder.indexOf(project)
                            if (confirm("Confirm delete:")) {
                                projectListHolder.splice(indexNum, 1)
                            } 
                        }

    function revealProjectList() {
        console.table(projectListHolder)
    }

    return {
        addNewProject,
        updateProjectListArea,
        getProjectList,
        revealProjectList
    }

})();




export { projectModule }