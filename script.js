function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}
