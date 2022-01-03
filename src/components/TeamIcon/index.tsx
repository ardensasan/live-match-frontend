import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../../common/url";
import { Props } from "./types";

const TeamIcon = ({ ugc_id }: Props) => {
  const [logoUrl, setLogoUrl] = useState("/");
  const getTeamLogo = async () => {
    const {
      data: {
        data: { url },
      },
    } = await axios.get(`${API_DOMAIN}team/logo/${ugc_id}`);
    setLogoUrl(url);
  };
  useEffect(() => {
    if (ugc_id) {
      getTeamLogo();
    }
  });
  return <img src={logoUrl} alt="Trulli" width="50" height="50"/>
};

export default TeamIcon;
