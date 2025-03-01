let icon = document.querySelector(".hamburger");
let ul = document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("ShowData");
    if (ul.className == "ShowData") {
        document.getElementById("bars").className = "fa-solid fa-xmark"
    }
    else
    document.getElementById("bars").className = "fa-solid fa-bars"
})