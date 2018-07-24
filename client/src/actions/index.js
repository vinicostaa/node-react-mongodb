import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispath => {
  const user = await axios.get("/api/current_user");
  dispath({
    type: FETCH_USER,
    payload: user.data
  });
};
