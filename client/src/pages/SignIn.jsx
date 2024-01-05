import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
export default function SignIn() {
  const [formData, setFormData] = useState({})
  const userData = useSelector((state) => state.user); // State returned is an object

  const loading = userData.loading;
  const error = userData.error;
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
  }
  const handelSubmit = async (e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
         dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
     
      
    }
   
  

  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4 ' onSubmit={handelSubmit}>
        <input type="email" placeholder='email'
        className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg' id='password'onChange={handleChange} />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase
         hover:opacity-95 disabled:opacity-80' disabled={loading}>{loading ? 'loading..':'Sign in'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
