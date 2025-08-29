import { weatherEmojis } from "../emojis.js";

export default function Forecast({ day }) {
    return (<div className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-4 text-center">
                <p className="font-medium">
                    {new Date(day.dt_txt).toLocaleDateString("en-US", {
                    weekday: "long",
                    })}
                </p>
                <div className="text-3xl">  
                    {weatherEmojis[day.weather[0].main] || "❓"}
                </div>
                <p className="text-lg font-bold">
                    {Math.round(day.main.temp)}°C
                </p>
                <p className="text-gray-300 uppercase">{day.weather[0].description}</p>
                </div>);
}