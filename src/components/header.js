export const Header = (props) => {
  const data = props.forecastData;
  return <h2> Weather Forecast ({data.name}) </h2>;
};
