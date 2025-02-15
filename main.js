var dropdown = document.querySelector(".main-dropdown")
var hidden_dropdowns = document.querySelector(".all-dropdowns")

// function show(){
//     hidden_dropdowns.style.display ="block";
// }
// function hide(){
//     hidden_dropdowns.style.display ="none";
// }

// dropdown.addEventListener("mouseenter",show);
// dropdown.addEventListener("mouseleave",hide);

function toggle() {
    hidden_dropdowns.style.display = (hidden_dropdowns.style.display== "none") ? "block" : "none";
}

dropdown.addEventListener("click", toggle);