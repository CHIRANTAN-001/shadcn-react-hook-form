import { z } from 'zod'

export const userDetailsSchema = z.object({
    firstName: z.string().min(3, 'First name is required'),
    lastName: z.string().min(3, 'Last name is required'),
    bio: z.string().min(50, 'Bio is required').max(1000, 'Bio is too long'),
    email: z.string().email('Invalid email'),
    phone: z.string()
        .regex(/^\d+$/, "Phone number must contain only numeric digits")
        .length(10, "Phone number must be exactly 10 digits"),
    gender: z.enum(['Male', 'Female', 'Others'], {
        errorMap: () => ({ message: "Gender is required" }),
    }),
})

export const locationSchema = z.object({
    country: z.string().min(3, 'Country is required'),
    state: z.string().min(3, 'State is required'),
    city: z.string().min(3, 'City is required'),
    address: z.string().min(5, 'Address is required'),
})

export const educationSchema = z.object({
    qualification: z.string().min(1, 'Qualification is required'),
    institution: z.string().min(1, 'Institution is required'),
    passout_year: z.string()
        .regex(/^\d+$/, "Passout year must be a number")
        .length(4, 'Passout year is required')
})

export const formSchema = z.object({
    userDetails: userDetailsSchema,
    location: locationSchema,
    education: z.array(educationSchema),
    skills: z.string()
        .array()
        .min(3, 'Please select 3 skills at least')
})