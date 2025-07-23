'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Layers, User } from 'lucide-react'
import Image from 'next/image'

type jobCardProp = {
 id: string;
 name: string;
 title: string;
 type: string;
 location: string;
 about: string;
 salaryFrom: string;
 salaryTo: string;
 logo:string;
}

const getTimeAgo = (postedDate: string) => {
 const now = new Date();
 const posted = new Date(postedDate);
 const diffInHours = Math.floor((now.getTime() - posted.getTime()) / (1000 * 60 * 60));

 if (diffInHours < 1) return 'Just now';
 if (diffInHours < 24) return `${diffInHours}h ago`;

 const diffInDays = Math.floor(diffInHours / 24);
 if (diffInDays < 7) return `${diffInDays}d ago`;

 const diffInWeeks = Math.floor(diffInDays / 7);
 return `${diffInWeeks}w ago`;
};

const JobCard = ({
 title,
 type,
 about,
 salaryTo,
 logo
}: jobCardProp) => {

 const pastTime = new Date()

 return (
  <Card className="w-[316px] h-[360px] rounded-[12px] shadow-md relative">
   <CardHeader className="flex gap-10 flex-row justify-between items-start">
    {/* Logo */}
    <div className='p-2 shadow-2xs bg-zinc-100 rounded-md'>
     <Image
      src={logo} 
      alt='company logo'
      width={66}
      height={66}
      className="rounded-md"
     />
    </div>
    {/* Time Badge */}
    <Badge className="bg-[#B0D9FF] font-medium text-black text-[14px] px-2 py-1 rounded-md">
     {getTimeAgo(pastTime.toISOString())}
    </Badge>
   </CardHeader>

   <CardContent className="pt-0">
    <h3 className=" font-bold text-[20px] mb-2">{title}</h3>
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
     <div className="flex items-center gap-1">
      <User className="h-4 w-4" />
      1–3 yr Exp
     </div>
     <div className="flex items-center gap-1">
      <Building2 className="h-4 w-4" />
      {type}
     </div>
     <div className="flex items-center gap-1">
      <Layers className="h-4 w-4" />
      {((parseInt(salaryTo) * 12) / 100000).toFixed(1)} LPA
     </div>
    </div>

    <ul className="text-[14px] text-muted-foreground list-disc pl-[9px] ">
     <li>{about}</li>
    </ul>
   </CardContent>

   <CardFooter >
    <Button className="w-full text-[16px] font-bold bg-[#00AAFF] hover:bg-blue-600 text-white">Apply Now</Button>
   </CardFooter>
  </Card>
 )
}

export default JobCard
