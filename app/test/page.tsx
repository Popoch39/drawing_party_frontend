"use client";

import React, { useState } from "react";
import { useSocket } from "@/hooks/useSocket";

const HomePage = () => {
  const { isConnected, socketRef } = useSocket();
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = () => {
    if (socketRef.current) {
      socketRef.current.emit("message", message);
    }
  };

  // Écouter les réponses du serveur
  React.useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on("response", (data: string) => {
        setResponse(data);
      });
    }
  }, [socketRef]);

  return (
    <div>
      <h1>Socket.IO avec Next.js 15</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écris un message"
      />
      <button onClick={sendMessage}>Envoyer</button>
      <p>Réponse du serveur : {response}</p>
    </div>
  );
};

export default HomePage;
