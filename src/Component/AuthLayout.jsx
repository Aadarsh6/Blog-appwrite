import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Protected = ({ children, authentication = true  }) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{
        //BIT SIMPLER VERSION   
        // if(authStatus === true){
        //     navigate("/")
        // }else if (authStatus === false){
        //     navigate("/login")
        // }
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false)

    },[authStatus, navigate, authentication])

return loading ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected
