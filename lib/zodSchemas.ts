import { z } from "zod";

export const companySchema = z.object({
 title: z.string().min(2, "enter valid job post"),
 name: z.string().min(2, "compnay name must be at least 2 characters"),
 location: z.string().min(1, "location must be defined"),
 about: z.string().min(10, "detailed information should be provided"),
 salaryFrom: z.string().min(1, "Minimum salary is required"),
 salaryTo: z.string().min(1, "Maximum salary is required"),
 applicationDeadline: z.string().min(1, "Application deadline is required")
})