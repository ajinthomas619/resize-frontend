import React from 'react'
import FormComponent from './FormComponent'
import axios from 'axios'
const AddComponent = () => {
    const handleSubmit = (data) => {
        axios.post('http://localhost:8080/add', { data }) 
        .then(response => {
            console.log(response.data); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return(
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <h2>Add Component</h2>
        <FormComponent onSubmit={handleSubmit}/>

        </div>
    )
}
export default AddComponent
