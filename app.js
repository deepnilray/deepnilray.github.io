<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Interaction with Hugging Face</title>
</head>
<body>
    <h1>Say something and I will respond!</h1>
    <button onclick="startVoiceRecognition()">Start Listening</button>
    <button onclick="getAIResponse()">Get AI Response</button>
    <div id="output"></div>

    <script>
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
            document.getElementById('output').textContent = "Error: " + event.error;
        };

        // Start the voice recognition
        function startVoiceRecognition() {
            recognition.start();
        }

        // Define the Hugging Face API URL and your API Key
        const url = 'https://api-inference.huggingface.co/models/distilgpt2'; // Example API URL
        const apiKey = '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'; // Replace with your Hugging Face API key

        // Function to send the voice input to Hugging Face API and get the response
        async function getAIResponse() {
            if (!voiceInput) {
                document.getElementById('output').textContent = "Please speak something first!";
                return;
            }

            // Send the voice input to the Hugging Face API
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: voiceInput })
            });

            const data = await response.json();

            // Handle the API response
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
    </script>
</body>
</html>
