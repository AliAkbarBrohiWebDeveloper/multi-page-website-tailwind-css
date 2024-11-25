import React from 'react'
import Wrapper from '@/components/shareable/wrapper'
import Image from 'next/image'
import Button from '../shareable/button'
const Images=[{
  src:"/order1.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.5)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/order2.png",
  img2:"/G3.png",
  header1:"Chicken Tikka ",
  header2:"⭐ (4.8)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/order3.png",
  img2:"/G2.png",
  header1:"Desi Chowmein",
  header2:"⭐ (4.6)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",


},{

  src:"/order4.png",
  img2:"/G1.png",
  header1:"Chicken Chargha",
  header2:"⭐ (4.2)",
  paragraph:"15$(4.8)Lorem  of the printing and typesetting industryOrder Now",

}
]

const Special = () => {

  const paragraph="Lorem Ipsum is simply dummy \n text of the printing and typesetting industry\n. Lorem Ipsum has been the industrys standard \ndummy text ever since the 1500s"
  return (

    
    <>
    <section className='mt-16 md:mt-28'>

<Wrapper>


<div className=' text-center px-20 mr-28 mt-28'>

<h3 className='font-bold text-2xl '>Today special offers</h3>
<p className='text-lg mt-3 text-center whitespace-pre-line'> {paragraph}</p>


</div>


<div className='my-20 flex gap-x-8 gap-y-6 flex-col md:flex-row justify-center items-center mx-auto  '>
{
Images.map((brands,index)=>(


<div key={index} data-aos="zoom-in" className='bg-red-100 rounded-lg w-[340px] h-[470px] '>
<Image src={brands.src} alt='kebab' height={100} width={100}  className='w-[200px] mx-16 md:mx-10 mt-3'/>
<div className='flex items-center mt-5 gap-4 '>

<Image src={brands.img2} alt='Group1' height={50} width={50} className='mx-16 md:mx-10'/>
<h3 className='text-center'>{brands.header2}</h3>

</div>

<h4 className='text-red-500 font-medium text-xl mt-6 text-center'>{brands.header1}</h4>
<p className='mt-4  text-center'>{brands.paragraph}</p>
<div className='mt-4 text-center'>
  <div className='text-center'>
<Button text='Order Now '/>
</div>
</div>
</div>
)   
)
}
</div>
</Wrapper>

    </section>
    
  
    </>
  )
}

export default Special