import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetchData = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios.get("http://localhost:7000")
        setData(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const refetch = fetchData()
  return {data, setData, refetch}
}

export default UseFetchData
