import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:7000")
            setData(response.data)
        }
        fetchData()
    }, [])
  return {data, setData}
}

export default UseFetchData
