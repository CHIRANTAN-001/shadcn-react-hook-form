import React, { FC } from 'react'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { FieldValues, UseFormReturn } from 'react-hook-form';


type RadioButtonProps = {
    form: UseFormReturn<FieldValues, any, undefined>;
    data: any[];
    name: string;
    label?: string;
}

const RadioButton: FC<RadioButtonProps> = ({ form, data, name, label }) => {
    return (
        <div>
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem className="space-y-3">
                        <FormLabel>{ label}</FormLabel>
                        <FormControl>
                            <RadioGroup
                                onValueChange={(value) => field.onChange(value === 'true')}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                {data.map((item: any) => (
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value={item.value} />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    )
}

export default RadioButton
