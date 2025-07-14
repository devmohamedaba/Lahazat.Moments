let btn = document.getElementById("top");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};


const actv = document.querySelectorAll(".act a");


actv.forEach(a => {

    a.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

            e.target.classList.add("active");
        });
    });
});

// const work = document.querySelectorAll(".our-work>div img");

// work.onclick = function () {
//     work.style.width = "100%";
// }

function toggleSize(img) {
    img.classList.toggle('enlarged');
};