const navLinks = document.querySelectorAll(".nav-links a");

console.log(navLinks);

navLinks.forEach(function(link) {
    link.style.backgroundColor = "white";
    link.style.color = "red";
});

// for(let i = 0; i < navLinks.length; i++) {
//     navLinks[i].style.backgroundColor = "white";
//     navLinks[i].style.color = "green";
// }