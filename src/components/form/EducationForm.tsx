import { FormValues } from '@/app/types/types'
import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { FC, Fragment } from 'react'
import { UseFormRegister } from 'react-hook-form'

type EducationFormProps = {
    register: UseFormRegister<FormValues>;
    errors: any,
    educationFields: any,
    appendEducation: any,
    removeEducation: any
}

const EducationForm: FC<EducationFormProps> = ({ register, errors, educationFields, appendEducation, removeEducation }) => {
    return (
        <Fragment>
            <div className='mt-2'>
                <label className='font-semibold text-lg'>Education</label>
                {educationFields.map((field: any, index: number) => (
                    <div className='flex flex-row items-start gap-x-4 mt-2'>
                        <div className='flex flex-1 flex-col gap-y-2'>
                            <span className='text-sm'>Qualification</span>
                            <input
                                key={field.id}
                                type="text"
                                className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                                {...register(`education.${index}.qualification`)}
                            />
                            {errors.education?.[index]?.qualification &&
                                <p className='text-red-500 text-sm h-5'>{errors.education?.[index]?.qualification.message}</p>
                            }
                        </div>
                        <div className='flex flex-1 flex-col gap-y-2'>
                            <span className='text-sm'>Institution</span>
                            <input
                                key={field.id}
                                type="text"
                                className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                                {...register(`education.${index}.institution`)}
                            />
                            {errors.education?.[index]?.institution &&
                                <p className='text-red-500 text-sm h-5'>{errors.education?.[index]?.institution.message}</p>
                            }
                        </div>
                        <div className='flex flex-1 flex-col gap-y-2'>
                            <span className='text-sm'>Passout Year</span>
                            <input
                                key={field.id}
                                type="text"
                                className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                                {...register(`education.${index}.passout_year`)}
                            />
                            {errors.education?.[index]?.passout_year &&
                                <p className='text-red-500 text-sm h-5'>{errors.education?.[index]?.passout_year.message}</p>
                            }
                        </div>
                        {educationFields.length > 1 && (
                            <CircleMinus onClick={() => removeEducation(index)} className='text-red-600 mt-8 cursor-pointer' />
                        )}
                    </div>
                ))}
                <div onClick={() => appendEducation({ qualification: '', institution: '', passout_year: '' })} className='flex flex-row gap-x-2 mt-3 cursor-pointer'>
                    <CirclePlus />
                    <span className='text-sm'>Add qualification</span>
                </div>
            </div>
        </Fragment>
    )
}

export default EducationForm
