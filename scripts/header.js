//header color
let coverPage = document.getElementById("cover-page");
let headerBackground = document.getElementById("header");

window.addEventListener("scroll", function(event){
    let scroll_y = this.scrollY;
    if (scroll_y > coverPage.offsetHeight) { 
        headerBackground.style.backgroundColor = "rgb(44, 44, 44)";
    }
    else {
        headerBackground.style.backgroundColor = "rgba(92, 92, 92, 0.7)";
    }
});

function resetMenu(headerCategories, checkCheckbox) {
    headerCategories.classList.remove('show-menu');
    checkCheckbox.checked = false;
}

document.addEventListener('DOMContentLoaded', function () {
    // Toggle menu in mobile view
    const checkCheckbox = document.getElementById('check');
    const headerCategories = document.querySelector('.header-categories');

    checkCheckbox.addEventListener('change', function () {
        headerCategories.classList.toggle('show-menu', checkCheckbox.checked);
    });

    // Smooth scroll to a section when clicking an anchor link
    document.querySelectorAll('.header-categories a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Close the menu after clicking a link on small screens
                if (window.innerWidth <= 800) {
                    resetMenu(headerCategories, checkCheckbox);
                }
            }
        });
    });
});

window.addEventListener('resize', function() {
    const checkCheckbox = document.getElementById('check');
    const headerCategories = document.querySelector('.header-categories');

    if (this.window.innerWidth > 800) {
        resetMenu(headerCategories, checkCheckbox);
    }
});