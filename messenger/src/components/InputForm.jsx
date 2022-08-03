import { useState } from "react";
import { io } from "socket.io-client";

export default function InputForm() {
  const [message, setMessage] = useState("");
  const socket = io();

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("chat message", { user: "nick", msg: message });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input required onChange={(e) => setMessage(e.target.value)}></input>
      <button>Send</button>
    </form>
  );
}
