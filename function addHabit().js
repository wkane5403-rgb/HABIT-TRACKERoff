function addHabit(){

let habit = document.getElementById("habitInput").value;

let li = document.createElement("li");

li.innerHTML = habit + " <button onclick='done(this)'>Done</button>";

document.getElementById("habitList").appendChild(li);

document.getElementById("habitInput").value = "";

}

function done(button){
button.parentElement.style.textDecoration = "line-through";
}