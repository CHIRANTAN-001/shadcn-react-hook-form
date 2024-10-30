"use client"
import React, { Fragment, useCallback, useState } from 'react'
import { CircleMinus, CirclePlus } from 'lucide-react'
import { options } from '@/lib/skills'
import { useFieldArray, useForm } from 'react-hook-form'
import UserDetailsForm from '@/components/form/UserDetailsForm'
import LocationForm from '@/components/form/LocationForm'
import EducationForm from '@/components/form/EducationForm'
import SkillsForm from '@/components/form/SkillsForm'
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from '@/schema/schema'
import { FormValues } from '../types/types'

const ReactHookForm = () => {

    const { register, handleSubmit, formState: { errors }, control, setValue } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userDetails: { firstName: "", lastName: "", bio: "", email: "", phone: "", gender: "Male" as "Male" | "Female" | "Others" },
            location: { country: "", state: "", city: "", address: "" },
            education: [{ qualification: "", institution: "", passout_year: "" }],
            skills: [] as string[]
        }
    })

    const {
        fields: educationFields,
        append: appendEducation,
        remove: removeEducation
    } = useFieldArray({
        control,
        name: "education"
    })

    const [selectedSkills, setSelectedSkills] = useState(new Set<string>());

    const onSelectSkill = useCallback((skill: string) => {
        const updatedSkills = new Set(selectedSkills);
        
        if (updatedSkills.has(skill)) {
            updatedSkills.delete(skill);
        } else {
            updatedSkills.add(skill);
        }

        setSelectedSkills(updatedSkills);
        setValue("skills", Array.from(updatedSkills));
    }, [selectedSkills, setValue]);

    const sumbitHandler = (data: FormValues) => {
        console.log(data);
        // alert(JSON.stringify(data, null, 2));
    }

    return (
        <Fragment>
            <div className='grid grid-cols-4 py-4 w-full'>
                <div className='col-span-1'></div>
                <div className='col-span-2 bg-white border rounded-lg p-8 shadow-lg w-full'>
                    <div className='flex justify-center items-center mb-5'>
                        <span className='font-bold text-3xl'>React Hook Form</span>
                    </div>
                    <UserDetailsForm register={register} errors={errors}/>
                    <LocationForm register={register} errors={errors} /> 
                    <EducationForm
                        register={register}
                        errors={errors}
                        educationFields={educationFields}
                        appendEducation={appendEducation}
                        removeEducation={removeEducation}
                    />
                    <SkillsForm
                        selectedSkills={selectedSkills}
                        onSelectSkill={onSelectSkill}
                        skills={options}
                        errors={errors}
                    />
                    <button type="submit" onClick={handleSubmit(sumbitHandler)} className='bg-black w-full text-white py-3 rounded-full mt-4'>Submit</button>
                </div>
                <div className='col-span-1'></div>
            </div>
        </Fragment>
    )
}

export default ReactHookForm
