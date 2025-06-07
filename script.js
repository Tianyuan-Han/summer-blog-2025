let name = "Wendy";
let age = 14;
let likesSushi = true;

function greeting(name) {
    console.log("Hello", name);
}

greeting("Wendy");

function saveName() {
    let newName = document.getElementById("greeter").value; // text field value from the user
    document.getElementById("username").textContent = newName;
    document.getElementById("greeter").value = "";
}

document.querySelectorAll(".accordion-header").forEach(function (button) {
    button.addEventListener("click", function(){
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block')? 'none' : 'block' ;
    });
});
