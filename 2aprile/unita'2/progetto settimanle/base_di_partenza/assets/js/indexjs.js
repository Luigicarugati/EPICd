const newBanner = document.getElementById("newBanner");
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        newBanner.classList.add("banner-scroll");


    } else {
        newBanner.classList.remove("banner-scroll")
    }
})

const MAnim = () => {
    const m = document.querySelector("#movimM svg");
    const Msingo = document.querySelectorAll(
        "#movimM svg path");

    const MsingoOpacity0 =
        document.querySelectorAll("svg g[opacity='0']");

    let aCaso = Math.floor(Math.random() * MsingoOpacity0.length);
    MsingoOpacity0[aCaso].setAttribute("opacity", "1");
    setTimeout(() => {
        MsingoOpacity0[aCaso].setAttribute("opacity", "0");
    }, 4000);
};

setInterval(MAnim, 40);

window.addEventListener("DOMContentLoaded", (event) => {
    MAnim();
});