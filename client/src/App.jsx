import io from "socket.io-client";
import Chat from "./components/Chat";
const socket = io.connect("http://localhost:4000");

function App() {
  const room = 122;
  const handleBtn = () => {
    socket.emit("join_room", room);
    console.log("joined room");
  };

  return (
    <div className="App">
      <button onClick={handleBtn}>send message</button>
      <Chat socket={socket} room={room} />
    </div>
  );
}

export default App;
