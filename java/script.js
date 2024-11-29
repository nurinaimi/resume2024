// Select the dark mode toggle checkbox
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if the user has a saved preference
const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

// Apply the preference on page load
if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Listen for changes to the checkbox
darkModeToggle.addEventListener('change', () => {
    const darkModeActive = darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', darkModeActive);

    // Save preference in localStorage
    localStorage.setItem('darkMode', darkModeActive ? 'enabled' : 'disabled');
});


document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    const audioToggle = document.getElementById("audio-toggle");
    const audioIcon = document.getElementById("audio-icon");

    let isPlaying = false;

    // Function to toggle play/pause
    const toggleAudio = () => {
        if (isPlaying) {
            audio.pause();
            audioIcon.src = "images/play.jpg"; // Play icon
        } else {
            audio.play();
            audioIcon.src = "images/pause.jpg"; // Pause icon
        }
        isPlaying = !isPlaying;
    };

    // Add event listener to the audio toggle button
    audioToggle.addEventListener("click", toggleAudio);
});
