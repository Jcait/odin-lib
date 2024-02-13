
const newBook = document.querySelector(".new-book")
const bookList = document.querySelector(".book-list")

newBook.addEventListener("click", () => {
    const newDiv = document.createElement("div")
   bookList.append(newDiv)
   newDiv.innerText = "Hello"
   newDiv.className = "card"
})