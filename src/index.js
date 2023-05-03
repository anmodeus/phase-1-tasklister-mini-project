document.addEventListener("DOMContentLoaded", () => {
  //let form = document.querySelector('form')
  addingEventListeners()
})

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  const task = e.target["new-task-description"].value
  
  displayTask(task)
}

function displayTask(task){
  const taskUl = document.getElementById("tasks")

  const taskLi = document.createElement("li")

  taskLi.textContent = task
  taskUl.appendChild(taskLi)
}