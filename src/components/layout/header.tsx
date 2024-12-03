import React from 'react'
import Wrapper from '@/components/shareable/wrapper'
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';



const Header = () => {
  return (
    <header className=' sticky top-0 z-10'>
    <Wrapper>
    <div className='flex justify-between items-center max-w-screen-xl mx-auto px-2 bg-slate-500 text-white h-16'>

<div>

<h1 className='font-bold text-3xl'>Food Hut</h1>

</div>


    <ul>
<li className='space-x-5 items-center font-medium hidden md:block   text-white'>
      <Link href="/">Today special offers</Link>
      
      
        <Link href="/About">Why FoodHut</Link>
        
      
      <Link href="/Menu">Our Menu</Link>
    

<Link href="/contact ">Contact</Link>

        </li>
    </ul>
    <Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
       
    <ul>
<li className='flex flex-col gap-y-6 text-xl font-bold'>
      <Link href="/">Today special offers</Link>
      
      
        <Link href="/About">Why FoodHut</Link>
        
      
      <Link href="/Menu">Our Menu</Link>
    

<Link href="/contact ">Contact</Link>

        </li>
    </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  
    </div>
    </Wrapper>
    </header>
  )
}

export default Header