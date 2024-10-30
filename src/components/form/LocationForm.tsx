import { FormValues } from '@/app/types/types'
import React, { FC, Fragment } from 'react'
import { UseFormRegister } from 'react-hook-form'

type LocationFormProps = {
    register: UseFormRegister<FormValues>;
    errors: any
}


const LocationForm: FC<LocationFormProps> = ({register, errors}) => {
  return (
      <Fragment>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Country</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("location.country")}
              />
              {errors.location?.country && <p className='text-red-500'>{errors.location.country.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>State</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("location.state")}
              />
              {errors.location?.state && <p className='text-red-500'>{errors.location.state.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>City</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("location.city")}
              />
              {errors.location?.city && <p className='text-red-500'>{errors.location.city.message}</p>}
          </div>
          <div className='flex flex-col justify-start gap-y-2 mt-2'>
              <label className='font-semibold text-lg'>Address</label>
              <input
                  type="text"
                  className='border border-neutral-400 outline-none px-3 h-8 w-full rounded-md'
                  {...register("location.address")}
              />
              {errors.location?.address && <p className='text-red-500'>{errors.location.address.message}</p>}
          </div>
    </Fragment>
  )
}


export default LocationForm
