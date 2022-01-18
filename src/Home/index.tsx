import { FC, Fragment, useEffect, useState } from "react";
import { Props } from "./types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatDuration } from "../utils/format";
const Home: FC<Props> = ({ socket }: Props) => {
  const [matchList, setMatchList] = useState<Array<any>>([]);

  useEffect(() => {
    if (socket)
      socket.on("live-matches", (message: any) => {
        console.log("RECIEVE");
        setMatchList([...message.matchList]);
      });
  }, [socket]);

  useEffect(() => {
    console.log("USE EFFECT");
    console.log(
      "%c 🌯 matchList: ",
      "font-size:20px;background-color: #42b983;color:#fff;",
      matchList
    );
  });
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SD</TableCell>
            <TableCell>D</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>R</TableCell>
            <TableCell>SR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchList.map((match: any) => {
            return (
              <TableRow>
                <Link to={`/match/${match.match_id}`}>
                  <TableCell> {match.scoreboard?.dire?.score || 0}</TableCell>
                  <TableCell>{match.dire_team?.team_name || ""}</TableCell>
                  <TableCell>
                    {formatDuration(
                      parseFloat(match.scoreboard?.duration || 0)
                    )}
                  </TableCell>
                  <TableCell>{match.radiant_team?.team_name || ""}</TableCell>
                  <TableCell>{match.scoreboard?.radiant?.score || 0}</TableCell>
                </Link>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default Home;
