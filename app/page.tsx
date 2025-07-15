import JobCard from '@/components/JobCard'
import Navbar from '@/components/NavBar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-full py-12 flex flex-wrap justify-center gap-[16px]'>
        <JobCard logo={"/amz.svg"} jobTitle='Full Stack Developer' />
        <JobCard logo={"/tesla.svg"} jobTitle='Node Js Developer' />
        <JobCard logo={"/swigge.svg"} jobTitle='UX/UI Designer' />
      </div>
    </>
  )
}

export default page