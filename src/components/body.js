export const Body = (props) => {
  const data = props.forecastData.forecastday;
  return (
    <div>
      <table className="table table-bordered text-center">
        <tr>
          <th>Date</th>
          <th>最高溫</th>
          <th>最低溫</th>
          <th>降雨機率</th>
          <th>平均濕度</th>
        </tr>
        {data.map((f) => {
          return (
            <tr key={f.date}>
              <td>{f.date}</td>
              <td>{f.day.maxtemp_c}</td>
              <td>{f.day.mintemp_c}</td>
              <td>{f.day.daily_chance_of_rain}%</td>
              <td>{f.day.avghumidity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
