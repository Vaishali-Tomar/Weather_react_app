# React + Vite

Weather Application
A simple React-based weather application that displays the weather, humidity, wind speed, and visibility for selected locations using data stored in Local Storage. This app allows users to search for cities and view corresponding weather details.

Features
Display weather details for cities like London, New York, India, and Bangalore.
Search functionality to filter weather data by city.
Local storage data persistence without external API calls.
Clean UI with intuitive, clickable elements.
Tech Stack
React: For building the UI components.
Tailwind CSS: For styling components.
Local Storage: For storing and retrieving city weather data.
Getting Started
Prerequisites
Node.js and npm should be installed on your machine.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
Open the app in your browser:

arduino
Copy code
http://localhost:3000
Usage
Get Weather: View the pre-set list of cities and their weather details in the "Details" table.
Search: Type a city name in the search bar and click "Search" to filter the weather data.
Local Storage: The app will automatically save data to local storage on first load.
Customization
You can add more cities by modifying the initialData in the code. Update temperature, humidity, condition, windSpeed, and visibility as required.

Troubleshooting
Data Not Displaying: Check if weatherData is stored in Local Storage under your browser’s Developer Tools.
Wind Speed and Visibility Not Showing: Ensure these fields are included in each city’s data entry in the code.
License


