'use client'

import {
 NavigationMenu,
 NavigationMenuList,
 NavigationMenuItem,
 NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
 return (
  <div className="w-full shadow-sm bg-white py-4 px-6 flex justify-between items-center rounded-full max-w-6xl mx-auto mt-4">
   {/* Logo */}
   <div className="flex items-center gap-2">
    <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
   </div>

   {/* Navigation */}
   <NavigationMenu>
    <NavigationMenuList className="flex gap-6">
     <NavigationMenuItem>
      <Link href="/" passHref>
       <NavigationMenuLink className="text-sm font-medium text-black hover:text-purple-600 transition-colors">
        Home
       </NavigationMenuLink>
      </Link>
     </NavigationMenuItem>

     <NavigationMenuItem>
      <Link href="/find-jobs" passHref>
       <NavigationMenuLink className="text-sm font-medium text-black hover:text-purple-600 transition-colors">
        Find Jobs
       </NavigationMenuLink>
      </Link>
     </NavigationMenuItem>

     <NavigationMenuItem>
      <Link href="/find-talents" passHref>
       <NavigationMenuLink className="text-sm font-medium text-black hover:text-purple-600 transition-colors">
        Find Talents
       </NavigationMenuLink>
      </Link>
     </NavigationMenuItem>

     <NavigationMenuItem>
      <Link href="/about-us" passHref>
       <NavigationMenuLink className="text-sm font-medium text-black hover:text-purple-600 transition-colors">
        About us
       </NavigationMenuLink>
      </Link>
     </NavigationMenuItem>

     <NavigationMenuItem>
      <Link href="/testimonials" passHref>
       <NavigationMenuLink className="text-sm font-medium text-black hover:text-purple-600 transition-colors">
        Testimonials
       </NavigationMenuLink>
      </Link>
     </NavigationMenuItem>
    </NavigationMenuList>
   </NavigationMenu>

   {/* Call to Action Button */}
   <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6">
    Create Jobs
   </Button>
  </div>
 )
}

export default Navbar
