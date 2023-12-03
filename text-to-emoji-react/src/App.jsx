import { useState, useEffect } from 'react';
import styles from './App.module.css';
import useTextToEmoji from './useTextToEmoji';
import { SiOpenai } from "react-icons/si";
import ApiKeyInput from './ApiKeyInput';


function App() {
  const [input, setInput] = useState('');
  const [singleEmoji, setSingleEmoji] = useState(false);


  // Added state for API key and editing mode
  const [apiKey, setApiKey] = useState(() => {
    const storedApiKey = localStorage.getItem("userApiKey");
    return storedApiKey || "";
  });
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!apiKey) {
      setErrorMessage("API key is required to fetch emojis.");
    } else {
      setErrorMessage("");
    }
  }, [apiKey]);
  const [emoji, isLoading] = useTextToEmoji(input, singleEmoji, apiKey);

  return (
    <>
      <h1>TTE: Text-to-Emoji React Demo 🦞</h1>
      <div className={styles.card}>
        <div className={styles["input-group"]}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text for emoji conversion"
          />
          <label
              title='Only allow one emoji to be returned'
          
          >
            <input 
              type="checkbox"
              checked={singleEmoji}
              onChange={(e) => setSingleEmoji(e.target.checked)}
            />
            Single emoji
          </label>
        </div>
        {isEditing && apiKey === "" && (
            <div className={styles.apiKeyInfo}>
              <p>
                You can get a free key from{" "}
                <a
                  href="https://platform.openai.com/account/api-keys"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenAI
                </a>
                .
              </p>
              <p>
                Once you have an API key, you can set it here. It will be saved
                in your browser&apos;s local storage. Your key is not stored anywhere
                else.
              </p>
            </div>
          )}
          {isEditing && apiKey !== "" && (
            <div className={styles.apiKeyInfo}>
              <p>
                You are editing your API key. This will not affect your current
                session.
              </p>
            </div>
          )}
        {emoji && apiKey && <p className={styles["emoji-display"]}>Emoji{singleEmoji ? "" : "s"}: {emoji}</p>}
        {isLoading && apiKey && 
        <div className={styles.emojiTranslationLoader}>
          <span>📝</span><span>🔀</span><span>😃</span>
        </div>
        }
          <div className={styles.poweredBy}>
            <SiOpenai style={{transform: "translateY(4.5px) translateX(-1px)"}} fontSize={15} /> powered by ChatGPT
          </div>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
      </div>
      
      {/* create a section for my porfolio fran-dev.com */}
      <section>
        <p>Check out my portfolio at <a href="https://fran-dev.com">fran-dev.com</a> to see more projects!</p>
      </section>
      <div className={styles.apiKeyInputContainer}>
        <ApiKeyInput 
            apiKey={apiKey}
            setApiKey={setApiKey}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setErrorMessage={setErrorMessage}
          />
      </div>
    </>
  );
}

export default App;
