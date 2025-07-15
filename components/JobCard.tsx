'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Layers, User } from 'lucide-react'
import Image from 'next/image'

type jobCardProp = {
 logo : string,
 jobTitle: string
}

const JobCard = ({logo, jobTitle}:jobCardProp) => {
 return (
  <Card className="w-[316px] h-[360px] rounded-[12px] shadow-md relative">
   <CardHeader className="flex gap-10 flex-row justify-between items-start">
    {/* Logo */}
    <div className='p-2 shadow-2xs bg-zinc-100 rounded-md'>
    <Image
     src={logo} // Update this path to match your asset
     alt='company logo'
     width={66}
     height={66}
     className="rounded-md"
     />
     </div>
    {/* Time Badge */}
    <Badge className="bg-blue-100 text-black text-xs font-medium px-2 py-1 rounded-md">
     24h Ago
    </Badge>
   </CardHeader>

   <CardContent className="pt-0">
    <h3 className=" font-bold text-[20px] mb-2">{jobTitle}</h3>
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
     <div className="flex items-center gap-1">
      <User className="h-4 w-4" />
      1–3 yr Exp
     </div>
     <div className="flex items-center gap-1">
      <Building2 className="h-4 w-4" />
      Onsite
     </div>
     <div className="flex items-center gap-1">
      <Layers className="h-4 w-4" />
      12LPA
     </div>
    </div>

    <ul className="text-[14px] text-muted-foreground list-disc pl-[9px] ">
     <li>A user-friendly interface lets you browse stunning photos and videos</li>
     <li>Filter destinations based on interests and travel style, and create personalized</li>
    </ul>
   </CardContent>

   <CardFooter >
    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Apply Now</Button>
   </CardFooter>
  </Card>
 )
}

export default JobCard
