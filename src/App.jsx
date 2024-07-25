import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth_service'
import { login, logout } from './redux/feature/authSlice'
import {Header, Footer} from './components'


function App() { 
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  if(loading){
    return  <h3>App loading...</h3>
  }

  return (
    <>
    <Header/>
      <h3>App Write</h3>
      <Footer/>
    </>
  )
}

export default App
