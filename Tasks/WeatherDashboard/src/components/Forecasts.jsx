import Forecast from "./Forecast.jsx";

export default function Forecasts({ forecast }) {
    return (<div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 items-center gap-4 w-full max-w-4xl">
            {forecast.map((day, index) => (
                <Forecast day={day} key={index} />
            ))}
            </div>);
}