import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispath => {
  const user = await axios.get("/api/current_user");
  dispath({
    type: FETCH_USER,
    payload: user.data
  });
};

export const handleToken = token => async dispath => {
  const user = await axios.post('/api/stripe', token);
  dispath({
    type: FETCH_USER,
    payload: user.data
  });
};
