import { weatherEmojis } from "../emojis.js";

export default function Day({ weather }) {
    return (<div className="bg-white/20 backdrop-blur-md shadow-lg rounded-2xl p-6 w-80 text-center mb-6">
                <h2 className="text-xl font-semibold">{weather.name}</h2>
                <div className="text-4xl">  
                    {weatherEmojis[weather.weather[0].main] || "❓"}
                </div>
                <p className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</p>
                <p className="text-gray-300 uppercase">{weather.weather[0].description}</p>
            </div>);
}