import "bootstrap/dist/css/bootstrap.min.css";

export const Header = (props) => {
  const data = props.forecastData;
  return (
    <div className="row m-2 text-center">
      <h2 className="col"> Weather Forecast ({data.name}) </h2>
    </div>
  );
};
