import styles from "./App.module.css";


const ApiKeyInput = ({
  apiKey,
  setApiKey,
  isEditing,
  setIsEditing,
  setErrorMessage,
}) => {

  const handleApiKeyChange = (e) => {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    setErrorMessage("");
  };

  const saveApiKey = () => {
    setErrorMessage("");
    setIsEditing(false);

    localStorage.setItem("userApiKey", apiKey);

    if (apiKey.length < 30) {
      setErrorMessage("Please enter a valid API key.");
      return;
    }
  };

  const editApiKey = () => {
    setErrorMessage("");
    setIsEditing(true);
  };

  return (
    <>
      <input
        type="password"
        placeholder="Set API Key"
        value={apiKey}
        onChange={handleApiKeyChange}
        disabled={!isEditing}
      />
      <button
        className={isEditing ? styles.saveButton : styles.editButton}
        onClick={isEditing ? saveApiKey : editApiKey}
      >
        {isEditing ? "SAVE" : "EDIT"}
      </button>
    </>
  );
};

export default ApiKeyInput;