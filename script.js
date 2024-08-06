const progressBar = document.querySelector('.progress-bar');
const currentTimeSpan = document.querySelector('.current-time');
const totalTimeSpan = document.querySelector('.total-time');


const totalDuration = 213; 

// Function to format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Update time based on progress bar value
function updateTime() {
    const value = progressBar.value;
    const currentTime = value; // Current time in seconds
    const totalTime = totalDuration; // Total time in seconds

    currentTimeSpan.textContent = formatTime(currentTime);
    totalTimeSpan.textContent = formatTime(totalTime);
}

// Initialize the total time display
totalTimeSpan.textContent = formatTime(totalDuration);

// Add event listener to update time on progress bar input
progressBar.addEventListener('input', updateTime);
