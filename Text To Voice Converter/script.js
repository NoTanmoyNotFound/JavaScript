let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voices dropdown
function populateVoiceList() {
    // Clear existing options
    voiceSelect.innerHTML = '';
    // Iterate over voices and add them as options to the select dropdown
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

// Function to handle when voices change
function handleVoicesChanged() {
    // Get the list of voices
    voices = window.speechSynthesis.getVoices();
    // Check if there are voices available
    if (voices.length > 0) {
        // If voices are available, populate voice select dropdown
        populateVoiceList();
    } else {
        // If no voices available, display a message to the user
        voiceSelect.innerHTML = '<option value="">No voices available</option>';
    }
}

// Check if speech synthesis is supported
if ('speechSynthesis' in window) {
    // Call handleVoicesChanged when voices change
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    // Populate voices array when the page loads
    handleVoicesChanged();
} else {
    // If speech synthesis is not supported, display a message to the user
    voiceSelect.innerHTML = '<option value="">Speech synthesis not supported</option>';
}

// Event listener for button click
document.querySelector("button").addEventListener("click", () => {
    // Check if there are voices available
    if (voices.length > 0) {
        // If voices available, set the selected voice to the one chosen from the dropdown
        speech.voice = voices[voiceSelect.selectedIndex];
        // Set the text to be spoken
        speech.text = document.querySelector("textarea").value;
        // Speak the text
        window.speechSynthesis.speak(speech);
    } else {
        // If no voices available, display a message to the user
        alert('No voices available');
    }
});
