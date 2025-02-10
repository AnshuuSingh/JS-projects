const button = document.querySelector('.btn');
const notesPage = document.querySelector('.notes-box')
const deleteImg = document.querySelector("#delete-icon")
let notes = document.querySelector('.note')

function showNotes(){
    notesPage.innerHTML = localStorage.getItem("notes")
}
showNotes();

function store(){
    localStorage.setItem("notes", notesPage.innerHTML)
}

let img;
function createNote(){
    const noteBox = document.createElement('p')
    img = document.createElement('img')
    noteBox.className = "note"
    noteBox.setAttribute("contenteditable", "true")
    img.src = "delete-icon.jpg";
    img.id = "delete-icon"
    notesPage.appendChild(noteBox).append(img);
}

button.addEventListener('click', ()=>{
    createNote()
})

notesPage.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        store();
    } else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.note');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                store()
            }
        });
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})