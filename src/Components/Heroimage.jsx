import React from 'react'
import img from "../assets/img1.png"

const Heroimage = () => {
  return (
<div className=" pt-0 my-0 text-center border-bottom">
 
      <img src={img} className="img-fluid border rounded-3 shadow-lg mb-4  ratio ratio-21x9" alt="Example image" loading="lazy" />
     
   
</div>


  )
}

export default Heroimage
