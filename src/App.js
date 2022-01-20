import "./styles.css";
import { Body } from "./components/body";
import { Header } from "./components/header";
import { API_URL } from "./dataService/apiData";
import { useEffect, useState } from "react";

async function getForecastData(setData) {
  const tmp = await fetch(API_URL);
  const result = await tmp.json();
  setData(result);
}

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getForecastData(setData);
  }, []);

  return (
    <div className="App">
      <Header forecastData={data.location} />
      <Body forecastData={data.forecast} />
    </div>
  );
}
