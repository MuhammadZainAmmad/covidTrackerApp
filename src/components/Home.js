import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/action";
import { useEffect } from "react";

const Main = () => {
    let state = useSelector (state => state)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getData())
    },[])

    return (
        <>
            {state.covidData.map((v,i)=><p>{v.state}</p>)}
        </>
    )
}

export default Main;