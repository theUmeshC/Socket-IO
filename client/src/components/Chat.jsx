import React, { useEffect } from "react";

const Chat = ({ socket, room }) => {
  const send = () => {
    socket.emit("send_message", { room: room });
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);
  return (
    <div>
      Chat
      <button onClick={send}>send</button>
    </div>
  );
};

export default Chat;
