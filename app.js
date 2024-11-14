let voiceInput = ''; // Store the voice input

// Web Speech API for voice recognition (Speech-to-Text)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onstart = () => {
    console.log('Voice recognition started...');
};

recognition.onresult = (event) => {
    voiceInput = event.results[0][0].transcript;
    console.log('Recognized voice input: ', voiceInput);
    document.getElementById('output').textContent = 'You said: ' + voiceInput;
};

recognition.onerror = (event) => {
    console.log('Error occurred: ', event.error);
};

// Start the voice recognition
function startVoiceRecognition() {
    recognition.start();
}

// Function to send the voice input to Hugging Face API and get the response
async function getAIResponse() {
    if (!voiceInput) {
        document.getElementById('output').textContent = "Please speak something first!";
        return;
    }

    const response = await fetch('https://api-inference.huggingface.co/models/distilgpt2', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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', // Replace with your Hugging Face API key
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: voiceInput })
    });

    const data = await response.json();

    if (data.error) {
        document.getElementById('output').textContent = "Error: " + data.error;
    } else {
        const aiResponse = data[0].generated_text;
        document.getElementById('output').textContent = "AI Response: " + aiResponse;
        speakText(aiResponse); // Speak the AI response
    }
}

// Function to use Speech Synthesis API for reading the AI response
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
