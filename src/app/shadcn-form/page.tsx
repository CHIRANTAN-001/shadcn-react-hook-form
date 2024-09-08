"use client"
import CheckBoxComponent from '@/components/modules/CheckBox'
import InputComponent from '@/components/modules/Input'
import RadioButton from '@/components/modules/RadioButton'
import { Button } from '@/components/ui/button'
import React, { Fragment } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const Home = () => {

    const languages = [
        {
            "_id": "64e8bca5f4f3a47a6c8b4567",
            "name": "JavaScript"
        },
        {
            "_id": "64e8bca5f4f3a47a6c8b4568",
            "name": "Python"
        },
        {
            "_id": "64e8bca5f4f3a47a6c8b4569",
            "name": "Java"
        },
        {
            "_id": "64e8bca5f4f3a47a6c8b4570",
            "name": "C++"
        },
        {
            "_id": "64e8bca5f4f3a47a6c8b4571",
            "name": "Ruby"
        }
    ]

    const radioOptions = [
        {
            value: "yes",
            label: "Yes",
        },
        {
            value: "no",
            label: "No",
        }
    ]

    const form = useForm();


    function onSubmit(data: any) {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
    }


    return (
        <Fragment>
            <div className=' flex justify-center items-center py-4'>
                <div className='bg-white border rounded-lg p-8 shadow-lg'>
                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='w-96'>
                            <InputComponent
                                form={form}
                                name="firstName"
                                label="First Name"
                                placeholder="Enter first name"
                                type="text"
                            />
                            <InputComponent
                                form={form}
                                name="lastName"
                                label="Last Name"
                                placeholder="Enter last name"
                                type="text"
                            />
                            <InputComponent
                                form={form}
                                name="email"
                                label="Email"
                                placeholder="Enter email"
                                type="email"
                            />
                            <InputComponent
                                form={form}
                                name="phone"
                                label="Phone"
                                placeholder="Enter phone number"
                                type="text"
                            />
                            <InputComponent
                                form={form}
                                name="location.country"
                                label="Country"
                                placeholder="Enter country"
                                type="text"
                            />
                            <InputComponent
                                form={form}
                                name="location.city"
                                label="City"
                                placeholder="Enter city"
                                type="text"
                            />
                            <CheckBoxComponent
                                form={form}
                                name="languages"
                                label="Pick Languages"
                                data={languages}
                            />
                            <RadioButton
                                form={form}
                                data={radioOptions}
                                name="graduated"
                                label="Have you graduated?"
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
        </Fragment>
    )
}

export default Home
