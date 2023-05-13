let button=document.getElementById('button');
button.addEventListener('click',showMsg);
function saveNotes()
{
    let note=document.querySelectorAll('.notes textarea')
    let data=[];
note.forEach((notes)=>
{
    data.push(notes.value);
})
localStorage.setItem('note',JSON.stringify(data));
}
function showMsg()
{
    createNotes();
}

function createNotes()
{
    let notes=document.createElement('div');

    notes.innerHTML=
    `
    <div class="notes">
    <div class="tool">
        <i class="save fa-solid fa-2x fa-floppy-disk" id="a"></i>
        <i class="trash fa-solid fa-2x fa-trash" id="t"></i>
    </div>
    <textarea class="textarea" name="" id="" cols="40" rows="10"></textarea>
 </div>

    `;
   notes.querySelector('.trash').addEventListener('click',function()
   {
    notes.remove();
   });
   notes.querySelector(".save").addEventListener('click',function()
   {
    saveNotes();
   });
    document.body.appendChild(notes);

}
let button2=document.getElementById('b2');
button2.addEventListener('click',showContent);
function showContent()
{
  let para=document.getElementById('p').innerHTML=localStorage.getItem('note');
  document.getElementById('p').style.width="300px";
  document.getElementById('p').style.height="300px";
  document.getElementById('p').style.border="2px solid"
  document.getElementById('p').style.backgroundColor="white";
  document.getElementById('p').style.borderRadius="20px";
  document.getElementById('p').style.padding="20px";
  

}

