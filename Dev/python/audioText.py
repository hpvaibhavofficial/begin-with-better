import speech_recognition as sr

def listen_and_print_one_shot():
    # Initialize the recognizer
    r = sr.Recognizer()
    
    with sr.Microphone() as source:
        print(">>> Adjusting for ambient noise...")
        r.adjust_for_ambient_noise(source, duration=1) 
        
        print(">>> Ready. Speak now...")
        
        try:
            # Listen to the audio input (with a timeout if no sound at all)
            audio = r.listen(source, timeout=5, phrase_time_limit=10)
        except sr.WaitTimeoutError:
            print("Timed out waiting for spee/ch.")
            return

    print("Processing audio...")
    
    try:
        text = r.recognize_google(audio)
        print(f"\n✅ Recognized Text: {text}")
        
    except sr.UnknownValueError:
        print("❌ Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print(f"❌ Could not request results from Google Speech Recognition service; {e}")

def main_loop():
    print("--- Voice Input Console Tool ---")
    
    while True:
        # Prompt the user to press Enter to start listening
        user_input = input("\nPress ENTER to start recording, or type 'exit' to quit: ")
        
        if user_input.lower() == 'exit':
            print("Exiting program. Goodbye! 👋")
            break
        
        # Run the single listening function
        listen_and_print_one_shot()

if __name__ == "__main__":
    main_loop()