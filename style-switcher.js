const styleToggler = document.querySelector(".style-switzer-toggler");

styleToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})


window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.toggle("open")
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyles(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.setAttribute("disabled", "true");
        }
    })
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => ) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark")
}

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");

    } else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})