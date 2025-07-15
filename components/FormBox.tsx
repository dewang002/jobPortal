import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import React from 'react'
import { Button } from './ui/button'
import { DialogHeader } from './ui/dialog'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { companySchema } from '@/lib/zodSchemas'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'

const FormBox = () => {
 const form = useForm<z.infer<typeof companySchema>>({
  resolver: zodResolver(companySchema),
  defaultValues: {
   title: '',
   name: '',
   location: '',
   about: '',
   salaryFrom: '',
   salaryTo: '',
   applicationDeadline: '',
  }
 })

 return (
  <Dialog >
   <DialogTrigger>
    <Button className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6">
     Create Jobs
    </Button>
   </DialogTrigger>

   <DialogContent className="w-full min-w-2xl">
    <DialogHeader className='mb-8'>
     <h2 className="text-xl font-semibold text-center">Create Job Opening</h2>
    </DialogHeader>

    <Form {...form}>
     <form className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
       <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
         <FormItem>
          <FormLabel>Job Title</FormLabel>
          <FormControl>
           <Input placeholder='enter job title...' {...field} />
          </FormControl>
         </FormItem>
        )}
       />

       <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
         <FormItem>
          <FormLabel>Company Name</FormLabel>
          <FormControl>
           <Input placeholder='amazon, microsoft, swiggy...' {...field} />
          </FormControl>
         </FormItem>
        )}
       />

       <FormField
        control={form.control}
        name='location'
        render={({ field }) => (
         <FormItem>
          <FormLabel>Location</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
           <FormControl>
            <SelectTrigger className='w-full'>
             <SelectValue placeholder="select Location" />
            </SelectTrigger>
           </FormControl>
           <SelectContent>
            <SelectGroup>
             <SelectItem value='bangalore'>
              Bangalore
             </SelectItem>
             <SelectItem value='chennai'>
              Chennai
             </SelectItem>
             <SelectItem value='roorkee'>
              Roorkee
             </SelectItem>
            </SelectGroup>
           </SelectContent>
          </Select>
         </FormItem>
        )}
        />

       <FormField
        control={form.control}
        name='title'
        render={({ field }) => (
         <FormItem>
          <FormLabel>Job Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
           <FormControl>
            <SelectTrigger className='w-full'>
             <SelectValue placeholder="select Job Type" />
            </SelectTrigger>
           </FormControl>
           <SelectContent>
            <SelectGroup>
             <SelectItem value='intern'>
              Internship
             </SelectItem>
             <SelectItem value='fulltime'>
              Full Time
             </SelectItem>
             <SelectItem value='parttime'>
              Part Time
             </SelectItem>
             <SelectItem value='contract'>
              Contract
             </SelectItem>
            </SelectGroup>
           </SelectContent>
          </Select>
         </FormItem>
        )}
       />

       {/* Empty div to maintain grid layout */}
       <div></div>
      </div>

      {/* Salary Range Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className='flex gap-2 items-end'>
        <FormField
         control={form.control}
         name='salaryFrom'
         render={({ field }) => (
          <FormItem>
           <FormLabel>Salary Range</FormLabel>
           <FormControl>
            <Input
             type="number"
             placeholder='₹0'
             {...field}
            />
           </FormControl>
          </FormItem>
         )}
        />
        <FormField
         control={form.control}
         name='salaryFrom'
         render={({ field }) => (
          <FormItem>
           <FormControl>
            <Input
             type="number"
             placeholder='₹12,00,000'
             {...field}
            />
           </FormControl>
          </FormItem>
         )}
        />
       </div>

       <FormField
        control={form.control}
        name='salaryTo'
        render={({ field }) => (
         <FormItem>
          <FormLabel>Application Deadline</FormLabel>
          <FormControl>
           <Input
            type="date"
            {...field}
           />
          </FormControl>
         </FormItem>
        )}
       />
      </div>

      <FormField
       control={form.control}
       name='about'
       render={({ field }) => (
        <FormItem>
         <FormLabel>Job Description</FormLabel>
         <FormControl>
          <Textarea
           placeholder="Please share a description to let the candidate know more about the job role."
           className="min-h-[120px]"
           {...field}
          />
         </FormControl>
        </FormItem>
       )}
      />

      <div className="flex justify-between pt-4">
       <Button type="button" variant="outline" className="px-8">
        Save Draft
       </Button>
       <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 px-8">
        Publish
       </Button>
      </div>
     </form>
    </Form>

   </DialogContent>
  </Dialog>
 )
}

export default FormBox