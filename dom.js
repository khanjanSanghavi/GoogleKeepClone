const title = document.getElementById('title');
const text = document.getElementById('note');
const addbtn = document.getElementById('addbtn');
const card = document.getElementById('card');
let arr = [];
let i;
function addNotes(){
    if(text.value === ""){
        alert("Add Note u stupid")
    }else{
        arr.push({
            title:title.value,
            note:text.value
        }) 
        console.log(arr[0]);
        ShowNotes();
        Empty();
    }
    
}

function Empty(){
    title.value = '';
    text.value = '';
}

function ShowNotes(){
    let notes = ''
    for(var i=0;i<arr.length;i++){
        notes += `
        <div class="card bg-dark">
                <h3 class="card-title">${arr[i].title}</h3>
                <p class="card-body">${arr[i].note}</p>
                <div class="card-footer">
                    <button class="btn btn-dark" id="${i}" onClick="Delnotes(this.id)">Delete</button>
                </div>
            </div>
        `
    }
    card.innerHTML = notes;
}

function Delnotes(index){
    notesObj = arr;
    notesObj.splice(index, 1);
    // e.parentElement.parentElement.remove();
    console.log("Deleting...");
    arr = notesObj;
    ShowNotes();
}

addbtn.addEventListener('click', addNotes);
// delbtn.addEventListener('click',Delnotes);
