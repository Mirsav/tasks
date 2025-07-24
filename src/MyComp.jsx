import {useState, useEffect} from 'react'

const MyComp = ({number}) => {
    const [state1, setState1] = useState(0)
    const [state2, setState2] = useState(0)
    
    useEffect(()=>{
    console.log('---componentDidMount---')
    }, []) //componentDidMount

    useEffect(()=>{
        console.log('---componentDidUpdate---')
    }, [state1]) //componentDidUpdate
    
    useEffect(()=>{
        return ()=>{
        console.log('---componentWillUnmount---')
        }
    }, []) //componentWillUnmount


    useEffect(()=>{
        console.log('---componentDidMount,componentDidUpdate---')
    })

    return (
    <>
    Privet, {state1}-{state2}
    <button onClick={()=>setState1(state=>state+1)}>Click1</button>
    <button onClick={()=>setState2(state=>state+1)}>Click2</button>
    </>)

    
}

export default MyComp