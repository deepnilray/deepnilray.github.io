<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Audio Transcription with Whisper API</title>
</head>
<body>
  <h1>Transcribe Voice Using Whisper API</h1>
  <button onclick="startRecording()">Start Recording</button>
  <button onclick="stopRecording()">Stop Recording</button>
  <div id="output"></div>

  <script>
    let mediaRecorder;
    let audioChunks = [];

    // Start recording audio
    async function startRecording() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        audioChunks = [];
        
        // Send audio to Whisper model API
        const transcribedText = await transcribeAudio(audioBlob);
        document.getElementById('output').textContent = "Transcription: " + transcribedText;
      };

      mediaRecorder.start();
      console.log("Recording started...");
      document.getElementById('output').textContent = "Listening...";
    }

    // Stop recording
    function stopRecording() {
      if (mediaRecorder) {
        mediaRecorder.stop();
        console.log("Recording stopped.");
      }
    }

    // Function to transcribe audio using Whisper API
    async function transcribeAudio(audioBlob) {
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav');

      const response = await fetch('https://api-inference.huggingface.co/models/openai/whisper-large-v2', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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', // Replace with your Hugging Face API key
        },
        body: formData
      });

      const result = await response.json();
      if (result.error) {
        console.error('Error:', result.error);
        return "Error in transcription.";
      } else {
        return result.text;
      }
    }
  </script>
</body>
</html>
