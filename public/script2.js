let btn1 = document.querySelector('#postDirectorBtn');
let btn2 = document.querySelector('#postMovieBtn');

let btn3 = document.querySelector('#deleteDirectorBtn');
let btn4 = document.querySelector('#deleteMovieBtn');

let btn5 = document.querySelector('#getAllDirectors');
let btn6 = document.querySelector('#getAllMovies');


function postDirectorFunc(e){
	e.preventDefault();
	let url = "/post/director";
	let tempformData = new FormData(formPostDirector);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(tempformData));
	
	let options = {
		method:'POST',
		headers: {'Content-type': 'application/json'},
		body: stringifiedFormData
	}
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

function postMovieFunc(e){
	e.preventDefault();
	let url = "/post/movie";
	let tempformData = new FormData(formPostMovie);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(tempformData));
	
	let options = {
		method:'POST',
		headers: {'Content-type': 'application/json'},
		body: stringifiedFormData
	}
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

function deleteDirectorFunc(e){
	e.preventDefault();
	let url = "/delete/director";
	let tempformData = new FormData(formDeleteDirector);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(tempformData));
	
	let options = {
		method:'DELETE',
		headers: {'Content-type': 'application/json'},
		body: stringifiedFormData
	}
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

function deleteMovieFunc(e){
	e.preventDefault();
	let url = "/delete/movie";
	let tempformData = new FormData(formDeleteMovie);
	let stringifiedFormData=JSON.stringify(Object.fromEntries(tempformData));
	
	let options = {
		method:'DELETE',
		headers: {'Content-type': 'application/json'},
		body: stringifiedFormData
	}
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

function getAllMovies(e){
	e.preventDefault();
	url = "/get/movies";
	fetch(url)
	.then(data => data.json())
	.then(data => {
		para = document.querySelector('#fullListMovies');
		para.innerHTML = "";
		for (let i = 0; i < data.length; i++) {
				para.innerHTML += `<ul>
									<li>${data[i].title}</li>
								   </ul>` +
								   `Genre: ${data[i].genre} <br>
									Year: ${data[i].year} <br>
									Runtime: ${data[i].runtime} <br><br>`;
		}
	})
	.catch(err => console.log(err))
}

function getAllDirectors(e){
	e.preventDefault();
	url = "/get/directors";
	fetch(url)
	.then(data => data.json())
	.then(data => {
		para = document.querySelector('#fullListDirectors');
		para.innerHTML = "";
		for (let i = 0; i < data.length; i++) {
				para.innerHTML += `<ul>
									<li>${data[i].name}</li>
								   </ul>` +
								   `Languages: ${data[i].language} <br>
									Country: ${data[i].country} <br>
									Age: ${data[i].age} <br><br>`;
		}
	})
	.catch(err => console.log(err))
}

btn1.addEventListener('click',postDirectorFunc);
btn2.addEventListener('click',postMovieFunc);

btn3.addEventListener('click',deleteDirectorFunc);
btn4.addEventListener('click',deleteMovieFunc);

btn5.addEventListener('click',getAllDirectors);
btn6.addEventListener('click',getAllMovies);