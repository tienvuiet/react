class Book {
    private title : string 
    private author: string 
    constructor(title: string, author: string){
        this.title = title
        this.author = author
    }
    getprint():string {
        return `Title: ${this.title}, author: ${this.author}`
    }
}
class Library{
    private book: Book[]=[]
    addBook(book: Book){
        this.book.push(book)
    }
    showBook(){
        this.book.forEach((book,index)=>{
            console.log(`${index+1}. ${book.getprint()}`);
            
        })
    }
}
let book1 = new Book("Lap trinh co ban", "Vu Tin")
let book2 = new Book("Tro choi con muc", "TIn")
let book3 = new Book("Sieu nah", "nart")
let book4 = new Book("hayate", "sdfa")
let book5 = new Book("asfasf","adsfasf")
let library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)
library.showBook()

