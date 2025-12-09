import React from 'react';

const WeatherWidget = () => {
  const currentDate = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = dayNames[currentDate.getDay()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const time = `${hours}:${minutes.toString().padStart(2, '0')}`;
  
  const forecastDays = [
    { day: 'Today', icon: 'cloud', high: 10, low: 1 },
    { day: 'Wed', icon: 'cloud-sun', high: 10, low: 1 },
    { day: 'Thu', icon: 'cloud-lightning', high: 10, low: 1 },
    { day: 'Fri', icon: 'sun', high: 10, low: 1 },
    { day: 'Sat', icon: 'cloud', high: 10, low: 1 },
    { day: 'Sun', icon: 'cloud-rain', high: 10, low: 1 },
    { day: 'Mon', icon: 'cloud-sun', high: 10, low: 1 },
  ];

  const getWeatherIcon = (iconType) => {
    const iconSize = iconType === 'main' ? 'w-24 h-24' : 'w-8 h-8';
    
    switch (iconType) {
      case 'main':
        return (
          <svg className={iconSize} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cloud base */}
            <path d="M20 60 Q10 60 10 50 Q10 40 20 40 Q22 30 32 30 Q35 20 45 20 Q55 20 58 30 Q68 30 70 40 Q80 40 80 50 Q80 60 70 60 Z" fill="white" opacity="0.95"/>
            {/* Sun peeking from behind */}
            <circle cx="65" cy="35" r="18" fill="#FF8C00"/>
            <circle cx="65" cy="35" r="15" fill="#FFA500"/>
          </svg>
        );
      case 'cloud':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="white">
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
          </svg>
        );
      case 'cloud-sun':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="8" r="4" fill="#FF8C00"/>
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" fill="white" opacity="0.9"/>
          </svg>
        );
      case 'cloud-lightning':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" fill="white"/>
            <path d="M13 11h3l-2 4h2l-4 6v-5H8l2-4H8l4-6v5z" fill="#FFD700"/>
          </svg>
        );
      case 'sun':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="6" fill="#FF8C00"/>
          </svg>
        );
      case 'cloud-rain':
        return (
          <svg className={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" fill="white"/>
            <path d="M7 18l-2 4M11 18l-2 4M15 18l-2 4" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 w-full flex items-start justify-center ">
      {/* Glassmorphism Card */}
      <div
        className="bg-white/10 scale-75 max-w-xl backdrop-blur-2xl rounded-[50px] shadow-sm p-4 pb-6"
        style={
          {
            // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
          }
        }
      >
        {/* upmost section */}
        <div className="rounded-[50px]  bg-gray-500/30 px-4 py-1 md:px-5 md:py-2 mb-5">
          {/* Top Section - Date, Time, and Current Weather */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-white text-2xl mt-4 ml-2 font-medium">
                  {dayName}, {time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-4">
                {getWeatherIcon("main")}
                <div>
                  <p className="text-white text-6xl font-bold">10°C</p>
                  <p className="text-white/90 text-xl mt-1">Cloudy</p>
                  <p className="text-white/80 text-base mt-1">Kyiv, Ukraine</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sunrise/Sunset Bar */}
          <div className="bg-gray-800/40 rounded-full p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90 text-base">4:53 am</span>
            </div>
            <div className="text-white/80 text-base">15 h 32 m</div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90 text-base">8:13 pm</span>
            </div>
          </div>
        </div>

        {/* Rain Probability Bar */}
        <div className="bg-gray-800/40 rounded-full p-4 mb-4 flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5 text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
            <path
              d="M7 14l-2 2M9 14l-2 2M11 14l-2 2"
              stroke="#4A90E2"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-white/90 text-base">Rain: 90%</span>
        </div>

        {/* Humidity and Wind */}
        <div className="rounded-xl p-4 mb-6 flex items-center justify-between">
          <span className="text-white/90 text-base">Humidity: 73%</span>
          <span className="text-white/90 text-base">Wind: 10 km/h</span>
        </div>

        {/* 7-Day Forecast */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 px-2">
          {forecastDays.map((day, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-200/40 rounded-full p-3 min-w-[75px] text-center flex flex-col items-center"
            >
              <p className="text-white/90 text-lg font-medium mb-2">
                {day.day}
              </p>
              <div className="flex justify-center mb-2">
                {getWeatherIcon(day.icon)}
              </div>
              <div className="text-white/90 text-lg mt-auto">
                <p className="font-semibold">{day.high}°</p>
                <p className="text-white/70">{day.low}°</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;

