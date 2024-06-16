document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById('book-list');
    const searchBar = document.getElementById('search-bar');
    const newBookTitle = document.getElementById('new-book-title');
    const addBookBtn = document.getElementById('add-book-btn');

    const books = [
        { title: 'Harry Potter', favorite: false },
        { title: 'Divergent', favorite: false },
        { title: 'The Hunger Games', favorite: false }
    ];

    function displayBooks(filteredBooks = books) {
        bookList.innerHTML = '';
        filteredBooks.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <span class="${book.favorite ? 'favorite' : ''}">${book.title}</span>
                <div>
                    <button class="favorite-btn" data-index="${index}">${book.favorite ? 'Unfavorite' : 'Favorite'}</button>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            bookList.appendChild(bookItem);
        });

        document.querySelectorAll('.favorite-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                books[index].favorite = !books[index].favorite;
                displayBooks(filteredBooks);
            });
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                books.splice(index, 1);
                displayBooks(filteredBooks);
            });
        });
    }

    addBookBtn.addEventListener('click', function() {
        const title = newBookTitle.value.trim();
        if (title) {
            books.push({ title, favorite: false });
            newBookTitle.value = '';
            displayBooks();
        }
    });

    searchBar.addEventListener('keyup', function() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
        displayBooks(filteredBooks);
    });

    displayBooks();
});
