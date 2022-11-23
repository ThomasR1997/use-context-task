import { useContext, useEffect } from "react";
import { ApiContext } from "../contextState/ApiContext";

export const GetApi = () => {
  const { setApiData } = useContext(ApiContext);

  const fetchData = async (callback) => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();

    callback(data);
  };

  useEffect(() => {
    fetchData(setApiData);
  }, [setApiData]);
};
