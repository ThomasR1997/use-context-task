import { useContext } from "react";
import { ApiContext } from "../contextState/ApiContext";

export const JokePunchline = () => {
  const { apiData } = useContext(ApiContext);
  return <p>{apiData.JokePunchline}</p>;
};
