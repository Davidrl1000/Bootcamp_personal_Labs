var addButton = document.getElementById('submit');

addButton.addEventListener('click', function(){

	var container = document.getElementById('task-list');

	//Getting data from user
	var order = document.getElementById('user-input').value;

	if(order.length > 0){

		//Creating li element
		var element = document.createElement('li');
		//Creating span element
		var deleteButton = document.createElement('button');

		//Setting values to span
		deleteButton.setAttribute('class', 'deleteX');
		deleteButton.innerHTML= 'x';

		//Delete elements
		deleteButton.addEventListener('click', function(){
			//this.parentNode.parentNode.removeChild(this.parentNode);
			this.parentNode.remove();
		});

		//Setting values to element
		var elementContent = document.createTextNode(order);

		element.appendChild(elementContent);
		element.appendChild(deleteButton);

		//Adding data to content
		container.insertBefore(element, container.firstChild);

	}//end if
});
