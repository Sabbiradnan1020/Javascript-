const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function updateStorage() {
  const notes = [];
  document.querySelectorAll(".note").forEach((noteDiv) => {
    const text = noteDiv.querySelector("textarea").value;
    notes.push(text);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  notesContainer.innerHTML = "";

  savedNotes.forEach((text) => {
    createNote(text);
  });
}

function createNote(text = "") {
  let noteDiv = document.createElement("div");
  let textArea = document.createElement("textarea");
  let img = document.createElement("img");

  noteDiv.className = "note";
  textArea.className = "input-box";
  textArea.setAttribute("placeholder", "Type your note...");
  textArea.value = text;

  img.src = "delete.jpeg";
  img.className = "trash-icon";

  img.addEventListener("click", () => {
    noteDiv.remove();
    updateStorage();
  });

  textArea.addEventListener("input", updateStorage);

  noteDiv.appendChild(textArea);
  noteDiv.appendChild(img);
  notesContainer.appendChild(noteDiv);
}

createBtn.addEventListener("click", () => {
  createNote();
  updateStorage();
});

loadNotes();
