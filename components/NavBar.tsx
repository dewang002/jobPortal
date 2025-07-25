'use client'

import {
 NavigationMenu,
 NavigationMenuList,
 NavigationMenuItem,
 NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import { Slider } from '@/components/ui/slider'
import { MapPin, Search, User } from 'lucide-react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Input } from './ui/input'
import { useState } from 'react'
import FormBox from './FormBox'

const Navbar = () => {
 const [salary, setSalary] = useState([50, 80])
 return (
  <>
   <div className="w-[890px] h-[80px] shadow-sm bg-white p-[16px] flex justify-between items-center rounded-full mx-auto mt-4">
    <div className="flex items-center gap-2">
     <Image src="/cmwlogo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
    </div>

    <NavigationMenu>
     <NavigationMenuList className="flex gap-6 font-bold text-[16px]">
      <NavigationMenuItem>
       <Link href="/" passHref>
        <NavigationMenuLink className="text-black text-[16px] hover:text-purple-600 transition-colors">
         Home
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Link href="/find-jobs" passHref>
        <NavigationMenuLink className="text-black text-[16px] hover:text-purple-600 transition-colors">
         Find Jobs
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Link href="/find-talents" passHref>
        <NavigationMenuLink className="text-black text-[16px] hover:text-purple-600 transition-colors">
         Find Talents
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Link href="/about-us" passHref>
        <NavigationMenuLink className="text-black text-[16px] hover:text-purple-600 transition-colors">
         About us
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
       <Link href="/testimonials" passHref>
        <NavigationMenuLink className="text-black  text-[16px] hover:text-purple-600 transition-colors">
         Testimonials
        </NavigationMenuLink>
       </Link>
      </NavigationMenuItem>
     </NavigationMenuList>
    </NavigationMenu>

    {/* Call to Action Button */}

    <FormBox />
   </div>

   <div className="w-full  mx-auto mt-4 bg-white  shadow-sm px-16 py-4 flex items-center justify-between gap-4">
    <div className="flex items-center gap-2 flex-1 max-w-[240px]">
     <Search className="h-[18px] w-[18px] text-muted-foreground" />
     <Input
      placeholder="Search By Job Title, Role"
      className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[16px] font-medium"
     />
    </div>

    <div className="w-px h-6 bg-gray-300" />

    <div className="flex items-center gap-2 ">
     <Image src='/locationLogo.svg' height='21' width='16' alt='location' />
     <Select>
      <SelectTrigger className="w-[190px] border-0 text-[16px] font-medium">
       <SelectValue placeholder="Preferred Location" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="remote">Remote</SelectItem>
       <SelectItem value="delhi">Delhi</SelectItem>
       <SelectItem value="bangalore">Bangalore</SelectItem>
      </SelectContent>
     </Select>
    </div>

    <div className="w-px h-6 bg-gray-300" />

    <div className="flex items-center gap-2 max-w-[200px]">
     <Image src={'/personLogo.svg'} height='21' width='21' alt='person' />
     <Select>
      <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 px-0 text-[16px] font-medium">
       <SelectValue placeholder="Job Type" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="full-time">Full Time</SelectItem>
       <SelectItem value="part-time">Part Time</SelectItem>
       <SelectItem value="contract">Contract</SelectItem>
      </SelectContent>
     </Select>
    </div>

    <div className="w-px h-6 bg-gray-300" />

    <div className="flex flex-col max-w-[300px] w-full">
     <p className="text-[16px] font-bold mb-1">Salary Per Month <span className='mx-4'>₹{salary[0]}k – ₹{salary[1]}k</span> </p>
     <Slider
      defaultValue={salary}
      onValueChange={setSalary}
      min={0}
      max={100}
      step={5}
     />

    </div>
   </div>
  </>
 )
}

export default Navbar
