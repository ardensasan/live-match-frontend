import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Props } from "./types";

const Match = (props: any) => {
    const location = useLocation();
    console.log('%c 🍩 location: ', 'font-size:20px;background-color: #42b983;color:#fff;', location);
    const navigate = useNavigate()
    console.log('%c 🍈 navigate: ', 'font-size:20px;background-color: #B03734;color:#fff;', navigate);
    const {socket} = props; 
    console.log('%c 🍒 props: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', props.match);
    const [matchDetails,setMatchDetails] = useState({});
  useEffect(() => {
    if (socket)
      socket.on("live-matches", (message: any) => {
        const match = message.matchList.find((match:any)=> match.match_id === 1)
        setMatchDetails(match);
      });
  }, [socket]);
  return <p>aaaaaaaaaaaa</p>;
};

export default Match;
