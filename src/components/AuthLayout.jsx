import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, SetLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status )

    useEffect(() => {

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){  //condition is true i.e true && false !== true 
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){  //condition is true i.e false && true !== true
            navigate('/')
        }
        SetLoader(false)
    }, [authStatus, navigate, authentication])
    
  return (
    loader ?  <h1>Loading...</h1> : <>{children}</>
  )
}

export default Protected