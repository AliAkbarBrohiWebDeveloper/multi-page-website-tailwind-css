import Button2 from '@/components/shareable/button2'
import Wrapper from '@/components/shareable/wrapper'
import Image from 'next/image'
import Button from '@/components/shareable/button'
const Images=[{
  src:"/order1.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.5)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/order2.png",
  img2:"/G3.png",
  header1:"Kebab",
  header2:"⭐ (4.8)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/order3.png",
  img2:"/G2.png",
  header1:"Kebab",
  header2:"⭐ (4.6)",
  paragraph:"15$(4.8)Lorem  of the printing and typesetting industryOrder Now",


},{

  src:"/order4.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.2)",
  paragraph:"15$(4.8)Lorem  of the printing and typesetting industryOrder Now",

}
]
const Images2=[{
  src:"/kb.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.5)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/kb2.png",
  img2:"/G3.png",
  header1:"Kebab",
  header2:"⭐ (4.8)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

},{

  src:"/kb3.png",
  img2:"/G2.png",
  header1:"Kebab",
  header2:"⭐ (4.6)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",


},{

  src:"/kb4.png",
  img2:"/G1.png",
  header1:"Kebab",
  header2:"⭐ (4.2)",
  paragraph:"15$(4.8)Lorem of the printing and typesetting industryOrder Now",

}
]
const Menu = () => {

    const menu="Menu that always make you \n fall in love"
  return (

<>

<section className='mt-16 md:mt-28 '>

<Wrapper>
<div className='flex justify-center items-center    '>
    <div >

<h5 className='underline font-bold text-2xl mx-36 '>Our Menu</h5>


<h4 className='font-bold text-2xl whitespace-pre-line mt-6 mx-36'>{menu}</h4>

<div className='flex gap-5 mx-36'>
<div className='hidden sm:block'>
<Button2 text='Ramen'/>
</div>
<div className='hidden sm:block'>
<Button2 text='Breakfast'/>
</div>
<div className='hidden sm:block'>
<Button2 text='Launch'/>
</div>
<div className='hidden sm:block'>
<Button2 text='Dinner'/>
</div>

<div className='hidden sm:block'>
<Button2 text='Maxican'/>
</div>
<div className='hidden sm:block'>
<Button2 text='Italian'/>
</div>
<Button2 text='Deaserts'/>
<Button2 text='Drinks'/>

</div>

<div className='my-20 flex gap-x-4 gap-y-5 flex-col md:flex-row justify-center items-center mx-auto'>

{
Images.map((brand,i)=>(


<div key={i} data-aos="zoom-in" className=' border-2 rounded-lg w-[290px] h-[460px] '>
<Image src={brand.src} alt='kebab' height={1000} width={1000}   className='border-t-[15px] w-[200px] border-orange-300 rounded-full mx-10 mt-3 hover:scale-105 duration-300'/>
<div className='flex items-center mt-5 gap-5'>

<Image src={brand.img2} alt='Group1' height={50} width={50} className='mx-10'/>
<h2>{brand.header2}</h2>

</div>

<h4 className='text-red-500 font-medium text-xl mt-6 text-center'>{brand.header1}</h4>
<p className='mt-4 text-center'>{brand.paragraph}</p>
<div className='mt-4 text-center'>
<Button text='Order Now'/>
</div>
</div>
    
))

}
</div>
<div className='my-20  flex gap-x-5 gap-y-6 flex-col md:flex-row justify-center items-center mx-auto '>

{
  Images2.map((brands,index)=>(
<div key={index}  data-aos="zoom-in" className=' border-2 w-[280px] h-[460px] rounded-lg'>
<Image src={brands.src} alt='kabab' height={100} width={100} className='border-t-[15px] border-orange-300 rounded-full w-[200px] mx-10 mt-3 hover:scale-105 duration-300'/>

<div className='flex items-center mt-5 gap-4'>

<Image src={brands.img2} height={50} width={50} alt='Group1' className='mx-10'/>
<h1>{brands.header2}</h1>

</div>

<h4 className='text-red-500 font-medium text-xl mt-6 text-center'>{brands.header1}</h4>
<p className='mt-4 text-center '>{brands.paragraph}</p>
<div className='mt-4 text-center '>
<Button text='Order Now'/>
</div>
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

export default Menu