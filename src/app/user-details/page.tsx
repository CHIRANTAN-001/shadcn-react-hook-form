"use client"
import InputComponent from '@/components/modules/Input';
import RadioButton from '@/components/modules/RadioButton';
import { Button } from '@/components/ui/button';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner';

const UserDetails = () => {
    const form = useForm();

    const gender = [
        {
            value: "male",
            label: "Male",
        },
        {
            value: "female",
            label: "Female",
        },
        {
            value: "other",
            label: "Other",
        }
    ]

    const onSubmit = (data: any) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
    }
    return (
        <div className=' flex justify-center items-center py-4'>
            <div className='bg-white border rounded-lg p-8 shadow-lg'>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-96'>
                        <InputComponent
                            form={form}
                            name="personal_information.fullName"
                            label="Full Name"
                            placeholder="Enter full name"
                            type="text"
                        />
                        <RadioButton
                            form={form}
                            data={gender}
                            name="personal_information.gender"
                            label="Gender"
                        />
                        <InputComponent
                            form={form}
                            name="contact_information.phoneNumber"
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            type="text"
                        />
                        <InputComponent
                            form={form}
                            name="contact_information.email"
                            label="Email"
                            placeholder="Enter email-id"
                            type="text"
                        />
                        <InputComponent
                            form={form}
                            name="contact_information.address.streetAddress"
                            label="Street Address"
                            placeholder="Enter Street Address"
                            type="text"
                        />
                        <InputComponent
                            form={form}
                            name="contact_information.address.city"
                            label="City"
                            placeholder="Enter city"
                            type="text"
                        />
                        <InputComponent
                            form={form}
                            name="contact_information.address.zipCode"
                            label="Zip Code"
                            placeholder="Enter Zip Code"
                            type="text"
                        />
                        
                        <Button
                            type='submit'
                            className='w-full mt-5'
                        >
                            Submit
                        </Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default UserDetails
