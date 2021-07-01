let myLibrary = [];
let mySortedLibrary = [];


// Book object constructor
function Book(title = "", author = "", year = 0) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.id = generateUID();

}

function addBookToLibrary(book) {
	myLibrary.push(book);
}


// Loops through all the books in the library, creates a book container for them,
// and appends the new book container to the bookshelf
function displayBooks() {
	let bookContainer = document.querySelector("#bookContainer");
	removeAllChildNodes(bookContainer);
	for (let i = 0; i < myLibrary.length; i++) {
		let newBook = document.createElement("div");
		newBook.classList.add(("book"));
		newBook.id = generateUID();
		const title = document.createElement("h1");
		title.innerText = myLibrary[i].title;
		title.id = myLibrary[i].title;
		const author = document.createElement("h2");
		author.innerText = myLibrary[i].author;
		author.id = myLibrary[i].author;
		const year = document.createElement("h2");
		year.innerText = String(myLibrary[i].year);
		year.id = String(myLibrary[i].year);

		newBook.append(title);
		newBook.append(author);
		newBook.append(year);

		bookContainer.append(newBook);
	}
}


// Shows/hides the add new book popup
function toggleBookForm() {
	let toggleList = [];
	toggleList[0] = document.querySelector("#bookForm");
	toggleList[1] = document.querySelector("#grayedBackground");

	for (let i = 0; i < toggleList.length; i++) {
		let x = toggleList[i];
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
}

// Grabs user entered data from new book form and creates a new corresponding book in the library
function submitNewBookForm() {
	const bookForm = document.querySelector("div#bookForm");
	let title = bookForm.querySelector("#title").value;
	let author = bookForm.querySelector("#author").value;
	let year = bookForm.querySelector("#year").value;
	let newBook = new Book(title, author, year);
	addBookToLibrary(newBook);
	toggleBookForm();
	displayBooks();
	console.log(myLibrary);
}


// Creates unique book IDs
function generateUID() {
	// I generate the UID from two parts here
	// to ensure the random number provide enough bits.
	let firstPart = (Math.random() * 46656) | 0;
	let secondPart = (Math.random() * 46656) | 0;
	firstPart = ("000" + firstPart.toString(36)).slice(-3);
	secondPart = ("000" + secondPart.toString(36)).slice(-3);
	return firstPart + secondPart;
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function init() {
	displayBooks();
	toggleBookForm();

	let grayContainer = document.querySelector("#grayedBackground");
	grayContainer.onclick = function () {
		toggleBookForm();
	};

}

init();