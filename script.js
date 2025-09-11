const openButton = document.getElementById('open-sidebar');
const navbar = document.getElementById('navbar');

function openSidebar() {
    navbar.classList.add('show');
}

function closeSidebar() {
    navbar.classList.remove('show');
}

const media = window.matchMedia("(width < 800px)");




const acc = document.querySelectorAll("p.accordion");

acc.forEach(item => {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.classList.toggle("show");
    });
});