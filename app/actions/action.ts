'use server';

import { prisma } from "@/lib/utils/client";
import { companySchema } from "@/lib/utils/zodSchemas";
import { redirect } from "next/navigation";
import { z } from 'zod'
export async function createCompany(data: z.infer<typeof companySchema>) {
 const validateData = companySchema.parse(data);
 await prisma.company.create({
  data: {
   title: validateData.title,
   name: validateData.name,
   type: validateData.type,
   location: validateData.location,
   about: validateData.about , 
   salaryFrom: validateData.salaryFrom , 
   salaryTo:validateData.salaryTo, 
   applicationDeadline: validateData.applicationDeadline , 
  }
 })
 redirect('/')
}