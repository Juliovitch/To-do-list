const tasks = document.getElementsByClassName("tasks") [0];
const pencil = document.getElementById("pencil");
const userInput = document.getElementById("userInput");
const allTasks = document.getElementById("allTasks");

pencil.addEventListener('click', function(){
    allTasks.innerHTML = ""
})

userInput.addEventListener('keydown', function (event){
    if(event.key == "Enter")
    addItem();
})

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function() {
        h2.style.textDecoration = "line-through";
    })

    allTasks.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}