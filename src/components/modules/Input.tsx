import React, { FC } from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type InputProps = {
    form: UseFormReturn<FieldValues, any, undefined>;
    name: string;
    label: string;
    placeholder: string;
    type: 'text' | 'number' | 'email' | 'password'
}

const InputComponent: FC<InputProps> = ({form, name, label, placeholder, type}) => {
  return (
      <div className='mt-2 w-full'>
          <FormField
              control={form.control}
              name={name}
              render={({ field }) => (
                  <FormItem>
                      <FormLabel>{label}</FormLabel>
                      <FormControl>
                          <Input type={type} placeholder={placeholder} {...field} />
                      </FormControl>
                  </FormItem>
              )}
          />
      </div>
  )
}

export default InputComponent
