import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { API_DOMAIN } from "../../common/url";
import TeamIcon from "../../components/TeamIcon";
import { formatDuration } from "../../utils/date";
import Pusher from "pusher-js";
const Match = () => {
  const [matchList, setMatchList] = useState<Array<any>>([]);
  const getLiveMatches = async () => {
    await axios.get(`${API_DOMAIN}/match/live/`);
  };

  useEffect(() => {
    const pusher = new Pusher("2199e079bc9ad09b0c70", {
      cluster: "ap1",
    });

    const matchChannel = pusher.subscribe("match-channel");
    matchChannel.bind("get-live-matches", function (data: any) {
      setMatchList(data.matchList);
    });
    getLiveMatches();
  }, []);
  return (
    <Fragment>
      <table>
        <tr>
          <th>SD</th>
          <th>D</th>
          <th>Time</th>
          <th>R</th>
          <th>SR</th>
        </tr>
        {matchList.map((match: any) => {
          return (
            <tr>
              <td> {match.dire_score | 0}</td>
              <td>
                {match.dire_team?.team_name}
                <TeamIcon ugc_id={match.dire_team?.team_logo} />
              </td>
              <td>{formatDuration(parseFloat(match.duration))}</td>
              <td>
                {match.radiant_team?.team_name}
                <TeamIcon ugc_id={match.radiant_team?.team_logo} />
              </td>
              <td>{match.radiant_score | 0}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default Match;
