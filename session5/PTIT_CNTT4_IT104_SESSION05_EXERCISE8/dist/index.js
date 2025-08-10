class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getName() {
        return this.title;
    }
    getprint() {
        return `Title: ${this.title}, author: ${this.author}`;
    }
}
class Library {
    constructor() {
        this.book = [];
    }
    addBook(book) {
        this.book.push(book);
    }
    timSach(tilte) {
        this.book.forEach((b) => {
            if (b.getName() === tilte) {
                console.log(`${b.getprint()}`);
            }
        });
    }
    showBook() {
        this.book.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getprint()}`);
        });
    }
}
let book1 = new Book("Lap trinh co ban", "Vu Tin");
let book2 = new Book("Tro choi con muc", "TIn");
let book3 = new Book("Sieu nah", "nart");
let book4 = new Book("hayate", "sdfa");
let book41 = new Book("hayate", "sdasdfadfa");
let book5 = new Book("asfasf", "adsfasf");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book41);
library.addBook(book5);
library.showBook();
library.timSach("hayate");
