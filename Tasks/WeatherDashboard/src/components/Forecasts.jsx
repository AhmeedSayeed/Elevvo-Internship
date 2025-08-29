import Forecast from "./Forecast.jsx";

export default function Forecasts({ forecast }) {
    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {forecast.map((day, index) => (
                <Forecast day={day} key={index} />
            ))}
            </div>);
}