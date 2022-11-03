document.getElementById("divContact").insertAdjacentHTML("beforebegin","<h4 id=message>Meddelande</h4>")

let div = document.getElementById("divContact");
let input = document.createElement("textarea");
let button = document.createElement("button");
input.setAttribute("id", "messageText")
button.setAttribute("id", "send");
button.textContent = 'skicka';
input.maxLength = "5000";
input.cols = "100";
input.rows = "15";
div.appendChild(input);
div.appendChild(button);

button.addEventListener("click", sendFunction);

function sendFunction() {
    console.log(messageText.value);
} 

