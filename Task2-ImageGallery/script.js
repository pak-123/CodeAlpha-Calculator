const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filters button");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const counter = document.querySelector(".image-counter");

const images = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;

/* =========================
   FILTERS
========================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


/* =========================
   LIGHTBOX OPEN
========================= */

galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        lightbox.style.display = "flex";

        showImage();

    });

});


/* =========================
   SHOW IMAGE
========================= */

function showImage() {

    lightboxImg.src = images[currentIndex].src;

    counter.textContent =
        `${currentIndex + 1} / ${images.length}`;

}


/* =========================
   NEXT IMAGE
========================= */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});


/* =========================
   PREVIOUS IMAGE
========================= */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});


/* =========================
   CLOSE LIGHTBOX
========================= */

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


/* =========================
   CLOSE ON BACKGROUND CLICK
========================= */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            nextBtn.click();
        }

        if (e.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});