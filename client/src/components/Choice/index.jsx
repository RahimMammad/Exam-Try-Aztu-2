import React from 'react'
import "./index.scss"

const Choice = () => {
  return (
    <div className='choice'>
        <div className='first-choice'>
            <div className="text">
                <h2>Watch of Choice</h2>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <button>SHOW WATCHES</button>
            </div>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png" alt="" />
        </div>
        <div className='first-choice'>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png" alt="" />
            <div className="text">
                <h2>Watch of Choice</h2>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <button>SHOW WATCHES</button>
            </div>
        </div>
    </div>
  )
}

export default Choice
