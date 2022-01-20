import "./styles.css";
import { Body } from "./components/body";
import { Header } from "./components/header";
import { API_URL } from "./dataService/apiData";
import { useEffect, useState } from "react";
import { City } from "./components/city";
import "bootstrap/dist/css/bootstrap.min.css";

async function getForecastData(setData) {
  const tmp = await fetch(API_URL);
  const result = await tmp.json();
  setData(result);
}
const defaultData = {
  location: { name: " " },
  forecast: { forecastday: [] }
};

export default function App() {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    getForecastData(setData);
  }, []);

  return (
    <div className="App">
      <Header forecastData={data.location} />
      <City forecastData={data.location} />
      <Body forecastData={data.forecast} />
    </div>
  );
}
