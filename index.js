const newBook = document.querySelector(".new-book")
const bookList = document.querySelector(".book-list")
const bookForm = document.querySelector(".add-book")
const btnSubmit = document.querySelector(".form-submit")
const delBtn = document.querySelector(".delete-button")
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
        const cardTitle = document.createElement("h2")
        const author = document.createElement("h3")
        const read = document.createElement("p")
        const pages = document.createElement("p")
        cardTitle.innerText = `Titie: ${book.name}`
        author.innerText = `Author: ${book.author}`
        if(book.read) {
            read.innerText = "Read"
        } else {
            read.innerText = "Not-Read"
        }
        pages.innerText = book.pages
        newDiv.className = "card"
        book.index = i
        bookList.append(newDiv)
        newDiv.append(cardTitle, author, read, pages)
        // newDiv.append(author)
        // newDiv.append(read)
        // newDiv.append(pages)
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
    if(bookForm.hidden) {
        bookForm.hidden = false
    } else {
        bookForm.hidden = true
    }
})

delBtn.addEventListener("click", function() {
    console.log(this.parentNode)
    this.parentNode.parentNode.removeChild(this.parentNode)
})

const addToLib = function(event){
    // no database so no default submit
    event.preventDefault()
    const name = document.querySelector(".name").value
    const author = document.querySelector(".author").value
    const pages = document.querySelector(".pages").value
    const selected = document.querySelector('input:checked').value;
    const addB = new Book(name, author, pages, selected)
    myLibrary.push(addB)
    console.log(name)
    update()
}

btnSubmit.addEventListener("click", addToLib, false)






update()