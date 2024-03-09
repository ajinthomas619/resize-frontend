import React from 'react'
import ResizableComponent from './components/Resizablecomponent'
import AddComponent from './components/AddComponent'
import UpdateComponent from './components/UpdateComponent'
import CountComponent from './components/CountComponent'
import './App.css'
function App() {
 

  return (
    <>
    <div className='App'>

    <ResizableComponent>
     
        <AddComponent />
        
      </ResizableComponent>

      <ResizableComponent>
    
        <UpdateComponent />
        
      </ResizableComponent>
      

      <ResizableComponent>
     
        <CountComponent />
        
      </ResizableComponent>
      </div>
     

    

    </>
  )
}

export default App
