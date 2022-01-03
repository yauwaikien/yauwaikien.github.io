let myImage = document.querySelector('img')

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/blobkiss.png'){
		myImage.setAttribute('src', 'images/squirtleknife1.png');
	} else {
		myImage.setAttribute('src', 'images/blobkiss.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Blob Kiss ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
	} else {
		let storedName = localStorage.getItem('name');
		myHeading.textContent = 'Blob Kiss ' + storedName;
}


myButton.onclick = function() {
	setUserName();
}