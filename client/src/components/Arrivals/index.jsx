import React from 'react'
import "./index.scss"

const Arrivals = () => {
  return (
    <div className='arrivals-main'>
      <h1>New Arrivals</h1>
      <div className="arrival-main-container">
        <div className="arrival-card">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
        </div>
        <div className="arrival-card">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
        </div>
        <div className="arrival-card">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <span>$ 45,743</span>
        </div>
      </div>
    </div>
  )
}

export default Arrivals
