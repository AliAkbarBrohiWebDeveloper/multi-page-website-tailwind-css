
import Image from 'next/image'
import photo1 from "@/components/Assets/Image/photo1.png"
import Wrapper from '@/components/shareable/wrapper'
import Button from '../shareable/button'
import heroPoster from '@/components/Assets/Image/heroPoster.png'

const Hero = () => {






    const headeingChanger="We're Serious For \n Food & Delivery."
  return (
    <>
    <section className='mt-16 '>
        <Wrapper>

<main className='flex gap-x-28 items-center flex-col md:flex-row' data-aos="zoom-in-down" >

<div className='flex-1'>
    <Image src={photo1} alt='Hero-section logo'/>
<h5 className='font-mono '>People Trust us</h5>


    <h1 className='font-bold text-3xl  md:text-5xl whitespace-pre-line mt-6 '>{headeingChanger}</h1>
    <p className='text-xl font-semibold max-w-screen-sm mt-6'>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>


<input type="text"placeholder=' Search food' className='py-2 px-9 border-4 rounded-full' />



<div className=' flex  gap-x-8  items-center mt-9'>
<Button text='Download App'/>
<h5>Watch video</h5>
</div>
</div>
<div>
<Image src={heroPoster} alt='hero-poster' className='border-b-[20px] border-orange-300 rounded-full bg-red-400'/>
</div>


</main>


</Wrapper>



    </section>
    </>
  )
}

export default Hero