const bookArray =[];

function Book(author, title, pages){
    // the constructor
    this.author = author
    this.title = title
    this.pages = pages
}


function addBookToLibrary(name, title, author, pages) {
    this.name = name
    this.title = title
    this.author = author
    this.pages = pages
    this.myArray = []

    this.addArray = function(){
        this.myArray.push({ name, title, author, pages });
        console.log(this.myArray);
    }

    this.printArray = function() {
        var result = "";
        for ( let key in this.myArray) {
            console.log(this.myArray[key]);
            result =+ this.myArray[key];
        }
        return result
    }
}

const store1 = new addBookToLibrary("joe", "Gasby", "Bob Sapp", 100);

document.getElementById("myBooks").innerHTML = 