let form, input, addbtn, tasks, item, taskArr, message, par, num, modbg, mod
form = document.querySelector('.todo-form')
input = document.querySelector('#task')
addbtn = document.querySelector('#submit')
tasks = document.querySelector('.added-tasks')
message = document.querySelector('.message')
num = document.querySelector('#num')
modbg = document.querySelector('#pop-up-bg')
mod = document.querySelector("#pop-up")

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

function popUpMessage(content){
	modbg.style.display = 'block'
	mod.innerHTML = content
}

document.querySelector('#addbtn').addEventListener('click', () => {
	popUpMessage(`
	<h3>Add a task</h3>
	<form id="todo-form" autocomplete="off">
		<div class="todo-input">
	    	<input type="text" id="task" placeholder="Add a task..." autofocus>
	    	<button type="submit" id="submit">add</button>
	    </div>
	</form>
	`)
})