import React from 'react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [backToTopButton, setbackToTopButton]= useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 580){
                setbackToTopButton(true)
            }else{
                setbackToTopButton(false)
            }
        })
    }, [])

    const scrollUp =()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
      {
        backToTopButton && (
            <button style={{
                position:"fixed",
                bottom:'20px',
                right:'50px',
                height:'40px',
                width:'40px',
                fontSize: '30px',
                outline: 'none',
                border: '0px',
                fontWeight:700
            }}
            onClick={scrollUp}
            >^</button>
        )}
        
    </div>
  )
}

export default BackToTopButton
