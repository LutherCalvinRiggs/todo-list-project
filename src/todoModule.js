import { projectModule } from "./projectModule.js";

// API to manage todo Lists
const todoModule = (() => {

    function createTodoHeader() {
        var todoHeader = document.createElement('div')
        todoHeader.classList.add('todo-header-div')         // remove the 'div' from here and CSS
        
        // add <label for="title">Title
        var labelTitle = _createLabelTitle()
        // add <label for="description">Description
        var labelDescription = _createLabelDescription()
        // add <label for="dueDate">Due Date
        var labelDueDate = _createLabelDueDate()
        // add <label for="dueDate">Due Date
        var labelPriority = _createLabelPriority()

        // build todoHeader
        todoHeader.appendChild(labelTitle)
        todoHeader.appendChild(labelDescription)
        todoHeader.appendChild(labelDueDate)
        todoHeader.appendChild(labelPriority)
        
        return todoHeader
    }

        function _createLabelTitle() {
            var labelTitle = document.createElement('label')
            labelTitle.for = 'title'
            labelTitle.textContent = 'Title'

            return labelTitle 
        }

        function _createLabelDescription() {
            var labelDescription = document.createElement('label')
            labelDescription.for = 'description'
            labelDescription.textContent = 'Description'

            return labelDescription 
        }
        
        function _createLabelDueDate() {
            var labelDueDate = document.createElement('label')
            labelDueDate.for = 'dueDate'
            labelDueDate.textContent = 'Due Date'

            return labelDueDate 
        }
        
        function _createLabelPriority() {
            var labelPriority = document.createElement('label')
            labelPriority.for = 'priority'
            labelPriority.textContent = 'Priority'

            return labelPriority 
        }

    function createTodoForm(project) {
        var todoForm = document.createElement('form')
        todoForm.classList.add('todo-form')

        // create <input class="input-field" type="text" id="title" placeholder="Title" required>
        var inputTitle = _createInputTitle(project)
        // create <input class="input-field" type="text" id="title" placeholder="Title" required>
        var inputDescription = _createInputDescription(project)
        // create <input class="input-field" type="text" id="title" placeholder="Title" required>
        var inputDueDate = _createInputDueDate(project)
        // create <input class="input-field" type="text" id="title" placeholder="Title" required>
        var inputPriority = _createInputPriority(project)
        // create <button class="add-todo-button">+
        var addTodoButton = _createAddTodoButton(project)

        // build todo-form
        todoForm.appendChild(inputTitle)
        todoForm.appendChild(inputDescription)
        todoForm.appendChild(inputDueDate)
        todoForm.appendChild(inputPriority)
        todoForm.appendChild(addTodoButton)

        return todoForm
    }

        function _createInputTitle(project) {
            var inputTitle = document.createElement('input')
            inputTitle.classList.add('input-field')
            inputTitle.type = 'text'
            inputTitle.id = `${project.name}-title`
            inputTitle.name = 'title'
            inputTitle.placeholder = 'Title of Todo'
            inputTitle.required = true

            return inputTitle
        }
        
        function _createInputDescription(project) {
            var inputDescription = document.createElement('input')
            inputDescription.classList.add('input-field')
            inputDescription.type = 'text'
            inputDescription.id = `${project.name}-description`
            inputDescription.name = 'description'
            inputDescription.placeholder = 'Description of Todo'
            inputDescription.required = false

            return inputDescription
        }
    
        function _createInputDueDate(project) {
            var inputDueDate = document.createElement('input')
            inputDueDate.classList.add('input-field')
            inputDueDate.type = 'date'
            inputDueDate.id = `${project.name}-dueDate`
            inputDueDate.name = 'dueDate'
            inputDueDate.placeholder = 'mm-dd-yyyy'
            inputDueDate.required = true

            return inputDueDate
        }
    
        function _createInputPriority(project) {
            var inputPriority = document.createElement('select')
            inputPriority.classList.add('input-field')
            inputPriority.id = `${project.name}-priority`
            inputPriority.name = 'priority'
            // inputPriority.placeholder = 'Priority'
            inputPriority.required = true

            // create <option value='None'>None
            var optionNone = _createOptionNone()
            // create <option value='Low'>Low
            var optionLow = _createOptionLow()
            // create <option value='High'>High
            var optionHigh = _createOptionHigh()
            // create <option value='Top'>Top
            var optionTop = _createOptionTop()

            // built options list for the <select>
            inputPriority.appendChild(optionNone)
            inputPriority.appendChild(optionLow)
            inputPriority.appendChild(optionHigh)
            inputPriority.appendChild(optionTop)

            return inputPriority
        }

            function _createOptionNone() {
                var optionNone = document.createElement('option')
                optionNone.value = 'None'
                optionNone.textContent = 'None'

                return optionNone
            }
        
            function _createOptionLow() {
                var optionLow = document.createElement('option')
                optionLow.value = 'Low'
                optionLow.textContent = 'Low'

                return optionLow
            }
        
            function _createOptionHigh() {
                var optionHigh = document.createElement('option')
                optionHigh.value = 'High'
                optionHigh.textContent = 'High'

                return optionHigh
            }
        
            function _createOptionTop() {
            var optionTop = document.createElement('option')
            optionTop.value = 'Top'
            optionTop.textContent = 'Top'

            return optionTop
            }

        function _createAddTodoButton(project) {
            var addTodoButton = document.createElement('button')
            addTodoButton.type = 'button'
            addTodoButton.classList.add('add-todo-button')
            addTodoButton.id = project.name
            addTodoButton.textContent = '+'
            addTodoButton.addEventListener('click',() => {
                var todoItem = _createTodoItem(addTodoButton)
                project.todoList.unshift(todoItem)
                _updateTodoList()
            })

            return addTodoButton
        }

            function _createTodoItem(addTodoButton) {
                var todoItem = {}
                todoItem.title = _getTitleValue(addTodoButton)
                todoItem.description = _getDescriptionValue(addTodoButton)
                todoItem.dueDate = _getDueDateValue(addTodoButton)
                todoItem.priority = _getPriorityValue(addTodoButton)

                return todoItem
            }

                function _getTitleValue(addTodoButton) {
                    console.log(addTodoButton.id)
                    var inputTitle = document.querySelector(`input#${addTodoButton.id}-title`).value
                    return inputTitle
                }

                function _getDescriptionValue(addTodoButton) {
                    var inputDescription = document.querySelector(`input#${addTodoButton.id}-description`).value
                    return inputDescription
                }

                function _getDueDateValue(addTodoButton) {
                    var inputDueDate = document.querySelector(`input#${addTodoButton.id}-dueDate`).value
                    return inputDueDate
                }

                function _getPriorityValue(addTodoButton) {
                    var inputPriority = document.querySelector(`select#${addTodoButton.id}-priority`).value
                    return inputPriority
                }

            function _updateTodoList() {
                    _clearTodoList()
                    buildTodoList()
                }

                function _clearTodoList() {
                    var allTodoLists = document.querySelectorAll('.todo-list')
                    allTodoLists.forEach(todoList => {
                        while (todoList.firstChild) {
                            todoList.removeChild(todoList.firstChild)
                        }
                    })
                }

    function buildTodoList() {
        var projectHolderList = projectModule.getProjectList()
        var allTodoListDiv = document.querySelectorAll('div.todo-list')  

        for (let i = 0; i < projectHolderList.length; i++) {
            projectHolderList[i].todoList.forEach(todoItem => {
                var todoDiv = _createTodoDiv(todoItem, projectHolderList[i])

                allTodoListDiv[i].appendChild(todoDiv)
                projectModule.revealProjectList()
            })
        }
    }

        function _createTodoDiv(todoItem, project) {
            var todoDiv = document.createElement('div')
            todoDiv.classList.add('todo-item-div')

            // create <p class="todo-item todo-title">Test Title
            var todoTitle = _addTodoTitle(todoItem)
            todoDiv.appendChild(todoTitle)
            // create <p class="todo-item todo-description">Test Description
            var todoDescription = _addTodoDescription(todoItem)
            todoDiv.appendChild(todoDescription)
            // create <p class="todo-item todo-due-date">mm-dd-yyyy
            var todoDueDate = _addTodoDueDate(todoItem)
            todoDiv.appendChild(todoDueDate)
            // create <p class="todo-item todo-priority">Test Priority
            var todoPriority = _addTodoPriority(todoItem)
            todoDiv.appendChild(todoPriority)
            
            // create <button class="todo-item delete-todo-button">-
            var deleteTodoButton = _deleteTodoButton(todoItem, project)
            todoDiv.appendChild(deleteTodoButton)

            return todoDiv
        }

            function _addTodoTitle(todoItem) {
                var todoTitle = document.createElement('p')
                todoTitle.classList.add('todo-item')
                todoTitle.classList.add('todo-title')
                todoTitle.textContent = todoItem.title

                return todoTitle
            }
            
            function _addTodoDescription(todoItem) {
                var todoDescription = document.createElement('p')
                todoDescription.classList.add('todo-item')
                todoDescription.classList.add('todo-description')
                todoDescription.textContent = todoItem.description

                return todoDescription
            }
            
            function _addTodoDueDate(todoItem) {
                var todoDueDate = document.createElement('p')
                todoDueDate.classList.add('todo-item')
                todoDueDate.classList.add('todo-due-date')
                todoDueDate.textContent = todoItem.dueDate

                return todoDueDate
            }
            
            function _addTodoPriority(todoItem) {
                var todoPriority = document.createElement('p')
                todoPriority.classList.add('todo-item')
                todoPriority.classList.add('todo-priority')
                todoPriority.textContent = todoItem.priority

                return todoPriority
            }
            
            function _deleteTodoButton(todoItem, project) {
                var deleteTodoButton = document.createElement('button')
                deleteTodoButton.classList.add('todo-item')
                deleteTodoButton.classList.add('delete-todo-button')
                deleteTodoButton.textContent = '-'
                deleteTodoButton.addEventListener('click', () => {
                    var indexNum = project.todoList.indexOf(todoItem)
                    if (confirm("Confirm delete:")) {
                        project.todoList.splice(indexNum, 1)
                    } 

                    _updateTodoList(project)
                })

                return deleteTodoButton
            }
        

    function createTodoList(project) {
        var todoListDiv = document.createElement('div')
        todoListDiv.classList.add('todo-list')
        todoListDiv.id = project.name

        return todoListDiv
    }

    return {
        createTodoHeader,
        createTodoForm,
        buildTodoList,
        createTodoList
    }
    
})();




export { todoModule }
