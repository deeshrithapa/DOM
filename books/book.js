function addBook() {
    const bookTitle = document.getElementById('book-title').value;
    if (bookTitle.trim() !== '') {
        const newBook = document.createElement('li');
        newBook.textContent = bookTitle;
        newBook.onclick = toggleFavorite; // Attach toggleFavorite to the click event
        document.getElementById('book-list').appendChild(newBook);
        document.getElementById('book-title').value = '';
    } else {
        alert('Please enter a book title.');
    }
}

function searchBook() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const bookList = document.getElementById('book-list').getElementsByTagName('li');
    
    for (let i = 0; i < bookList.length; i++) {
        const bookTitle = bookList[i].textContent.toLowerCase();
        
        if (bookTitle.includes(searchTerm)) {
            bookList[i].classList.add('highlight');
        } else {
            bookList[i].classList.remove('highlight');
        }
    }
}

function clearSearchHighlights() {
    const bookList = document.getElementById('book-list').getElementsByTagName('li');
    
    for (let i = 0; i < bookList.length; i++) {
        bookList[i].classList.remove('highlight');
    }
}

function removeBook() {
    const bookList = document.getElementById('book-list');
    if (bookList.children.length > 0) {
        const confirmRemoval = confirm('Are you sure you want to remove the last book from the list?');
        if (confirmRemoval) {
            bookList.removeChild(bookList.lastElementChild);
        }
    } else {
        alert('No books to remove.');
    }
}

function toggleFavorite() {
    this.classList.toggle('favorite');
}