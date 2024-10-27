import React, { useEffect, useState } from 'react';

// Updated sample data with wind speed and visibility
const initialData = [
  { place: 'London', temperature: '15°C', humidity: '70%', condition: 'Cloudy', windSpeed: '10 km/h', visibility: '10 km' },
  { place: 'New York', temperature: '20°C', humidity: '65%', condition: 'Sunny', windSpeed: '15 km/h', visibility: '12 km' },
  { place: 'India', temperature: '28°C', humidity: '80%', condition: 'Sunny', windSpeed: '8 km/h', visibility: '14 km' },
  { place: 'Bangalore', temperature: '22°C', humidity: '60%', condition: 'Rainy', windSpeed: '5 km/h', visibility: '9 km' }
];

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const data = localStorage.getItem('weatherData');
    if (data) {
      console.log("Retrieved data from local storage:", JSON.parse(data)); // Debugging line
      setWeatherData(JSON.parse(data));
    } else {
      localStorage.setItem('weatherData', JSON.stringify(initialData));
      console.log("Initial data saved to local storage:", initialData); // Debugging line
      setWeatherData(initialData);
    }
  }, []);
  
  const handleSearch = () => {
    const result = weatherData.filter((location) =>
      location.place.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (result.length > 0) {
      setFilteredData(result);
      setError(null);
    } else {
      setFilteredData([]);
      setError('No Data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Weather Application</h1>

      <div className="flex w-full max-w-5xl">
        {/* City List Table */}
        <div className="w-1/4 pr-4">
          <h2 className="bg-[#4472C4] text-white p-3 text-center font-semibold border-b border-[#000000]">City List</h2>
          <table className="w-full border border-[#000000] text-black">
            <tbody>
              {weatherData.length > 0 ? (
                weatherData.map((location, index) => (
                  <tr key={index} className="text-center border-b border-[#000000]">
                    <td className="p-2">{location.place}</td>
                  </tr>
                ))
              ) : (
                <tr className="text-center border-b border-[#000000]">
                  <td className="p-2 text-black">No Data</td>
                </tr>
              )}
            </tbody>
          </table>
          <button
            onClick={handleSearch}
            className="w-full mt-4 bg-[#4472C4] text-white p-2 rounded font-semibold"
          >
            Get Weather
          </button>
        </div>

        {/* Details Table */}
        <div className="w-3/4 pl-4">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search for a location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 mr-2 rounded w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-[#4472C4] text-white p-2 rounded font-semibold"
            >
              Search
            </button>
          </div>

          <h2 className="bg-[#4472C4] text-white p-3 text-center font-semibold border-b border-[#000000]">Details</h2>
          <table className="w-full border border-[#000000] text-black">
            <thead>
              <tr className="bg-[#4472C4] text-white">
                <th className="p-2 border border-[#000000]">City</th>
                <th className="p-2 border border-[#000000]">Temperature</th>
                <th className="p-2 border border-[#000000]">Humidity</th>
                <th className="p-2 border border-[#000000]">Condition</th>
                <th className="p-2 border border-[#000000]">Wind Speed</th>
                <th className="p-2 border border-[#000000]">Visibility</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((location, index) => (
                  <tr key={index} className="text-center border-b border-[#000000]">
                    <td className="p-2">{location.place}</td>
                    <td className="p-2">{location.temperature}</td>
                    <td className="p-2">{location.humidity}</td>
                    <td className="p-2">{location.condition}</td>
                    <td className="p-2">{location.windSpeed}</td>
                    <td className="p-2">{location.visibility}</td>
                  </tr>
                ))
              ) : (
                <tr className="text-center border-b border-[#000000]">
                  <td colSpan="6" className="p-2 text-black">{error}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
