import axios from "axios"

export const getTeamLogo =  async () =>{
    const {data:{data:{url}}} = await axios.get("http://localhost:4000/team/logo/1")
    const image = new Image();
    image.src = url;
    return image
}