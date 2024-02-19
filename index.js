const newBook = document.querySelector(".new-book")
const bookList = document.querySelector(".book-list")
const bookForm = document.querySelector(".add-book")
const btnSubmit = document.querySelector(".form-submit")
const delBtn = document.querySelector(".delete-button")
const card = document.querySelectorAll(".card")


let myLibrary = []

const update = function() {

    myLibrary.forEach((book, i) => {
        if (!book.index) {
            book.index = i +1
        const newDiv =  document.createElement("div")
        newDiv.className = "card"

        const cardTitle = document.createElement("h2")
        cardTitle.innerText = `Titie: ${book.title}`
        
        const author = document.createElement("h3")
        author.innerText = `Author: ${book.author}`

        const read = document.createElement("p")
        
        const pages = document.createElement("p")
        if(book.read == "true") {
            read.innerText = "Read"
        } else {
            read.innerText = "Not-Read"
        }
        pages.innerText = book.pages
       pages.className = "pages"

       const readBtn = document.createElement("img")
       readBtn.className ="read-button"
       readBtn.src = "book-outline.svg"

        const delBtn = document.createElement("img")
        read.className = "is-read"

        delBtn.src = "trash-outline.svg"



       delBtn.className = "delete-button"
        bookList.append(newDiv)
        newDiv.append(cardTitle, author, pages,read, readBtn, delBtn)
        delBtn.addEventListener("click", function() {
            console.log(book.index)
            this.parentNode.parentNode.removeChild(this.parentNode)
            myLibrary.splice(i, 1)


        })
        readBtn.addEventListener("click", function() {
            let readText = this.previousElementSibling.innerText
            console.log(readText)
            if ( readText == "Read") {
                this.previousElementSibling.innerText = "Not-Read"
                console.log(readText)
            } else {
                this.previousElementSibling.innerText = "Read"
                console.log(readText)
            }
        } )
        } else {
            return
        }
    }   
)}

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

newBook.addEventListener("click", () => {
    if(bookForm.hidden) {
        bookForm.hidden = false
    } else {
        bookForm.hidden = true
    }
})




const addToLib = function(event){

            const name = document.querySelector(".name").value
            const author = document.querySelector(".author").value
            const pages = document.querySelector(".pages").value
            const selected = document.querySelector('input:checked').value;
            if(!name ||
                !author || 
                !pages ||
                !selected) {
                    return ""
            }
            event.preventDefault()
            const addB = new Book(name, author, pages, selected)
            myLibrary.push(addB)
            console.log(name)
            update()
    }
    // no database so no default submit



btnSubmit.addEventListener("click", addToLib, false)






update()