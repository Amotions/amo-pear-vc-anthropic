"use client";

import React, { useState, ChangeEvent, FC } from "react";

const TextEcho: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputText(e.target.value);
  };

  const handleAsk = (): void => {
    setDisplayText(inputText);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <h2>Reply</h2>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Type your question or message..."
        rows={4}
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          color: "#000000",
          marginBottom: "1rem",
        }}
      />
      <button
        onClick={handleAsk}
        style={{
          border: "solid 1px black",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Ask
      </button>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={displayText}
          readOnly
          placeholder="Your text will appear here"
          style={{
            border: "solid 1px black",
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
          }}
        />
      </div>
    </div>
  );
};

export default TextEcho;
