import React from 'react'
import banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <div className='home'>
      <img src={banner} alt="Banner photo of a luxurious restaurant" />
      <h1>Dine in luxury at The Pleasant Hill</h1>
    </div>
  )
}

export default Home