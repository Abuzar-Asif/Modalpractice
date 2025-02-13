import React, { useState } from 'react'

const Modal = () => {
    const[showModal,SetShowModal]=useState(false)
    const MyModal=()=>{
  return (
    <>
    <h2>
        Modal Practice
    </h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem officia quas accusantium eum. Illum nesciunt similique at harum dicta.
    </p>
    <button onClick={()=>{SetShowModal(false)}}>
        Accept
    </button>
    </>
  )}
  return(
    <>
    <button onClick={()=>{SetShowModal(true)}}>Open Modal</button>
{showModal  && <MyModal/>}
    </>
  )
}

export default Modal