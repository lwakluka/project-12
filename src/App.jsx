import React from 'react';
import WeatherWidget from './components/WeatherWidget';

function App() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1664295306817-092a7dacaeed?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 via-transparent to-blue-300/20"></div> */}

      <WeatherWidget />
    </div>
  );
}

export default App;

