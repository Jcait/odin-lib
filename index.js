const newBook = document.querySelector(".new-book")
const bookList = document.querySelector(".book-list")
let libCount = 0

let myLibrary = [{name: "test", author: "test", pages: "test", read: "test"}, 
{name: "test", author: "test", pages: "test", read: "test"}]

myLibrary.forEach ((book) => {
    console.log(book.name)
})

const update = () => myLibrary.forEach((book, i) => {
    console.log(i)
    const newDiv = document.createElement("div")
    const cardTitle = document.createElement("h1")
    const author = document.createElement("h2")
    cardTitle.innerText = book.name
    author.innerText = book.author
    newDiv.className = "card"
    book.index = myLibrary.length -1
    bookList.append(newDiv)
    newDiv.append(cardTitle)
    newDiv.append(author)
    libCount++
})

function Book(name, author, pages, read ){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

newBook.addEventListener("click", () => {
    const book = new Book("one", "two", "three", "four")
    myLibrary.push(book)
    update()
})