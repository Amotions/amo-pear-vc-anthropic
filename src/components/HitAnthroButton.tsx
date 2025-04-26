"use client";

import React, { useState, ChangeEvent, FC } from "react";

const hitApi = () => {
  fetch("./api/hitAnthro");
};

const TextEcho = () => {
  const [response, setResponse] = useState<string>("");

  return (
    <div>
      <button onClick={hitApi}>Hit Anthro</button>
      <div>{response}</div>
    </div>
  );
};

export default TextEcho;
