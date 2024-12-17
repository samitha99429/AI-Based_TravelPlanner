import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>

<section className="relative h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/29725551/12779576_2560_1440_30fps.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          playsInline
        ></video>

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Explore the World with Ease
    </h1> 
    <p className="text-lg md:text-xl mb-6">
      Discover amazing places, unique experiences, and unforgettable adventures. Plan your next trip today!
    </p>
    <div className="flex space-x-4">
  {/* Book Your Trip Button */}
  <a
    href="/book"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition flex items-center space-x-2"
  >
    <span>Book Your Trip</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  </a>

  {/* Discover Destinations Button */}
  <Link to={'/create'}
    
    className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition flex items-center space-x-2"
  >
    <span>Discover Destinations</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  </Link>
</div>

  </div>
</section>

      
    </div>
  )
}

export default Hero
