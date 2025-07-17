class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}


	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${favoriteBooks.length}`);
		for (let bookName of favoriteBooks) {
			console.log(bookName);
		}
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
}





function loadBooks( /* .. */ ) {
	// TODO: call fakeAjax( .. );
	return fakeAjax(BOOK_API)
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
