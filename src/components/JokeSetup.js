import { useContext } from "react";
import { ApiContext } from "../contextState/ApiContext";

export const JokeSetup = () => {
  const { apiData } = useContext(ApiContext);
  return <p>{apiData}</p>;
};
