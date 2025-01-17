import { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<typeof Socket | null>(null);

  useEffect(() => {
    const socketUrl =
      process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000";

    socketRef.current = io(socketUrl, {
      path: "/socket.io",
    });

    socketRef.current.on("connect", () => {
      console.log("Connecté au serveur");
      setIsConnected(true);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Déconnecté du serveur");
      setIsConnected(false);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  return { isConnected, socketRef };
};
