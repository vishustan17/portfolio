import React from 'react'
import "./home.css"
import pic1 from "../assests/photo/IMG_0468.jpg"

function Home() {
  return (
    <div className="flex flex-wrap">
      <div>
            <img className='w-90' src={pic1} alt="" />
        </div>
        <div class="grid grid-cols-2 gap-4 place-content-center h-48 ...">
        <h1>WELL COME </h1>
        <h1>Hi, My Name is Vishwanath</h1>
        <h2>FULL STACK WEB DEVELOPER</h2>
      </div>
    </div>
  )
}

export default Home
