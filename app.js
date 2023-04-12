let form, input, addbtn, tasks, item, taskArr, message, par, num, modbg, mod
form = document.querySelector('.todo-form')
input = document.querySelector('#task')
addbtn = document.querySelector('#submit')
tasks = document.querySelector('.added-tasks')
message = document.querySelector('.message')
num = document.querySelector('#num')
modbg = document.querySelector('#pop-up-bg')
mod = document.querySelector("#pop-up")

class Task{
  constructor(name, status){
    this.name = name;
    this.status = 'pending';
  } 
  isCompleted(){
    if (this.status === 'completed') {
      return true
    }else{
      return false
    }
  }
}

function Message(msg,bg,color){
    message.innerHTML = msg;
    message.style.background = bg;
    message.style.color = color
    this.display = function(){
    message.style.maxHeight = '100px'
    setTimeout(function(){
      message.style.maxHeight = '0'
    },2000)
  }
}

form.addEventListener('submit',savetask)

function savetask(e){
  e.preventDefault()
  if (input.value.trim() === '' || input.value.trim() === undefined || input.value.trim() === null) {
    let x = new Message('Error...Task cannot be empty','red','white')
    x.display()
   return false
  }else{
    let task = new Task(input.value.trim(), 'pending')
    if (localStorage.getItem('tasks') === null) {
      var taskArr = []
      taskArr.push(task)
      localStorage.setItem('tasks',JSON.stringify(taskArr))
    } else {
      var taskArr = JSON.parse(localStorage.getItem('tasks'))
      taskArr.push(task)
      localStorage.setItem('tasks',JSON.stringify(taskArr))
    }
  }
  form.reset()
  loadData()
}

function popUp(head, body){
	modbg.style.display = 'block'
}
