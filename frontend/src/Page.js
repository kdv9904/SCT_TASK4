import React, { useState, useEffect } from "react";
import { List } from "./components/List";
import { addList, deleteList, getAllList, updateList } from "./utils/HandleApi";

export const Page = () => {
  const [list, setList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [listId, setlistId] = useState("");
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    getAllList(setList);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setlistId(_id);
    setText(text);
  };

  // Voice Recognition Setup
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setText(speechText); // Set the recognized text in input
      addList(speechText, setText, setList); // Automatically add task
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };
  };

  return (
    <>
      <div
        style={{
          margin: "auto",
          maxWidth: "90%",
          padding: "20px",
          border: "1px solid gray",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", fontSize: "24px" }}>TO DO APP</h1>
          <hr />
          <div className="flex flex-row">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h3 style={{ margin: 0, fontSize: "18px" }}>Task:</h3>
              <input
                type="text"
                placeholder="Enter a task"
                style={{
                  flex: 1,
                  height: "35px",
                  padding: "5px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                style={{
                  height: "35px",
                  padding: "0 15px",
                  backgroundColor: isHovered ? "green" : "skyblue",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={
                  isUpdating
                    ? () =>
                        updateList(listId, text, setList, setText, setIsUpdating)
                    : () => addList(text, setText, setList)
                }
              >
                {isUpdating ? "Update" : "Add"}
              </button>
              <button
                style={{
                  height: "35px",
                  padding: "0 15px",
                  backgroundColor: isListening ? "red" : "purple",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={startListening}
              >
                {isListening ? "Listening..." : "🎙️ Speak"}
              </button>
            </div>
          </div>
          {list.map((item) => (
            <List
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteList={() => deleteList(item._id, setList)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
