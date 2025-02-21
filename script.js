document.addEventListener("DOMContentLoaded", function () {
    // Function to check the current time and toggle the live bubble
    function checkLiveTime() {
        const now = new Date();
        const hours = now.getHours();
        const liveBubble = document.querySelector(".tiktok-live-bubble");

        if (hours >= 21 || hours < 1) { // Between 21:00 and 01:00
            liveBubble.style.opacity = "1";
            liveBubble.style.visibility = "visible";
        } else {
            liveBubble.style.opacity = "0";
            liveBubble.style.visibility = "hidden";
        }
    }

    // Check the time every minute
    setInterval(checkLiveTime, 60000);

    // Initial check when the page loads
    checkLiveTime();

    // Get the TikTok icon and live bubble elements
    const tiktokIcon = document.querySelector(".icon.tiktok-icon");
    const liveBubble = document.querySelector(".tiktok-live-bubble");

    // Add hover event listener for desktop
    tiktokIcon.addEventListener("mouseenter", function () {
        liveBubble.style.opacity = "0";
        liveBubble.style.visibility = "hidden";
        liveBubble.style.transition = "opacity 0s ease, visibility 0s ease"; // Immediate disappearance
    });

    tiktokIcon.addEventListener("mouseleave", function () {
        checkLiveTime(); // Re-check the time to show the bubble again if it's live time
        liveBubble.style.transition = "opacity 0.3s ease, visibility 0.3s ease"; // Smooth reappearance
    });

    // Add touch event listener for mobile devices
    tiktokIcon.addEventListener("touchstart", function () {
        liveBubble.style.opacity = "0";
        liveBubble.style.visibility = "hidden";
        liveBubble.style.transition = "opacity 0s ease, visibility 0s ease"; // Immediate disappearance
    });

    tiktokIcon.addEventListener("touchend", function () {
        checkLiveTime(); // Re-check the time to show the bubble again if it's live time
        liveBubble.style.transition = "opacity 0.3s ease, visibility 0.3s ease"; // Smooth reappearance
    });
});
