import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [ip, setIp] = useState("192.168.1.26");

  const sendRequest = (data) => {
    axios
      .post(`http://${ip}:8080/${data}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <h1>Moopan Inc.</h1>

      <div className="ipInputContainer">
        <Input
          placeholder="Local IP (default: 192.168.1.26)"
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
    </div>
  );
}

export default App;
