export const City = (props) => {
  const data = props.forecastData;
  return (
    <div className="row">
      <div className="col-7">
        <select className="custom-select custom-select-lg mb-3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-5">目前時間: {data.localtime} </div>
    </div>
  );
};
