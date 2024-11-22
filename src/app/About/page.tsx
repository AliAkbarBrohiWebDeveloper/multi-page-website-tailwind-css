"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wrapper from '@/components/shareable/wrapper'
import Image from 'next/image'
import Ab1 from "@/components/Assets/Image/Ab1.png"

const About = () => {


  
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,   
    });
  }, []);


const outComes=["Online Order","24/7 Service","pre-Reesevation","Orgnized food Hut place","Super chef","Clean kitchen"]

  return (
    <>
    
    <section className='mt-28 '>


<Wrapper>

  <div className='flex justify-center items-center underline font-bold text-2xl'>


    <h6>About Us </h6>
  </div>

<div className='flex items-center gap-28 flex-col md:flex-row mt-6 '>



<div  data-aos="zoom-in">

<Image src={Ab1} alt='About Picture'/>

</div>

<div  data-aos="zoom-in">

<h3 className='font-bold  text-5xl'>We are more than multiple service</h3>
<p className='text-xl text-gray-500 mt-5'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>
 



<div className='mt-6 grid grid-cols-2 gap-x-2 gap-y-4'>
    
{
    outComes.map((item,i)=>(


<div key={i} className='flex items-center gap-x-2'>


<svg width="52" height="52" className='flex-shrink-0' viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_1_48)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_1_48" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)">
<stop offset="0.125" stop-color="#00E1F0"/>
<stop offset="1" stop-color="#00616C"/>
</radialGradient>
</defs>
</svg>



<h3 className='font-medium text-lg'>{item}</h3>
</div>





    ))
}

</div>
</div>

</div>


</Wrapper>





    </section>
    
    
    
    
    </>
  )
}

export default About