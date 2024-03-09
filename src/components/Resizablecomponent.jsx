import React,{useState} from "react";
import { Resizable } from "react-resizable";
import 'react-resizable/css/styles.css';

const ResizableComponent = ({ children }) => {
    const [width,setWidth] = useState(1500)
    const[height,setHeight] = useState(500)
    const minWidth = 200
    const minheight = 200
    const maxheight = 600
    const onResize = (event,{element,size,handle})=>{
        if(size.width < minWidth){
            return
        }
        else{

            setWidth(size.width)
        }
        if(size.height < minheight  || size.height > maxheight){
            return
        }
        else{

            setHeight(size.height)
        }
    }
    return(
        <Resizable 
        width={width}
        height={height}
        onResize={onResize}
        resizeHandles={['se']}>
    <div style={{ width, height, backgroundColor: 'lightblue' }}>

            {children}

    </div>
        </Resizable>
    )
}
export default ResizableComponent