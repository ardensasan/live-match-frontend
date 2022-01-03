import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { API_DOMAIN } from "../../common/url";
import TeamIcon from "../../components/TeamIcon";
import { getTeamLogo } from "../../utils/request";

const Match = () => {
  const [matchList, setMatchList] = useState([]);
  const getMatchList = async () => {
    const {data} = await axios.get(`${API_DOMAIN}match/live`);
    setMatchList(data);
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
          return (
            <tr>
              <td>{match.dire_team?.team_name}<TeamIcon ugc_id={match.dire_team?.team_logo}/></td>
              <td>
                {match.players
                  .filter(({ team }: any) => team === 0)
                  .map((player: any) => {
                    return player.name;
                  })}
              </td>
              <td>{match.radiant_team?.team_name}<TeamIcon ugc_id={match.radiant_team?.team_logo}/></td>
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
