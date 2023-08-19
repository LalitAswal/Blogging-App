import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


 const SignUp = ()=>{
    const [firstName, setFirstName ] = useState('');
    const [lastName, setLastName] = useState('');
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const SubmitFom = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:4000',{
                method:"POST",
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify({firstName,lastName,password, email})
            });
            if(response.status === 200){
                alert('registered successfully')
                navigate('/')
            }
            
        } catch (error) {
            alert(error)
            navigate('/signup')
        }
    }

    // http://localhost:4000/api/v1/signUp
    

    return(
        <form  className='signup' onSubmit={SubmitFom}>
            <label id='firstName'>
            firstName:
                <input type="text"  value ={firstName} onChange={ e=> setFirstName(e.target.value) }></input>
            </label>
            <label id='lastName'>
                 LastName:
                <input type="text"  value ={lastName}  onChange={ e=> setLastName(e.target.value) }></input>
            </label>
            <label id='Email'>
                Email:
                <input type="text" value ={email}  onChange={ e=> setEmail(e.target.value)}></input>
            </label>
            <label id='Password'>
                Password:
                <input type="password" value={ password } onChange ={ e=> setPassword(e.target.value)}></input>
            </label>
            <button type='submit'>Sign up</button>
        </form>
    )
 
 }


 export default SignUp;