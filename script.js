// Function to check the current time and toggle the live bubble
function updateLiveBubble() {
    const now = new Date(); // Get the current time
    const hours = now.getHours(); // Get the current hour (0-23)
    const liveBubble = document.getElementById("live-bubble");

    // Show the bubble between 21:00 (9 PM) and 01:00 (1 AM)
    if (hours >= 21 || hours < 1) {
        liveBubble.style.display = "flex"; // Show the bubble
    } else {
        liveBubble.style.display = "none"; // Hide the bubble
    }
}

// Update the bubble every minute (60,000 milliseconds)
setInterval(updateLiveBubble, 60000);

// Initialize Vanta.js WAVES effect
VANTA.WAVES({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x141414, // Dark gray waves
    shininess: 70, // More reflective waves
    waveHeight: 25.00, // Taller waves
    waveSpeed: 0.75, // Faster wave movement
});

// Check the bubble status immediately when the page loads
updateLiveBubble();

// Mobile hover behavior for TikTok link
function setupMobileHover() {
    const tiktokLink = document.getElementById("tiktok-link");
    const liveBubble = document.getElementById("live-bubble");

    if (tiktokLink && liveBubble) {
        let isTouching = false;

        tiktokLink.addEventListener("touchstart", () => {
            isTouching = true;
            liveBubble.style.display = "none"; // Hide bubble on touch
        });

        tiktokLink.addEventListener("touchend", () => {
            isTouching = false;
            if (!isTouching) {
                // Only show the bubble if it should be visible based on time
                updateLiveBubble();
            }
        });
    }
}

// Initialize mobile hover behavior
setupMobileHover();

// Function to show tooltips on mobile
function setupMobileTooltips() {
    const links = document.querySelectorAll('.links .link');

    links.forEach(link => {
        let tooltipTimeout;

        link.addEventListener('touchstart', () => {
            // Show tooltip after a short delay
            tooltipTimeout = setTimeout(() => {
                const tooltip = link.querySelector('::after');
                if (tooltip) {
                    tooltip.style.opacity = 1;
                    tooltip.style.visibility = 'visible';
                }
            }, 500); // Adjust delay as needed
        });

        link.addEventListener('touchend', () => {
            // Hide tooltip when touch ends
            clearTimeout(tooltipTimeout);
            const tooltip = link.querySelector('::after');
            if (tooltip) {
                tooltip.style.opacity = 0;
                tooltip.style.visibility = 'hidden';
            }
        });
    });
}

// Initialize mobile tooltips
setupMobileTooltips();

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Music Player Functionality
    const audio = document.getElementById("background-music");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const muteBtn = document.getElementById("mute-btn");
    const volumeSlider = document.getElementById("volume-slider");

    if (playPauseBtn && muteBtn && volumeSlider && audio) {
        // Play/Pause Button
        playPauseBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Mute Button
        muteBtn.addEventListener("click", () => {
            if (audio.muted) {
                audio.muted = false;
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            } else {
                audio.muted = true;
                muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
        });

        // Volume Slider
        volumeSlider.addEventListener("input", () => {
            audio.volume = volumeSlider.value;
        });
    } else {
        console.error("One or more elements are not found in the DOM.");
    }
});
