import React, { useState } from "react";
import { Button, Input, Alert } from "antd";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [ip, setIp] = useState("127.0.0.1");
  const [statusMessage, setStatusMessage] = useState();
  const [statusCode, setStatusCode] = useState();

  const sendRequest = (data) => {
    axios
      .get(`http://${ip}:8080/${data}`)
      .then((res) => {
        console.log(res.status, res.statusText);
        setStatusMessage(res.statusText);
        setStatusCode(res.status);
      })
      .catch((e) => {
        setStatusMessage("Something went wrong!");
        setStatusCode(500);
        console.log(e);
      });
  };

  return (
    <div className="App">
      <h1>Moopan Inc.</h1>
      <div className="mainContainer">
        <div className="ipInputContainer">
          <Input
            placeholder="Local IP (default: 127.0.0.1)"
            onChange={(event) => {
              setIp(event.target.value);
            }}
          />
        </div>

        <div className="button-container">
          <Button type="primary" onClick={() => sendRequest("open")}>
            Open
          </Button>
          <div className="hSpace10"></div>
          <Button type="primary" onClick={() => sendRequest("close")}>
            Close
          </Button>
        </div>

        <Alert
          message={statusMessage ?? "Click a button!!"}
          type={statusCode === 200 ? "success" : "error"}
        />
      </div>
    </div>
  );
}

export default App;
