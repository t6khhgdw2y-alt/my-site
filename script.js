/* ========================= */
/* ПОЯВЛЕНИЕ БЛОКОВ */
/* ========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* ========================= */
/* ТАЙМЕР */
/* ========================= */

const weddingDate =
    new Date("October 12, 2026 18:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);



/* ========================= */
/* МУЗЫКА */
/* ========================= */

const musicButton =
    document.getElementById("musicButton");

const music =
    document.getElementById("backgroundMusic");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicButton.textContent = "♫";

        musicPlaying = false;

    } else {

        music.play();

        musicButton.textContent = "❚❚";

        musicPlaying = true;

    }

});



/* ========================= */
/* RSVP */
/* ========================= */

const rsvpForm =
    document.getElementById("rsvpForm");

const successMessage =
    document.getElementById("successMessage");


rsvpForm.addEventListener("submit", (event) => {

    event.preventDefault();

    rsvpForm.style.display = "none";

    successMessage.style.display = "block";

});