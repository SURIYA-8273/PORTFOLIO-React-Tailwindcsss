import React from 'react'

const Contact = () => {
    const config={
        email:'suriyasivakumar@gmail.com',
        phone:'+91 8745632345'
    }
  return (
   <section className='h-80 flex flex-col items-center  bg-primary contact px-3' id='contact'>
        <h1 className='text-3xl text-white font-bold border-b-4 border-secondary-color pt-16 '>CONTACT</h1>
        <p className='text-center'>If you want to disscuss more in detail,please contact</p>
        <p className='text-center'><span className='font-bold'>Email: </span>{config.email}</p>
        <p className='text-center'><span className='font-bold'>Phone: </span>{config.phone}</p>
   </section>
  )
}

export default Contact