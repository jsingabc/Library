const myLibrary = ["Theif", "The Lion", "Harry Potter", "Lord of the Rings"];

function Book(author, title, pages){
    // the constructor
    this.author = author
    this.title = title
    this.pages = pages
}


function addBookToLibrary(myLibrary) {
    var result = "";
    for (var library in myLibrary){
        console.log(myLibrary[library]);
        result += myLibrary[library] + "<br>";
    }
    return result
}

document.getElementById("myBooks").innerHTML = addBookToLibrary(myLibrary);
