import axios from "axios"


const getFetch = async (endpoint) => {
  
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API+endpoint)
    const data = res.data
    return {data}
  } 
  catch (error) {
    return {error}
  }
  
}

export default getFetch