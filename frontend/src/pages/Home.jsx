import React from 'react'
import Hero from '../componenets/Hero/Hero'
import LatestCollection from '../componenets/LatestCollection/LatestCollection'
import BestSeller from '../componenets/BestSeller/BestSeller'
import OurPolicy from '../componenets/OurPolicy/OurPolicy'
import NewsLetter from '../componenets/NewsLetter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home