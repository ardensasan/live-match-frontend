import { useEffect, useState } from "react";
import { BrowserRouter, Route, RouteObject, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./Home";
import Match from "./Match";
const App = () => {
  const [socket, setSocket] = useState<any>(undefined);

  useEffect(() => {
    if (!socket) setSocket(io("http://localhost:4000/"));
  }, [socket]); /* eslint-disable*/
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/match/:id" element={<Match socket={socket} />} />
          <Route path="/live/" element={<Match socket={socket}/>} />
          <Route path="/live/:id" element={<Match socket={socket}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
