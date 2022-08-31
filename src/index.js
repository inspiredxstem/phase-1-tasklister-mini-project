document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // In my opinion, the code works but looks sloppy
  document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    const som = document.getElementById("new-task-description");
    if(som.value !== ""){
      addToDOM(som.value)
    }
    document.querySelector('form').reset();
  })
});

function addToDOM(something){

  // Creates a list item and adds its text content
  let visibleText = document.createElement('li');
  visibleText.textContent = something + ' ';
  
  // Creates a button next to each task to delete
  // Side note for me: Remember button will not work without an addEventListener :)
  let btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click', deleteFromDOM);

  visibleText.appendChild(btn);
  console.log(visibleText);

  
  document.querySelector("#tasks").appendChild(visibleText);
}

function deleteFromDOM(e){
  // As the name states, it will delete from the ul parentNode
  e.target.parentNode.remove();
}