const newBook = document.querySelector(".new-book")
const bookList = document.querySelector(".book-list")
const bookForm = document.querySelector(".add-book")
const btnSubmit = document.querySelector(".form-submit")
const selected = document.querySelector('input:checked');
let libCount = 0

let myLibrary = [{name: "test", author: "test", pages: "test", read: "test"}, 
{name: "test", author: "test", pages: "test", read: "test"}]

myLibrary.forEach ((book) => {
    console.log(book.name)
})

const update = () => myLibrary.forEach((book, i) => {
    // checks if book is already inserted
    if(i == book.index) {
        return
    } else {
        const newDiv = document.createElement("div")
        const cardTitle = document.createElement("h1")
        const author = document.createElement("h2")
        cardTitle.innerText = book.name
        author.innerText = book.author
        newDiv.className = "card"
        book.index = i
        bookList.append(newDiv)
        newDiv.append(cardTitle)
        newDiv.append(author)
        console.log(`book index: ${book.index}`)
        libCount++
    }
    console.log(`index: ${i}`)
    console.log(`libCount: ${libCount}`)

})

function Book(name, author, pages, read ){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
}

newBook.addEventListener("click", () => {
    // const book = new Book("one", "two", "three", "four")
    // myLibrary.push(book)
    // update() 
    if(bookForm.hidden) {
        bookForm.hidden = false
    } else {
        bookForm.hidden = true
    }
})

const addToLib = function(event){
    event.preventDefault()
    const name = document.querySelector(".name").value
    console.log(name)
}

btnSubmit.addEventListener("click", addToLib, false)






update()