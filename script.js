const dataInput = document.getElementById("data_input");
const dataSave = document.querySelector(".data_save");
const section = document.querySelector("#todo_section");


dataSave.addEventListener("click", () => {
  if (dataInput.value) {
    createTodo();
    dataSave.classList.add("change_color");

    setTimeout(function () {
      dataSave.classList.remove("change_color");
    }, 200);
  }
});


dataInput.addEventListener('keydown' , (k) => {
    if(k.key === 'Enter' && dataInput.value){
        createTodo();
    }
})

function createTodo() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("items");

  // let checkBox = document.createElement("div");
  // checkBox.classList.add("items_checkbox");

  // let newPara = document.createElement("p");
  // newPara.textContent = dataInput.value;
  // newPara.classList.add("items_para");

  // let newButton = document.createElement("button");
  // newButton.classList.add("items_delete");



  // newDiv.appendChild(checkBox);
  // newDiv.appendChild(newPara);
  // newDiv.appendChild(newButton);

  newDiv.innerHTML = `<div class="items_checkbox"></div>
  <p class="items_para">${dataInput.value}</p> 
  <button class="items_delete"></button>`;

  section.appendChild(newDiv);
  dataInput.value = null;
}


section.addEventListener('click' , (event)=>{
    if(event.target.classList.contains('items_delete')){
        const divToDel = event.target.closest('.items');
        if(divToDel){
            divToDel.remove();
        }
    }

    if(event.target.classList.contains('items_checkbox')){
        const divToStyle = event.target.closest('.items');
        if(divToStyle){
            const comletedTodo = divToStyle.querySelector('p');
            comletedTodo.style.textDecoration = "black line-through 2px";
            // comletedTodo.style.textDecorationColor = "black"; 
            event.target.style.backgroundColor = "black";
        }
    }
})





