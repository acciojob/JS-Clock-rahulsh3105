const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Function to update clock hands rotation
function setDate() {
const now = new Date();

// Get seconds, minutes and hours
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();

// Calculate rotation angles in degrees
const secondsDegrees = (seconds / 60) * 360 + 90;
const minutesDegrees = (minutes / 60) * 360 + 90;
const hoursDegrees = (hours / 12) * 360 + 90;

// Update rotation of clock hands
secondHand.style.transform = rotate(${secondsDegrees}deg);
minuteHand.style.transform = rotate(${minutesDegrees}deg);
hourHand.style.transform = rotate(${hoursDegrees}deg);
}

// Call setDate function every second to update clock hands rotation
setInterval(setDate, 1000);