import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()

        console.log("email is:", email);
        console.log("password is:", password);
        setEmail("")
        setPassword("")

    }

    return (
        <>
            <div className='flex items-center justify-center h-screen w-screen'>
                <div className='border-2 border-emerald-500 rounded-xl  p-20 '>
                    <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center ' >
                        <input required value={email} onChange={(e) => { setEmail(e.target.value) }} className=' border-2 border-emerald-500 text-xl py-3 px-5 rounded-full outline-none bg-transparent text-white placeholder:text-gray-400  ' type="email" placeholder='enter email' /> <br />
                        <input required value={password} onChange={(e) => { setPassword(e.target.value) }} className='border-2 border-emerald-500 text-white text-xl rounded-full px-5 py-3 outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='enter password' />
                        <button className=' mt-5 bg-emerald-500 text-white text-xl  rounded-full px-5 py-3 outline-none bg-transparent placeholder:text-white'>Log In</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login