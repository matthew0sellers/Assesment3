
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("This form has been submitted successfully")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


document.getElementById("cat").addEventListener("mouseover", onMouseOver);

	
function onMouseOver() {
	alert("you smell good")
    }