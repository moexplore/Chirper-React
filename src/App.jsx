import React, { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";

const App = () => {
  // let container = document.getElementById('container')
  const [chirps, setChirps] = useState([
    {
      name: "Yo-Yo",
      message: "What's up?",
    },
    {
      name: "Yo-Yo-Ma",
      message: "Ola World?",
    },
    {
      name: "Yo-Yo-Mo",
      message: "Shalom World?",
    },
  ]);
  const [userName, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleMessage = (e) => {
    setMsg(e.target.value);
  };

  const newChirp = () => {
    setChirps([
      ...chirps,
      {
        name: userName,
        message: msg,
      },
    ]);
    setUsername("");
    setMsg("");
  };

  return (
    <div>
      <Form
        userNameValue={userName}
        userNameFunction={handleChange}
        msgValue={msg}
        msgFunction={handleMessage}
        btnfunc={newChirp}
      />

      <Title title="Chirps" />

      <div className="container">
        {chirps.map((chirp) => {
          return (
            <div className="card mb-3">
              <h3 className="card-header">{chirp.name}</h3>
              <p className="card-body">{chirp.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
