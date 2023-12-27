import React from 'react'
import banner from '../assets/banner.jpg'
import aboutImg from '../assets/about.jpg'

const Home = () => {
  return (
    <div className='home'>
      <img src={banner} alt="Banner photo of a luxurious restaurant" />
      <div className='banner-content'>
        <h1>Dine in luxury at The Pleasant Hill</h1>
        <div className='banner-buttons'>
          <button>View Menu</button>
          <button>Book Reservation</button>
        </div>
      </div>
      <div className="about">
        <img src={aboutImg} alt="picture" />
        <p>Nestled in the heart of Toronto, Ontario, The Pleasant Hill offers an oasis of culinary refinement in a world bustling with activity. This luxurious haven of gastronomy is not just a restaurant; it is a destination where the art of fine dining is celebrated, and every meal is an exquisite journey. With its opulent ambiance, The Pleasant Hill invites patrons to indulge in a symphony of flavors crafted by world-renowned chefs. Each dish is a masterpiece, composed of the finest locally-sourced ingredients and presented with the elegance worthy of royalty. Our sommelier-curated wine selection complements the epicurean delights, featuring rare vintages and sought-after labels from the most esteemed vineyards. At The Pleasant Hill, we believe that a meal should be a cherished moment, a time to savor the luxuries that life has to offer. We take pride in creating an unforgettable experience that begins with a warm welcome and lingers long after the last decadent dessert is enjoyed. Come, be our guest and immerse yourself in the pinnacle of Toronto's dining scene.</p>
      </div>
    </div>
  )
}

export default Home