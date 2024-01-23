import React, { useState } from 'react'
import UseFetchData from '../../hooks/UseFetchData'
import Card from '../ProductCard'
import "./index.scss"

const Products = () => {
    const {data} = UseFetchData()
    const [inpValue, setInpValue] = useState("")
    const [sortedData, setSortedData] = useState("default")

    const filteredData = data.filter((item) => item.name.toLowerCase().includes(inpValue))
    filteredData.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    const priceA = a.price
    const priceB = b.price

    if(sortedData === "asc") {
      return nameA.localeCompare(nameB)
    } else if(sortedData === "desc") {
      return nameB.localeCompare(nameA)
    } else if(sortedData === 'High To Low') {
      return priceB - priceA
    }else if(sortedData === 'Low To High') {
      return priceA - priceB
    } else {
      return 0
    }
  })

  return (
    <div className='products'>
      <h1>Popular Items</h1>
      <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      <div>
          <input type="text" placeholder='Search' onChange={(e) => setInpValue(e.target.value)} />
          <select value={sortedData} onChange={(e) => setSortedData(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
            <option value="High To Low">High To Low</option>
            <option value="Low To High">Low To High</option>
          </select>
        </div>
      <div className="products-main-container">
            {
                filteredData && filteredData.map((item) => (
                    <Card key={item._id} item={item} />
                ))
            }
      </div>
    </div>
  )
}

export default Products
