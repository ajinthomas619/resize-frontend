import React, {useState} from 'react'

const FormComponent = ({onSubmit}) => {
    const[data,setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
        setData('')
    }
    return(
        <form onSubmit={handleSubmit}> 
        <input 
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder='Enter Data' 
        />
        <button type="submit">Submit</button>

        </form>
    )
}
export default FormComponent