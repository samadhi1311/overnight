var mouseCursor = document.querySelector(".cursor");
var navLinks = document.querySelectorAll(".navLinks");
window.addEventListener("mousemove", cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
navLinks.forEach((link)=>{
    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove("link-hover");
    });
    link.addEventListener("click", ()=>{
        mouseCursor.classList.remove("link-hover");
    });
    link.addEventListener("mouseover", ()=>{
        mouseCursor.classList.add("link-hover");
    });
    link.addEventListener("mouseleave", ()=>{
        link.classList.remove("link-hovered");
    });
    link.addEventListener("click", ()=>{
        link.classList.remove("link-hovered");
    });
    link.addEventListener("mouseover", ()=>{
        link.classList.add("link-hovered");
    });
});

//# sourceMappingURL=index.5c7fab73.js.map
