import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slider from '../../components/Slider'
import Arrivals from '../../components/Arrivals'
import Products from '../../components/Products'
import Choice from '../../components/Choice'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <Arrivals />
      <Products />
      <Choice />
    </div>
  )
}

export default Home
