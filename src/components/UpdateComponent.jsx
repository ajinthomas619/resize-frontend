
import React,{useEffect,useState} from "react";
import EditForm from "./EditFormComponent";
import axios from "axios";

const UpdateComponent = () => {
    const [data,setData] = useState([])
    const [showEditForm,setShowEditForm] = useState(false)
    const [selectedEntry,setSelectedEntry] = useState(null)
    const [selectedEntryId, setSelectedEntryId] = useState(null);
    
    const fetchData =() => {
        axios.get('http://localhost:8080/data')
        .then(response => {
            setData(response.data || []);
        })
        .catch(error => console.log("Error Fetching Data in update", error));
    }

    useEffect(()=>{
       fetchData()
    },[fetchData])
  const handleEdit =(entry) =>{
    setShowEditForm(true)
    setSelectedEntry(true)
    setSelectedEntryId(entry._id);

  }
const handleEditFormClose = () =>{
    setShowEditForm(false)
    fetchData()
}
const handleDelete =(entryId) =>{
    axios.delete('http://localhost:8080/delete',{data:{_id:entryId}})
    .then(response => {
        if(response.status === 200){
            console.log("Entry deleted successfully")
            fetchData()
        }
        else{
            console.log("failed to delete entry")
        }
    })
    .catch(error => console.log("Error deleting data", error));
}
    
    return(
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px',backgroundColor:'lightblue' }}>
    <h2>Update Component</h2>
    {data.map((entry, index) => (
                <div key={index}>
                    <p>Entry {index + 1}: {JSON.stringify(entry.data)}</p>
                    <button onClick={() => handleEdit(entry)}>Edit Data</button>
                    <button onClick={() => handleDelete(entry._id)}>Delete</button>
                    {showEditForm && selectedEntryId === entry._id && (
                        <EditForm id={entry._id} entry={selectedEntry} onClose={handleEditFormClose} />
                    )}
                </div>
            ))}     
        </div>
    )
  }
export default UpdateComponent