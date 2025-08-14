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

// function toggleLanguage() {
//     const elems = document.querySelectorAll('[data-en]');
//     elems.forEach(el => {
//         const current = el.innerText;
//         el.innerText = el.getAttribute('data-ar');
//         el.setAttribute('data-ar', current);
//     });
//     const btnlang = document.querySelector(".lang");
//     btnlang.innerText = btnlang.innerText.includes('Arabic') ? 'Switch to English' : 'Switch to Arabic العربية';
// }


// function convert() {
//     const elme = document.querySelectorAll('[data-en]');
//     elme.forEach(el => {
//         const currentt = el.innerText;
//         el.innerText = el.getAttribute('data-ar');
//         el.setAttribute('data-ar', currentt);
//     })
// }

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (lang === 'ar') {
            el.innerText = el.getAttribute('data-ar');
        } else if (lang === 'en') {
            el.innerText = el.getAttribute('data-en');
        }
    });
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}
