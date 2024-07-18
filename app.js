const ImputTarea = document.getElementById("tarea")
const submit = document.getElementById("agregar")
const ListaTareas = document.getElementById("Lista-Tareas")

submit.addEventListener("click", Agregar)


function Agregar(){

    const Task = ImputTarea.value.trim()
    if (Task === '') return 

    const ListItem = document.createElement('li')
    ListItem.className ='Tareas'
    ListItem.textContent = ImputTarea.value
    
    const EndButton = document.createElement('button')
    EndButton.className = 'Endtask'
    EndButton.textContent = 'Completado'
    EndButton.addEventListener("click", ()=>{
        ListItem.classList.toggle('completed')
    }) 
    
    const DeleteButton = document.createElement('button')
    DeleteButton.className = 'Deletetask'
    DeleteButton.textContent = 'Eliminar'
    DeleteButton.addEventListener("click", ()=>{
        ListItem.remove()
    }) 

    const span = document.createElement('span')
    span.className = 'spam'
    span.appendChild(EndButton)
    span.appendChild(DeleteButton)


    ListaTareas.appendChild(ListItem);
    ListItem.appendChild(span)

    ImputTarea.value = ' '
}