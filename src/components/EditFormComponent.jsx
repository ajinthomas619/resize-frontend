import React, {useState} from 'react'
import axios from 'axios'

const EditForm =({data,onClose,id}) => {
    const [formData,setFormData] = useState({data : data?.data || ''});
    console.log(id)
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handlesubmit = (e) =>{
        const data ={formData,id}
     
        e.preventDefault()
        axios.put('http://localhost:8080/update',   data ) 
        .then(response => {
            console.log(response.data); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log("submitting updated data: ", formData)
        onClose();
    }
    return (
        <form onSubmit={handlesubmit}>
          <label>
            Data:
            <input type= "text" name="data" value={formData.data} onChange={handleChange}/>
          </label>
          <button type='submit'>Update</button>
          <button type="button" onClick={onClose}>Cancel</button>



        </form>
    )
}
export default  EditForm; 