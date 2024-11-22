import React from 'react'
import Wrapper from '../shareable/wrapper'



const Footer = () => {
  return (
    <>
    <Wrapper>
    <footer className='mt-16 md:mt-28'>


<div className='bg-gray-100 py-6 px-6 mt-6'>
<div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6'>

<div>
<ul>

<li className='text-red-500 text-xl font-bold'>Foodhut</li>
<p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

</ul>




</div>
<div>

<ul>

  <li className='text-red-500 text-xl font-bold'>About us</li>
  <li className='mt-6'>Service us </li>
  <li>Contact us</li>
  <li>Company</li>
</ul>


</div>
<div>


  <ul>
    <li className='text-red-500 text-xl font-bold'>Company</li>
    <li className='mt-6'>Partenership</li>
    <li>Terms of use</li>
    <li>Privacy </li>
    <li>Sitmap</li>
  </ul>
</div>
<div>

  <ul>
    <li className='text-red-500 text-xl font-bold'>Get in  Touch</li>
    <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
  </ul>
</div>





</div>



<div>
        <div className='flex justify-center align-center font-bold'>
          <p>&copy; 2024 FoodHut.com. All rights reserved</p>
        </div>
      </div>


</div>



    </footer>
    </Wrapper>
    
    </>
  )
}

export default Footer