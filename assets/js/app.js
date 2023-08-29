
const addbtn = document.querySelector('#addbtn')
const tasks = document.querySelector('.added-tasks')
const num = document.querySelector('#num')
const modbg = document.querySelector('#pop-up-bg')
const mod = document.querySelector("#pop-up")

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

const createpopUp = (body) => {
	modbg.style.display = 'block'
	mod.animate({
		transform: ['scale(0)', 'scale(1.25)', 'scale(1)']
	},
	{
		duration: 500,
	})
	mod.innerHTML = body
let checkInput = () => {
		alert()
		if (input.value.trim().length === 0) {
			submitBtn.disabled = true
		} else {
			submitBtn.disabled = false
		}
	}
	window.onclick = () => {
		if (event.target === modbg) {
			modbg.style.display = 'none'
		}
	}
}

addbtn.onclick = (e) => {
	createTodoForm()
}
	
const createTodoForm = () => {
	createpopUp(`
		<form id="todo-form" autocomplete="off" spellcheck="false" onsubmit='addTodo()'>
			<h3>Add a to-do</h3>
    		<div class="todo-input">
        		<input type="text" id="task" placeholder="Add a to-do..." autofocus>
        	</div>
        	
        	<!--<div class='todo-input'>
        		<small>Set date and 
        		<input type='date' id='todo-date'>
        	</div>-->
        	
        	<div class='todo-input'>
        		<button type="submit" id="submit" disabled>add</button>
        	</div>
      </form>
	`)
	
	const form = document.querySelector('.todo-form')
	const input = document.querySelector('#task')
	const submitBtn = document.querySelector('#submit')
	
	input.oninput = () => {
		if (input.value.trim().length === 0) {
			submitBtn.disabled = true
		} else {
			submitBtn.disabled = false
		}
	}
	
	let addTodo = () => {
		event.preventDefault()
		if (input.value.trim() === '' || input.value.trim() === undefined || input.value.trim() === null) {
			return false
		} else {
			let task = new Task(input.value.trim(), 'pending')
			if (localStorage.getItem('tasks') === null) {
				var taskArr = []
				taskArr.push(task)
				localStorage.setItem('tasks', JSON.stringify(taskArr))
			} else {
				var taskArr = JSON.parse(localStorage.getItem('tasks'))
				taskArr.push(task)
				localStorage.setItem('tasks', JSON.stringify(taskArr))
			}
		}
		form.reset()
	}
}