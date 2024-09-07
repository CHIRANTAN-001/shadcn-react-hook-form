import React, { FC } from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Checkbox } from '../ui/checkbox'
import { FieldValues, UseFormReturn } from 'react-hook-form';


type CheckboxProps = {
  form: UseFormReturn<FieldValues, any, undefined>;
  name: string;
  label: string;
  data: any[]
}

const CheckBoxComponent:FC<CheckboxProps> = ({form, data, name, label}) => {
  return (
    <div className='mt-2'>
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            {data.map((item) => (
              <FormField
                key={item._id}
                control={form.control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item._id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item._id)}
                          onCheckedChange={(checked) => {
                            const currentIems = field.value || []
                            return checked
                              ? field.onChange([...currentIems, item._id])
                              : field.onChange(
                                field.value?.filter(
                                  (value: any) => value !== item._id
                                )
                              )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.name}
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
            ))}
          </FormItem>
        )}
      />
    </div>
  )
}

export default CheckBoxComponent


