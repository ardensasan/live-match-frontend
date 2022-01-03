import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const Match = () => {
  const [matchList, setMatchList] = useState([]);
  console.log(
    "%c 🌽 matchList: ",
    "font-size:20px;background-color: #EA7E5C;color:#fff;",
    matchList
  );
  const getMatchList = async () => {
    const {
      data: {
        result: { games },
      },
    } = await axios.get("http://localhost:4000/match/live");
    setMatchList(games);
  };
  useEffect(() => {
    getMatchList();
  }, []);

  return (
    <Fragment>
      <table>
        <tr>
          <th>Dire</th>
          <th>Players</th>
          <th>Radiant</th>
          <th>Players</th>
          <th>Score</th>
        </tr>
        {matchList.map((match: any) => {
          console.log(
            "%c 🍥 match: ",
            "font-size:20px;background-color: #33A5FF;color:#fff;",
            match
          );
          return (
            <tr>
              <td>{match.dire_team?.team_name}</td>
              <td>
                {match.players
                  .filter(({ team }: any) => team === 0)
                  .map((player: any) => {
                    return player.name;
                  })}
              </td>
              <td>{match.radiant_team?.team_name}</td>
              <td>
                {match.players
                  .filter(({ team }: any) => team === 1)
                  .map((player: any) => {
                    return player.name;
                  })}
              </td>
              <td>
                Dire: {match.scoreboard?.dire.score}
                Radiant: {match.scoreboard?.radiant.score}
              </td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default Match;
