var todo = document.querySelector('#todo');
var list = document.querySelector('#list');
var form = document.querySelector('#listForm');

function add() {
	if(!todo.value){
    	alert("Adicione uma tarefa!");
    	return false;
    }

	const createdDiv = document.createElement('div');
	const createdInput = document.createElement('input');
	const createdLabel = document.createElement('label');

	createdDiv.setAttribute('class', 'box');

	createdLabel.setAttribute('for', todo.value);
	createdLabel.setAttribute('class', 'boxLabel');
    createdLabel.textContent = todo.value;
	
	createdInput.setAttribute('id', todo.value);
	createdInput.setAttribute('type', 'checkbox');
	createdInput.setAttribute('name', todo.value);
	createdInput.setAttribute('class', 'checkInput');
	

	createdDiv.appendChild(createdInput);
	createdDiv.appendChild(createdLabel);
    
	list.appendChild(createdDiv);
	
	form.reset();
}