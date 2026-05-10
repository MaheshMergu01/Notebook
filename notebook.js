const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchBox = document.getElementById("searchBox");
const darkBtn = document.getElementById("darkBtn");

displayNotes();

//Add note
addBtn.addEventListener("click", () => {

    const title = document.getElementById("noteTitle").value;
    const text = document.getElementById("noteText").value;

    if(title === || text === ""){
        alert("Please enter title and note");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.push({
        title:title,
        text:text
    });

    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteTitle", value = "");
    document.getElementById("noteText", value = "");

    displayNotes();
});

//Display notes
function displayNotes(){

    let notes = JSON.parse(localStorage.getItem("notes")) || "";

    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        
        notesContainer.innerHTML += `
        <div class="note">
            <h3>${note.title}</h3>
            <p>${note.text}</p>

            <button class="editBtn" onclick="editNote(${index})">
                edit
            </button>

            <button class="deleteBtn" onclick="deleteNote(${index})">
                Delete
            </button>
        </div>
        `;
    });
}

//Delete Note
function deleteNote(index){

    let notes = JSON.parse(localStorage.getItem("notes"));

    notes.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

//Edit Note
function editNote(index){

    let notes = JSON.parse(localStorage.getItem("notes"));

    document.getElementById("noteTitle").value = notes[index].title;
    document.getElementById("noteText").value = notes[index].text;

    deleteNote(index);
}

//Search Notes
searchBox.addEventListener("keyup", () => {
    let filter = searchBox.value.toLowerCase();

    let notes = document.querySelectorAll("note");

    notes.forEach(note => {

        let text = note.innerText.toLowerCase();

        if(text.include(filter)){
            note.style.display = "block";
        }
        else{
            note.style.display = "none";
        }
    });
});

//Dark Mode
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});