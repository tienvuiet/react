class Book {
    private title: string
    private author: string
    private id: number
    constructor(title: string, author: string, id: number) {
        this.title = title
        this.author = author
        this.id = id
    }
    getprint(): string {
        return `id: ${this.id}, Title: ${this.title}, author: ${this.author}`
    }
    getId():number{
       return this.id
    }
    setId(title: string, author) {
        this.author = author
        this.title = title
    }
}
class Library {
    private book: Book[] = []
    addBook(book: Book) {
        this.book.push(book)
    }
    setId(id: number, title: string, author: string): string {
        let found = false
        this.book.forEach((b) => {
            if (b.getId()=== id){
                b.setId(title, author)
                found = true
            }
        })
        return found?`sua thanh cong`:`khong tim thay san pham nao phu hop id`
    }
    showBook() {
        this.book.forEach((book) => {
            console.log(` ${book.getprint()}`);

        })
    }
}
let book1 = new Book("Lap trinh co ban", "Vu Tin", 2)
let book2 = new Book("Tro choi con muc", "TIn", 4)
let book3 = new Book("Sieu nah", "nart", 1)
let book4 = new Book("hayate", "sdfa", 3)
let book5 = new Book("asfasf", "adsfasf", 5)
let library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)
library.showBook()
console.log(`----------`);

library.setId(2,"Chinh sua id", "chinh sua")
console.log(library.setId(2323,"asdf","asdf"));

library.showBook()

