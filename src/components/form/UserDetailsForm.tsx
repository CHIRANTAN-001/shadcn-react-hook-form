import { FormValues } from '@/app/types/types'
import React, { FC, Fragment } from 'react'
import { UseFormRegister } from 'react-hook-form'

type UserDetailsFormProps = {
    register: UseFormRegister<FormValues>;
    errors: any
}

const UserDetailsForm: FC<UserDetailsFormProps> = ({register, errors}) => {
  return (
      <Fragment>
          <div className='flex flex-col gap-y-2'>
              <label className='font-semibold text-lg'>First Name</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("userDetails.firstName")}
              />
              {errors.userDetails?.firstName && <p className='text-red-500 h-5'>{errors.userDetails.firstName.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Last Name</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("userDetails.lastName")}
              />
              {errors.userDetails?.lastName && <p className='text-red-500'>{errors.userDetails.lastName.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Bio</label>
              <textarea
                  rows={5}
                  className='border border-neutral-400 outline-none px-3 w-full rounded-md'
                  {...register("userDetails.bio")}
              ></textarea>
              {errors.userDetails?.bio && <p className='text-red-500'>{errors.userDetails.bio.message}</p>}

          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Email</label>
              <input
                  type="email"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("userDetails.email")}
              />
              {errors.userDetails?.email && <p className='text-red-500'>{errors.userDetails.email.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Phone</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("userDetails.phone")}
              />
              {errors.userDetails?.phone && <p className='text-red-500'>{errors.userDetails.phone.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Gender</label>
              {['Male', 'Female', 'Others'].map((gender) => (
                  <div className='flex flex-row gap-x-2'>
                      <input type="radio" className='accent-black' value={gender} {...register("userDetails.gender")} />
                      <span className='text-sm'>{gender}</span>
                  </div>
              ))}
              {errors.userDetails?.gender && <p className='text-red-500'>{errors.userDetails.gender.message}</p>}
          </div> 
    </Fragment>
  )
}

export default UserDetailsForm
