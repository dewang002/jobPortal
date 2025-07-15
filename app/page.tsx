export const dynamic = 'force-dynamic'; 

import JobCard from '@/components/JobCard'
import Navbar from '@/components/NavBar'
import { prisma } from '@/lib/utils/client'
import React from 'react'

const page = async() => {
  const data = await prisma.company.findMany()
  return (
    <>
      <Navbar />
      <div className='w-full h-full py-12 flex flex-wrap justify-center gap-[16px]'>
        {data.map(elem => {
          return <JobCard key={elem.id} jobTitle={elem.title} />
        })}
       
      </div>
    </>
  )
}

export default page