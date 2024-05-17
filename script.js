function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
    
    var toggleButton = document.getElementById("toggleButton");
    if (toggleButton.innerText.trim() == "arrow_back_ios_new") {
        toggleButton.innerText = 'arrow_forward_ios';
    } else {
        toggleButton.innerText = 'arrow_back_ios_new';
    }
}
