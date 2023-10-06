import speech_recognition as sr

 

# Initialize the recognizer

recognizer = sr.Recognizer()

 

 

# Load an audio file

audio_file = "../media/sample1.wav"

 

# Open the audio file

with sr.AudioFile(audio_file) as source:

 

    # amountWords = ["charge", "charges", "fees", 'amount', 'cost', 'registration', 'registration charge', 'fee', 'paise', 'registration amount']

    # contactWords = ['phone number', 'contect details', 'contact number', 'personal number', 'email', 'email id', 'mail', 'mail id']

    # issueWords = ['network issue', 'voice issue', 'aawaj nhi aa rhi', 'disturbance', 'voice break', 'aawaj']

 

 

    # keywords = amountWords + contactWords + issueWords

 

    # audio data

    recognizer.adjust_for_ambient_noise(source)

    audio_data = recognizer.record(source)

 

    try:

        # Recognize the speech

        # text = recognizer.recognize_google(audio_data, show_all=True)

        text = recognizer.recognize_whisper(audio_data, show_dict=False)

 

 

 

        print("Recognized speech: ", text)

    except sr.UnknownValueError:

        print("Speech recognition could not understand the audio.")

    except sr.RequestError as e:

        print(f"Could not request results from service; {e}")