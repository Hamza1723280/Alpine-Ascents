let close_btn = document.querySelector("#close");
let side = document.querySelector(".sidebar");
let menu = document.getElementById("hamburger");

side.style.transition ="0.5s"

menu.addEventListener("click", function () {

    side.style.width="70%";

})

close_btn.addEventListener("click", function () {
    side.style.width = "0%";
});