const tasklist = document.querySelector('#tasklist')

const setStorage = () => {
	localStorage.setItem('tasks', JSON.stringify([]))
}

const getStorage = () => {
	return JSON.parse(localStorage.getItem('tasks'))
}

const getTasks = () => {
	if (!getStorage() || getStorage().length === 0) {
		tasklist.innerHTML = `<div id='no-todo' class='fa-solid fa-check-circle'><br>No To-Dos! You are all set. Click on the <strong>&plus;</strong> button below to add a new To-Do</div>`
	} else {
		tasklist.innerHTML = ''
		getStorage().forEach((val, ind) => {
			if (val.status === 'completed') {
				tasklist.innerHTML += `
					<li title='Left Click: Edit To-Do\n\nRight click: View To-Do info'>
						<input type='checkbox' checked title='Mark as done/undone'>
						<p>${val.name}</p>
					</li>
				`
			}else{
				tasklist.innerHTML += `
					<li title='Left Click: Edit To-Do\n\nRight click: View To-Do info'>
						<input type='checkbox' title='Mark as done/undone'>
						<p>${val.name}</p>
					</li>
				`
			}
		})

		tasklist.querySelectorAll('li').forEach((val, ind) => {
			val.onclick = (e) => {
				if (e.target === tasklist.querySelectorAll('input')[ind]) {
						//doNothing
				} else {
					createTodoForm()
					mod.querySelector('form input').value = `${val.querySelector('p').innerHTML}`
					mod.querySelector('form').id = 'edit-todo-form'
					mod.querySelector('h3').innerHTML = 'edit a to-do'
					mod.querySelector('button').innerHTML = 'save'
					mod.querySelector('#edit-todo-form').onsubmit = () => {
					event.preventDefault()
					let taskArr = getStorage()
					taskArr[ind].name = mod.querySelector('form input').value.trim()
					localStorage.setItem('tasks', JSON.stringify(taskArr))
					getTasks()
					mod.querySelector('form').reset()
					modbg.style.display = 'none'
					}
				}
			}
		})
		
		tasklist.querySelectorAll('li input').forEach((val, ind) => {
			val.onclick = () => {
				let taskArr = getStorage()
				switch (val.checked) {
					case true:
						taskArr[ind].status = 'Completed'
						break;
					case false:
						taskArr[ind].status = 'Pending'
						break;
				}
				localStorage.setItem('tasks', JSON.stringify(taskArr))
			}
			
			tasklist.querySelectorAll('li')[ind].oncontextmenu = () => {
				event.preventDefault()
				createpopUp(`
					<h3>delete To-do</h3>
					<table width='100%'>
						<tr>
							<th>Task Name</th>
							<td>${getStorage()[ind].name}</td>
						</tr>
						
						<tr>
							<th>Status</th>
							<td>${getStorage()[ind].status}</td>
						</tr>
						
						<tr>
							<td colspan='2'><button class='fas fa-trash' id='delbtn' title='Delete To-Do'></button></td>
						</tr>
					</table>
				`)
				
				document.querySelector('#delbtn').onclick = () => {
					let taskArr = getStorage()
					taskArr.splice(ind, 1)
					localStorage.setItem('tasks', JSON.stringify(taskArr))
					getTasks()
					modbg.style.display = 'none'
				}
			}
		})
	}
}

 
const updateStorage = (x) => {
	if (!getStorage()) {
		setStorage()
		let taskArr = []
		taskArr.push(x)
		localStorage.setItem('tasks', JSON.stringify(taskArr))
	}else{
		let taskArr = getStorage()
		taskArr.push(x)
		localStorage.setItem('tasks', JSON.stringify(taskArr))
	}
	getTasks()
}

getTasks()

//notify