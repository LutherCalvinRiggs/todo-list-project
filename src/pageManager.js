const pageVeiwController = (() => {
    
    const _createPageHeader = (() => {
        var pageHeaderWrapper = document.createElement('div')
        pageHeaderWrapper.id = "page-header-wrapper"
        
        const _createHeader = (() => {
            // create <h1 id="page-header">Project list</h1>
            var pageHeader = document.createElement('h1')
            pageHeader.id = 'page-header'
            pageHeader.textContent = 'Project list'

            return pageHeader
        })();
        
        const _createNewProjectButton = (() => {
            // create <button id="new-project-button" type="button">New Project</button>
            var newProjectButton = document.createElement('button')
            newProjectButton.type = 'button'
            newProjectButton.classList.add('new-project-button')
            newProjectButton.textContent = 'New Project'

            return newProjectButton
        })();

        // build page header
        pageHeaderWrapper.appendChild(_createHeader)
        pageHeaderWrapper.appendChild(_createNewProjectButton)

        return pageHeaderWrapper
    })();

    const _createProjectList = (() => {
        var projectList = document.createElement('div')
        projectList.id = 'project-list-area'
        
        return projectList
    })();

    // displays pageHeader, newProjectButton and projectList
    function displayAppInterface(contentWrapper) {
        contentWrapper.appendChild(_createPageHeader)
        contentWrapper.appendChild(_createProjectList)
    }
    
    return { 
        displayAppInterface
    }
})();

export { pageVeiwController }