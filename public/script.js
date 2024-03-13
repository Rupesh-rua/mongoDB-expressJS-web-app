let para = document.querySelector('p')

let btn1 = document.querySelector('#checkPostDirector');
let btn2 = document.querySelector('#checkPostMovie');


function checkPostDirectorFunc(e){
	e.preventDefault();
	let url = "/api/director";
	//let tempformData = new FormData(formPostDirector);
	//let stringifiedFormData=JSON.stringify(Object.fromEntries(tempformData));
	let newDirector = { name: "abc",
						country: "def",
						language: "ghi",
						age: 45
					  };
	
	let stringifiedData = JSON.stringify(newDirector);
	
	let options = {method:'POST',
				   headers: {'Content-type': 'application/json'},
				   body: stringifiedData
				  }
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

function checkPostMovieFunc(e){
	e.preventDefault();
	let url = "/api/movie";
	let newMovie = { title: "movie1",
						genre: "g1, g2",
						year: 2005,
						runtime: "1hr 20m"
					  };
	
	let stringifiedData = JSON.stringify(newMovie);
	
	let options = {method:'POST',
				   headers: {'Content-type': 'application/json'},
				   body: stringifiedData
				  }
	
	fetch(url, options)
	.then(data => data.text())
	.then(data => console.log("success"))
	.catch(data => console.log("There was an error"));
}

btn1.addEventListener('click',checkPostDirectorFunc);
btn2.addEventListener('click',checkPostMovieFunc);