const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const notes = document.querySelector(".notes");


btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;
    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const noteNumber = i.toString();
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const note = document.createElement("div");
    note.setAttribute("id", noteNumber);
    notes.appendChild(note);
    document.getElementById(noteNumber).innerText += key + ": " + value;
    const cancel = document.createElement('button');
    cancel.textContent = "DELETE";
    notes.appendChild(cancel);
    cancel.addEventListener('click', function () {
        notes.removeChild(note);
        notes.removeChild(cancel);
        localStorage.removeItem(key);
    });
}