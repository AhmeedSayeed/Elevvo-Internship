import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import Forecasts from "./components/Forecasts.jsx";
import Day from './components/Day.jsx';
import Error from "./components/Error.jsx";
import Loading from "./components/Loading.jsx";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default function App() {
    const [city, setCity] = useState("Cairo");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async (cityName) => {
        try {
        setLoading(true);
        setError("");

        const currentRes = await axios.get(
            `${BASE_URL}/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        );
        setWeather(currentRes.data);

        const forecastRes = await axios.get(
            `${BASE_URL}/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
        );
        const daily = forecastRes.data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
        );
        setForecast(daily.slice(0, 3));
        } catch {
        setError("City not found!");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        async (pos) => {
            const { latitude, longitude } = pos.coords;
            try {
            setLoading(true);
            const res = await axios.get(
                `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
            );
            setCity(res.data.name);
            fetchWeather(res.data.name);
            } catch {
            fetchWeather(city);
            }
        },
        () => fetchWeather(city)
        );
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim() !== "") fetchWeather(city);
    };

    return (
        <main className="min-h-screen flex flex-col items-center p-6">
          <Header />

            <Search onSubmit={handleSearch} city={city} onSetCity={setCity} />

            {loading && <Loading />}
            {error && <Error error={error} />}

            {weather && !error && !loading && <Day weather={weather} />}

            {!error && !loading && forecast.length > 0 && <Forecasts forecast={forecast} />}
        </main>
    );
}
