// ======================================
// BAACHA BIRTHDAY COUNTDOWN
// Target: 26 October 2026 - 12:00 AM
// ======================================


// Birthday date
const birthday = new Date("October 26, 2026 00:00:00").getTime();


// Countdown function
function updateCountdown() {

    // Current time
    const now = new Date().getTime();

    // Remaining time
    const difference = birthday - now;


    // If birthday has arrived
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelector(".small-text").textContent =
            "Today is your special day ❤️";

        document.querySelector("h1").textContent =
            "Happy Birthday Baacha! 🎂❤️";

        document.querySelector(".subtitle").textContent =
            "Today is all about you ✨";

        return;
    }


    // Calculate days
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    // Calculate hours
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    // Calculate minutes
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    // Calculate seconds
    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display values
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Run immediately
updateCountdown();


// Update every second
setInterval(updateCountdown, 1000);