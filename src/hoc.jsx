import { useEffect, useRef } from "react"

const withRenderTracker = (Component, componentName) =>{
    return function compTrack(props){
        const countRend = useRef(0)

        countRend.current +=1

        useEffect(()=>{
            console.log(`Component ${componentName} was rendered ${countRend.current} time(s)`)
        })

        return <Component {...props}/>
    }
}

export default withRenderTracker