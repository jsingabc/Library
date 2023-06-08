const bookArray = [
    
];

const newBookArray = [];

var myTable = document.getElementById('myData')
myTable.oldHTML=myTable.innerHTML;

var btnDelete = document.createElement('button');
var textBtn = document.createTextNode("Delete Book");
btnDelete.appendChild(textBtn);
document.getElementById('deleteBtn').appendChild(btnDelete);
//document.body.appendChild(btnDelete)


function Book(title, author, pages, status){
    // the constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}


let makeTable = (arr) => {
    let table = document.createElement('tbody');
    for (let entry of arr) {
        let row = document.createElement('tr');
        Object.values(entry).forEach(value => {
            let data = document.createElement('td');
            data.appendChild(document.createTextNode(value));
            row.appendChild(data);
        });
        table.appendChild(row);
    }
    myTable.innerHTML=myTable.oldHTML;
    document.getElementById('myData').appendChild(table);
    //document.body.appendChild(table);
    return table;
}
document.getElementById('myData').innerText = Object.values(makeTable(bookArray))


function addBookToLibrary(title, author, pages, status) {
    bookArray.push({ title, author, pages, status });
    return bookArray + makeTable(bookArray)
    }

function printArray() {
    var result = "";
    for ( let key in bookArray) {
        return bookArray[key]
        result =+ bookArray[key];
        }
    return result
    }

function toHTML() {
    document.getElementById("myBooks").innerHTML = JSON.stringify(bookArray);
    return JSON.stringify(bookArray)
    }    

btnDelete.addEventListener('click', function(){
    var getBook = prompt("What book do you want to remove?");
    for (let i = 0; i < bookArray.length; i++)
      if (bookArray[i].title === getBook ) {
        bookArray.splice(i, 1);
      }
      makeTable(bookArray)
});



let store1 = new Book("Cat and hat", "Bob", 150);
//let store2 = new Book("Fango", "Mark", 180);
//let store3 = new Book("Harry Potter", "Lisa", 223);

// bookArray.push(store1,store2,store3)
