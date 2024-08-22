import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaSun,
  FaCloudRain,
  FaSnowflake,
  FaCloud,
  FaWind,
  FaThermometerHalf,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "237a1fed5fb821357de0faa8cdea835d";
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      const dailyData = response.data.list.filter(
        (reading, index) => index % 8 === 0
      );
      const processedData = dailyData.map((day) => ({
        day: new Date(day.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        temp: Math.round(day.main.temp),
        condition: day.weather[0].main.toLowerCase(),
        description: day.weather[0].description,
        humidity: day.main.humidity,
        windSpeed: day.wind.speed,
      }));
      setWeatherData(processedData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Error fetching weather data:", err);
    }
    setLoading(false);
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear":
        return <FaSun className="text-yellow-400 text-4xl" />;
      case "rain":
        return <FaCloudRain className="text-blue-400 text-4xl" />;
      case "snow":
        return <FaSnowflake className="text-blue-200 text-4xl" />;
      case "clouds":
        return <FaCloud className="text-gray-400 text-4xl" />;
      case "wind":
        return <FaWind className="text-gray-600 text-4xl" />;
      default:
        return <FaSun className="text-yellow-400 text-4xl" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-900 text-white rounded-xl shadow-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        Weather Forecast
      </h1>
      <div className="flex items-center mb-8 max-w-md mx-auto">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow p-3 rounded-l-full border-2 border-green-500 bg-gray-800 text-white focus:outline-none focus:border-green-400 text-lg"
        />
        <button
          onClick={fetchWeatherData}
          className="bg-green-500 text-white p-3 rounded-r-full hover:bg-green-600 transition duration-300"
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
      {loading && (
        <p className="text-center text-xl text-green-400">Loading...</p>
      )}
      {error && (
        <div className="text-center text-xl text-red-500 bg-red-900 p-4 rounded-lg">
          {error}
        </div>
      )}
      {weatherData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weatherData.map((day, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold mb-4 text-green-400">
                {day.day}
              </h2>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-white">
                  {day.temp}°C
                </span>
                {getWeatherIcon(day.condition)}
              </div>
              <p className="text-lg text-green-300 capitalize mb-4">
                {day.description}
              </p>
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center">
                  <FaThermometerHalf className="mr-2" />
                  <span>{day.humidity}% Humidity</span>
                </div>
                <div className="flex items-center">
                  <FaWind className="mr-2" />
                  <span>{day.windSpeed} m/s</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!weatherData && !loading && !error && (
        <div className="text-center text-xl text-green-400 mt-8">
          <FaMapMarkerAlt className="text-5xl mx-auto mb-4" />
          <p>Enter a city name to get the weather forecast</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
