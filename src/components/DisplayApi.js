import { useEffect, useState } from "react";

const fetchData = async (callback) => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const data = await response.json();

  callback(data);
};

export const DisplayApi = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData(setApiData);
  }, []);

  return (
    <div>
      <h3>{apiData && apiData.setup}</h3>
      <h3>{apiData && apiData.punchline}</h3>
    </div>
  );
};
