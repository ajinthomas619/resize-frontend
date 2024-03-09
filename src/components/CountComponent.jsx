import React,{ useEffect,useState} from "react";
import axios from "axios";

const CountComponent = ()=>{
const [count,setCount] = useState(0)
const fetchData = async() =>{
    try{
       axios.get("http://localhost:3000/count")
        .then(response => {
         console.log(response.data)
         setCount(response.data.add + response.data.update);
        })
    }
    catch(error) {
     console.error("Error Fetching count",error)
    }
}

useEffect(()=>{
fetchData()
const intervalId = setInterval(fetchData,5000)
return () => clearInterval(intervalId)
},[])

return (
    <div>
   <h2>Count Component</h2>
   <p>Number of Times data has been added/updated: {count}</p>

    </div>
)
}
export default  CountComponent; 